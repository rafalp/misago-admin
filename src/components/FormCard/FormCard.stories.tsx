import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"
import * as yup from "yup"
import { textValidationMessage } from "../../validation"
import { ButtonPrimary } from "../Button"
import {
  Form,
  FormRow,
  FormCheckbox,
  FormCheckboxLabel,
  FormSelect,
  FormSelectMultiple,
  FormTextAreaInput,
  FormTextInput,
} from "../Form"
import {
  FormCard,
  FormCardBody,
  FormCardHeader,
  FormCardFieldset,
  FormCardFooter,
  FormCardTitle,
} from "."

export default {
  title: "Components/Form Card",
}

type MinimalFormData = {
  username: string
  email: string
  title: string
}

const minimalFormSchema = yup
  .object({
    username: yup.string().trim().min(3).max(20),
    email: yup.string().trim().email(),
    title: yup.string().trim().max(20),
  })
  .required()

export const Minimal = () => {
  const methods = useForm<MinimalFormData, {}>({
    defaultValues: {
      username: "Aerith",
      email: "test@example.com",
      title: "",
    },
    resolver: yupResolver(minimalFormSchema),
  })

  return (
    <FormCard>
      <Form onSubmit={methods.handleSubmit(() => {})}>
        <FormProvider {...methods}>
          <FormCardHeader>
            <FormCardTitle>Edit User</FormCardTitle>
          </FormCardHeader>
          <FormCardBody>
            <FormRow
              label="Username"
              name="username"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error, { min: 3, max: 20 })
              }
              help={
                <>
                  Your user name must be 4-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </>
              }
            />
            <FormRow
              label="E-mail address"
              name="email"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error)
              }
            />
            <FormRow
              label="Title"
              name="title"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error)
              }
              optional
            />
          </FormCardBody>
          <FormCardFooter>
            <ButtonPrimary>Save changes</ButtonPrimary>
          </FormCardFooter>
        </FormProvider>
      </Form>
    </FormCard>
  )
}

type ComplexFormData = {
  username: string
  email: string
  title: string
  password: string
  description: string
  group: string
  groups: Array<string>
  mod: boolean
  admin: boolean
}

const complexFormSchema = yup
  .object({
    username: yup.string().trim().min(3).max(20),
    email: yup.string().trim().email(),
    title: yup.string().trim().max(20),
    password: yup.string().trim().max(40),
    description: yup.string().trim().max(50),
  })
  .required()

export const Complex = () => {
  const methods = useForm<ComplexFormData, {}>({
    defaultValues: {
      username: "Aerith",
      email: "test@example.com",
      title: "",
      password: "",
      description: "",
      group: "admin",
      groups: ["user", "admin"],
      mod: true,
      admin: false,
    },
    resolver: yupResolver(complexFormSchema),
  })

  return (
    <FormCard>
      <Form onSubmit={methods.handleSubmit(() => {})}>
        <FormProvider {...methods}>
          <FormCardHeader>
            <FormCardTitle>Edit User</FormCardTitle>
          </FormCardHeader>
          <FormCardFieldset legend="Basic Details">
            <FormRow
              label="Username"
              name="username"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error, { min: 3, max: 20 })
              }
              help={
                <>
                  Your user name must be 4-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </>
              }
            />
            <FormRow
              label="Title"
              name="title"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error)
              }
              optional
            />
            <FormRow
              label="Description"
              name="description"
              control={<FormTextAreaInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error)
              }
              optional
            />
          </FormCardFieldset>
          <FormCardFieldset legend="Sign In Credentials">
            <FormRow
              label="E-mail address"
              name="email"
              control={<FormTextInput />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error)
              }
            />
            <FormRow
              label="New password"
              name="password"
              control={<FormTextInput type="password" />}
              validationMessage={(value: string, error) =>
                textValidationMessage(value, error, { min: 0, max: 40 })
              }
              help={<>To change user password enter new password here.</>}
              optional
            />
          </FormCardFieldset>
          <FormCardFieldset legend="Permissions">
            <FormRow
              label="Primary group"
              name="group"
              control={
                <FormSelect
                  options={[
                    { value: "user", name: "Users" },
                    { value: "mod", name: "Moderators" },
                    { value: "admin", name: "Administrators" },
                  ]}
                />
              }
              help={
                <>
                  Primary group for this user. Affects the way user is
                  displayed.
                </>
              }
            />
            <FormRow
              label="Group memberships"
              name="groups"
              control={
                <FormSelectMultiple
                  options={[
                    { value: "user", name: "Users" },
                    { value: "mod", name: "Moderators" },
                    { value: "admin", name: "Administrators" },
                  ]}
                />
              }
              help={<>Select other groups this user is member of.</>}
            />
            <FormRow
              name="mod"
              control={
                <FormCheckboxLabel label="Global moderator">
                  <FormCheckbox />
                </FormCheckboxLabel>
              }
              help={
                <>
                  Global moderator can moderate entire site without need for
                  explicit moderator permissions.
                </>
              }
            />
            <FormRow
              name="admin"
              control={
                <FormCheckboxLabel label="Root administrator">
                  <FormCheckbox />
                </FormCheckboxLabel>
              }
              help={
                <>
                  Root administrator status can only be removed by other root
                  admins.
                </>
              }
            />
          </FormCardFieldset>
          <FormCardFooter>
            <ButtonPrimary>Save changes</ButtonPrimary>
          </FormCardFooter>
        </FormProvider>
      </Form>
    </FormCard>
  )
}
