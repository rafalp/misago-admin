import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"
import * as yup from "yup"
import { textValidationMessage } from "../../validation"
import { ButtonPrimary } from "../Button"
import { Form, FormRow, FormTextAreaInput, FormTextInput } from "../Form"
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

interface MinimalFormData {
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

interface ComplexFormData {
  username: string
  email: string
  title: string
  password: string
  description: string
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
            - primary group - group memberships - admin yes no - moderator yes
            no
          </FormCardFieldset>
          <FormCardFooter>
            <ButtonPrimary>Save changes</ButtonPrimary>
          </FormCardFooter>
        </FormProvider>
      </Form>
    </FormCard>
  )
}
