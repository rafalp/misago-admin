import classnames from "classnames"
import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import TextAreaInput from "../TextAreaInput"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildErrorId, buildFieldId, buildHelpId } from "./buildId"

type FormTextAreaInputProps = {
  className?: string
  maxLength?: number
  placeholder?: string
  rows?: number
}

const FormTextAreaInput: React.FC<FormTextAreaInputProps> = (props) => {
  const { register } = useHookFormContext()
  const { disabled, id } = useFormContext()
  const fieldContext = useFormFieldContext()

  const { name, help, invalid } = fieldContext

  return (
    <TextAreaInput
      id={buildFieldId(name, id)}
      describedBy={classnames({
        [buildErrorId(name, id)]: invalid,
        [buildHelpId(name, id)]: help,
      })}
      disabled={disabled}
      invalid={invalid}
      {...props}
      {...register(name)}
    />
  )
}

export default FormTextAreaInput
