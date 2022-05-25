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
  FormCardBody,
  FormCardHeader,
  FormCardTitle,
  FormCardFooter,
} from "../../components/FormCard"
import { useToasts } from "../../toasts"
import { textValidationMessage } from "../../validation"
import useGeneralSettingsMutation from "./useGeneralSettingsMutation"

interface FormData {
  forumName: string
}

const FormSchema = yup
  .object({
    forumName: yup.string().trim().min(1).max(250),
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
          <FormCardBody>
            <FormRow
              label={<Trans id="settings.forum_name">Forum name</Trans>}
              name="forumName"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error, { min: 1, max: 250 })
              }
            />
          </FormCardBody>
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
