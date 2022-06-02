import classnames from "classnames"
import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import NumberInput from "../NumberInput"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildErrorId, buildFieldId, buildHelpId } from "./buildId"

type FormNumberInputProps = {
  className?: string
  max?: string | number
  min?: string | number
  placeholder?: string
}

const FormNumberInput: React.FC<FormNumberInputProps> = (props) => {
  const { register } = useHookFormContext()
  const { disabled, id } = useFormContext()
  const fieldContext = useFormFieldContext()

  const { name, help, invalid } = fieldContext

  return (
    <NumberInput
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

export default FormNumberInput
