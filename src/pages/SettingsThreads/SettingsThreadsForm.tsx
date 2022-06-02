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
import useSettingsThreadsMutation from "./useSettingsThreadsMutation"
import { SettingsThreadsFormData } from "./useSettingsThreadsQuery"

const FormSchema = yup
  .object({
    postMinLength: yup.number().min(1),
    postsPerPage: yup.number().min(5).max(100),
    postsPerPageOrphans: yup.number().min(0),
    threadTitleMinLength: yup.number().min(1),
    threadTitleMaxLength: yup.number().min(4).max(255),
    threadsPerPage: yup.number().min(5).max(150),
  })
  .required()

type SettingsThreadsFormProps = {
  settings?: SettingsThreadsFormData | null
}

const SettingsThreadsForm: React.FC<SettingsThreadsFormProps> = ({
  settings,
}) => {
  const ready = !!settings
  const toasts = useToasts()
  const [mutate, { loading }] = useSettingsThreadsMutation()
  const methods = useForm<SettingsThreadsFormData, {}>({
    defaultValues: settings || {},
    resolver: yupResolver(FormSchema),
  })

  return (
    <FormCard>
      <Form
        disabled={!ready || loading}
        onSubmit={methods.handleSubmit(async (data) => {
          try {
            const result = await mutate({
              variables: {
                input: {
                  postMinLength: data.postMinLength,
                  postsPerPage: data.postsPerPage,
                  postsPerPageOrphans: data.postsPerPageOrphans,
                  threadTitleMinLength: data.threadTitleMinLength,
                  threadTitleMaxLength: data.threadTitleMaxLength,
                  threadsPerPage: data.threadsPerPage,
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
            legend={<Trans id="settings.posting">Posting</Trans>}
          >
            <FormRow
              label={
                <Trans id="settings.thread_title_min_length">
                  Minimum allowed thread title length
                </Trans>
              }
              name="threadTitleMinLength"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, { min: 1 })
              }
            />
            <FormRow
              label={
                <Trans id="settings.thread_title_max_length">
                  Maximum allowed thread title length
                </Trans>
              }
              name="threadTitleMaxLength"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, { min: 4, max: 255 })
              }
            />
            <FormRow
              label={
                <Trans id="settings.post_min_length">
                  Minimum allowed post length
                </Trans>
              }
              name="postMinLength"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, { min: 1 })
              }
            />
          </FormCardFieldset>
          <FormCardFieldset
            legend={<Trans id="settings.threads_lists">Threads lists</Trans>}
          >
            <FormRow
              label={
                <Trans id="settings.threads_per_page">Threads per page</Trans>
              }
              name="threadsPerPage"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, { min: 5, max: 150 })
              }
            />
          </FormCardFieldset>
          <FormCardFieldset
            legend={<Trans id="settings.thread_pages">Thread pages</Trans>}
          >
            <FormRow
              label={
                <Trans id="settings.posts_per_page">
                  Number of posts displayed on a single thread page
                </Trans>
              }
              name="postsPerPage"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, { min: 5, max: 100 })
              }
            />
            <FormRow
              label={
                <Trans id="settings.posts_per_page_orphans">
                  Maximum orphans
                </Trans>
              }
              name="postsPerPageOrphans"
              control={
                ready ? <FormNumberInput /> : <SkeletonInput words={[40]} />
              }
              validationMessage={(value: string, error) =>
                numberValidationMessage(value, error, { min: 0 })
              }
              help={
                <Trans id="settings.posts_per_page_orphans.help">
                  If number of posts to be displayed on the last page is less
                  or equal to number specified in this setting, those posts
                  will instead be displayed on previous page, reducing total
                  number of pages in a thread.
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

export default SettingsThreadsForm
