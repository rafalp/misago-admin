import { yupResolver } from "@hookform/resolvers/yup"
import { FormProvider, useForm } from "react-hook-form"
import * as yup from "yup"
import {
  numberValidationMessage,
  textValidationMessage,
} from "../../validation"
import { ButtonPrimary } from "../Button"
import {
  Form,
  FormCheckbox,
  FormCheckboxLabel,
  FormNumberInput,
  FormRow,
  FormTextAreaInput,
  FormTextInput,
} from "."

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
      .min(textConstraints.min)
      .max(textConstraints.max),
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

export const FormTextAreaControl = () => {
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
          control={<FormTextAreaInput />}
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
FormTextAreaControl.storyName = "Text Area Input Field"

interface BoolFormData {
  checked: boolean
}

export const FormCheckboxControl = () => {
  const methods = useForm<BoolFormData, {}>({
    defaultValues: { checked: false },
    resolver: yupResolver(textSchema),
  })

  return (
    <Form onSubmit={methods.handleSubmit(() => {})}>
      <FormProvider {...methods}>
        <FormRow
          label="Example field"
          name="checked"
          control={<FormCheckbox />}
        />
      </FormProvider>
      <hr />
      <ButtonPrimary>Submit</ButtonPrimary>
    </Form>
  )
}
FormCheckboxControl.storyName = "Checkbox Field"

export const FormCheckboxLabelControl = () => {
  const methods = useForm<BoolFormData, {}>({
    defaultValues: { checked: false },
    resolver: yupResolver(textSchema),
  })

  return (
    <Form onSubmit={methods.handleSubmit(() => {})}>
      <FormProvider {...methods}>
        <FormRow
          label="Example field"
          name="checked"
          control={
            <FormCheckboxLabel label="Accept terms and services">
              <FormCheckbox />
            </FormCheckboxLabel>
          }
        />
      </FormProvider>
      <hr />
      <ButtonPrimary>Submit</ButtonPrimary>
    </Form>
  )
}
FormCheckboxLabelControl.storyName = "Checkbox Field With Label"

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

interface NumberFormData {
  age: string | number | null
}

const ageConstraints = { min: 18, max: 64 }
const ageSchema = yup
  .object({
    age: yup
      .number()
      .integer()
      .min(ageConstraints.min)
      .max(ageConstraints.max)
      .transform((value, orgValue) => (orgValue === "" ? null : value))
      .nullable(),
  })
  .required()

export const FormNumberControl = () => {
  const methods = useForm<NumberFormData, {}>({
    defaultValues: { age: 24 },
    resolver: yupResolver(ageSchema),
  })

  return (
    <Form onSubmit={methods.handleSubmit(() => {})}>
      <FormProvider {...methods}>
        <FormRow
          label="Example field"
          name="age"
          control={<FormNumberInput />}
          validationMessage={(value: string, error) =>
            numberValidationMessage(value, error, ageConstraints)
          }
        />
      </FormProvider>
      <hr />
      <ButtonPrimary>Submit</ButtonPrimary>
    </Form>
  )
}
FormNumberControl.storyName = "Number Input Field"
