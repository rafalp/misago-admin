import { ApolloError } from "@apollo/client"
import { yupResolver } from "@hookform/resolvers/yup"
import { Trans } from "@lingui/macro"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import * as yup from "yup"
import { ButtonPrimary } from "../../components/Button"
import { Form, FormNumberInput, FormRow } from "../../components/Form"
import {
  FormCard,
  FormCardHeader,
  FormCardFieldset,
  FormCardTitle,
  FormCardFooter,
} from "../../components/FormCard"
import { SkeletonInput } from "../../components/Skeleton"
import { useToasts } from "../../toasts"
import { numberValidationMessage } from "../../validation"
import useSettingsUsersMutation from "./useSettingsUsersMutation"
import { SettingsUsersFormData } from "./useSettingsUsersQuery"

const FormSchema = yup
  .object({
    avatarUploadMaxSize: yup.number().min(1),
    passwordMinLength: yup.number().min(4),
    usernameMinLength: yup.number().min(1),
    usernameMaxLength: yup.number().max(50),
  })
  .required()

interface SettingsUsersFormProps {
  constraints?: {
    passwordMaxLength: number
  } | null
  settings?: SettingsUsersFormData | null
}

const SettingsUsersForm: React.FC<SettingsUsersFormProps> = ({
  constraints,
  settings,
}) => {
  const ready = !!settings
  const toasts = useToasts()
  const [mutate, { loading }] = useSettingsUsersMutation()
  const methods = useForm<SettingsUsersFormData, {}>({
    defaultValues: settings || {},
    resolver: yupResolver(FormSchema),
  })

  const { usernameMinLength, usernameMaxLength } = methods.watch()

  return (
    <FormCard>
      <Form
        disabled={!ready || loading}
        onSubmit={methods.handleSubmit(async (data) => {
          try {
            const result = await mutate({
              variables: {
                input: {
                  avatarUploadMaxSize: data.avatarUploadMaxSize,
                  passwordMinLength: data.passwordMinLength,
                  usernameMinLength: data.usernameMinLength,
                  usernameMaxLength: data.usernameMaxLength,
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
            legend={<Trans id="settings.usernames">Usernames</Trans>}
          >
            <FormRow
              label={
                <Trans id="settings.username_min_length">
                  Minimum allowed user name length
                </Trans>
              }
              name="usernameMinLength"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, {
                  min: 1,
                  max: usernameMaxLength,
                })
              }
            />
            <FormRow
              label={
                <Trans id="settings.username_max_length">
                  Maximum allowed user name length
                </Trans>
              }
              name="usernameMaxLength"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, {
                  min: usernameMinLength,
                  max: 50,
                })
              }
            />
          </FormCardFieldset>
          <FormCardFieldset
            legend={<Trans id="settings.passwords">Passwords</Trans>}
          >
            <FormRow
              label={
                <Trans id="settings.password_min_length">
                  Minimum required password length
                </Trans>
              }
              name="passwordMinLength"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, {
                  min: 4,
                  max: constraints?.passwordMaxLength,
                })
              }
            />
          </FormCardFieldset>
          <FormCardFieldset
            legend={<Trans id="settings.avatars">Avatars</Trans>}
          >
            <FormRow
              label={
                <Trans id="settings.avatar_upload_max_size">
                  Maximum size of uploaded avatar
                </Trans>
              }
              name="avatarUploadMaxSize"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, { min: 1 })
              }
              help={
                <Trans id="settings.avatar_upload_max_size.help">
                  Maximum allowed file size (in KB) for avatar uploads.
                </Trans>
              }
            />
          </FormCardFieldset>
          <FormCardFooter>
            <ButtonPrimary disabled={!ready || loading} spinner={loading}>
              <Trans id="save_changes">Save changes</Trans>
            </ButtonPrimary>
          </FormCardFooter>
        </FormProvider>
      </Form>
    </FormCard>
  )
}

export default SettingsUsersForm
