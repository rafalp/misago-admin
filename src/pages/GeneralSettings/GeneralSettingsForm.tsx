import { ApolloError } from "@apollo/client"
import { yupResolver } from "@hookform/resolvers/yup"
import { Trans } from "@lingui/macro"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import * as yup from "yup"
import { ButtonPrimary } from "../../components/Button"
import { Form, FormRow, FormTextInput } from "../../components/Form"
import {
  FormCard,
  FormCardHeader,
  FormCardFieldset,
  FormCardTitle,
  FormCardFooter,
} from "../../components/FormCard"
import { useToasts } from "../../toasts"
import { textValidationMessage } from "../../validation"
import useGeneralSettingsMutation from "./useGeneralSettingsMutation"

interface FormData {
  forumName: string
  forumIndexTitle: string
  forumIndexHeader: string
}

const FormSchema = yup
  .object({
    forumName: yup.string().trim().min(1).max(250),
    forumIndexTitle: yup.string().trim().min(0).max(250),
    forumIndexHeader: yup.string().trim().min(0).max(250),
  })
  .required()

interface GeneralSettingsFormProps {
  settings: FormData
}

const GeneralSettingsForm: React.FC<GeneralSettingsFormProps> = ({
  settings,
}) => {
  const toasts = useToasts()
  const [mutate, { loading }] = useGeneralSettingsMutation()
  const methods = useForm<FormData, {}>({
    defaultValues: settings,
    resolver: yupResolver(FormSchema),
  })

  return (
    <FormCard>
      <Form
        disabled={loading}
        onSubmit={methods.handleSubmit(async (data) => {
          try {
            const result = await mutate({
              variables: {
                input: {
                  forumName: data.forumName,
                  forumIndexTitle: data.forumIndexTitle,
                  forumIndexHeader: data.forumIndexHeader,
                },
              },
            })

            if (result.data?.settingsUpdate?.errors) {
              toasts.error(
                <Trans id="form_contains_errors">Form contains errors.</Trans>
              )
              result.data?.settingsUpdate?.errors.forEach((error) =>
                methods.setError(error.location as any, error)
              )
            } else if (result.data?.settingsUpdate?.updated) {
              toasts.success(
                <Trans id="settings.updated">Settings updated.</Trans>
              )
            }
          } catch (error) {
            toasts.graphQLError(error as ApolloError)
          }
        })}
      >
        <FormProvider {...methods}>
          <FormCardHeader>
            <FormCardTitle>
              <Trans id="settings.change">Change settings</Trans>
            </FormCardTitle>
          </FormCardHeader>
          <FormCardFieldset
            legend={<Trans id="settings.branding">Forum branding</Trans>}
          >
            <FormRow
              label={<Trans id="settings.forum_name">Forum name</Trans>}
              name="forumName"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error, { min: 1, max: 250 })
              }
            />
          </FormCardFieldset>
          <FormCardFieldset
            legend={<Trans id="settings.forum_index">Forum index</Trans>}
          >
            <FormRow
              label={<Trans id="settings.forum_name">Forum index title</Trans>}
              name="forumIndexTitle"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error, { min: 0, max: 250 })
              }
              optional
            />
            <FormRow
              label={
                <Trans id="settings.forum_name">Forum index header</Trans>
              }
              name="forumIndexHeader"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error, { min: 0, max: 250 })
              }
              optional
            />
          </FormCardFieldset>
          <FormCardFooter>
            <ButtonPrimary disabled={loading} spinner={loading}>
              <Trans id="save_changes">Save changes</Trans>
            </ButtonPrimary>
          </FormCardFooter>
        </FormProvider>
      </Form>
    </FormCard>
  )
}

export default GeneralSettingsForm
