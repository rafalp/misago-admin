import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"
import * as yup from "yup"
import { textValidationMessage } from "../../validation/messages"
import { ButtonPrimary } from "../Button"
import { Form, FormRow, FormTextInput } from "."

export default {
  title: "Components/Form",
}

interface TextFormData {
  message: string
}

const textConstraints = { min: 4, max: 20 }
const textSchema = yup
  .object({
    message: yup
      .string()
      .trim()
      .min(textConstraints.min, "error_min")
      .max(textConstraints.max, "error_max"),
  })
  .required()

export const FormTextControl = () => {
  const methods = useForm<TextFormData, {}>({
    defaultValues: { message: "Hello" },
    resolver: yupResolver(textSchema),
  })

  return (
    <Form onSubmit={methods.handleSubmit(() => {})}>
      <FormProvider {...methods}>
        <FormRow
          label="Example field"
          name="message"
          control={<FormTextInput />}
          validationMessage={(value: string, error) =>
            textValidationMessage(value, error, textConstraints)
          }
        />
      </FormProvider>
      <hr />
      <ButtonPrimary>Submit</ButtonPrimary>
    </Form>
  )
}
FormTextControl.storyName = "Text Input Field"

export const FormTextControlFullExample = () => {
  const methods = useForm<TextFormData>({
    defaultValues: { message: "Hello" },
    resolver: yupResolver(textSchema),
  })

  return (
    <Form onSubmit={methods.handleSubmit(() => {})}>
      <FormProvider {...methods}>
        <FormRow
          label="Username"
          name="message"
          control={<FormTextInput />}
          help={
            <>
              Your user name must be 4-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </>
          }
          validationMessage={(value: string, error) =>
            textValidationMessage(value, error, textConstraints)
          }
          optional
        />
      </FormProvider>
      <hr />
      <ButtonPrimary>Submit</ButtonPrimary>
    </Form>
  )
}
FormTextControlFullExample.storyName = "Text Input Field Full Example"

export const FormDisabled = () => {
  const methods = useForm<TextFormData, {}>({
    defaultValues: { message: "Hello" },
    resolver: yupResolver(textSchema),
  })

  return (
    <Form disabled onSubmit={methods.handleSubmit(() => {})}>
      <FormProvider {...methods}>
        <FormRow
          label="Example field"
          name="message"
          control={<FormTextInput />}
        />
      </FormProvider>
      <hr />
      <ButtonPrimary>Submit</ButtonPrimary>
    </Form>
  )
}
FormDisabled.storyName = "Disabled"
