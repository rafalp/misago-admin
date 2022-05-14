import classnames from "classnames"
import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import FileInput from "../FileInput"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildErrorId, buildFieldId, buildHelpId } from "./buildId"

interface FormFileInputProps {
  accept?: string
  className?: string
}

const FormFileInput: React.FC<FormFileInputProps> = (props) => {
  const { register } = useHookFormContext()
  const { disabled, id } = useFormContext()
  const fieldContext = useFormFieldContext()

  const { name, help, invalid } = fieldContext

  return (
    <FileInput
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

export default FormFileInput
