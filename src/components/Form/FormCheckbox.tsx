import classnames from "classnames"
import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import Checkbox from "../Checkbox"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildErrorId, buildFieldId, buildHelpId } from "./buildId"

interface FormCheckboxProps {
  className?: string
  maxLength?: number
  placeholder?: string
}

const FormCheckbox: React.FC<FormCheckboxProps> = (props) => {
  const { register } = useHookFormContext()
  const { disabled, id } = useFormContext()
  const fieldContext = useFormFieldContext()

  const { name, help, invalid } = fieldContext

  return (
    <Checkbox
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

export default FormCheckbox
