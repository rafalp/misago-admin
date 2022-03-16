import classnames from "classnames"
import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import TextInput from "../TextInput"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildErrorId, buildFieldId, buildHelpTextId } from "./buildId"

interface FormTextInputProps {
  className?: string
  maxLength?: number
  placeholder?: string
  type?: "text" | "email" | "password"
}

const FormTextInput: React.FC<FormTextInputProps> = (props) => {
  const { register } = useHookFormContext()
  const { disabled, id } = useFormContext()
  const fieldContext = useFormFieldContext()

  const { name, helpText, invalid } = fieldContext

  return (
    <TextInput
      id={buildFieldId(name, id)}
      describedBy={classnames({
        [buildErrorId(name, id)]: invalid,
        [buildHelpTextId(name, id)]: helpText,
      })}
      disabled={disabled}
      invalid={invalid}
      {...props}
      {...register(name)}
    />
  )
}

export default FormTextInput
