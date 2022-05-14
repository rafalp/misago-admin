import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import SelectMultiple from "../SelectMultiple"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildFieldId } from "./buildId"

interface FormSelectMultipleProps {
  className?: string
  options: Array<{ value: string; name: React.ReactNode }>
}

const FormSelectMultiple: React.FC<FormSelectMultipleProps> = (props) => {
  const { register } = useHookFormContext()
  const { disabled, id } = useFormContext()
  const fieldContext = useFormFieldContext()

  const { name, invalid } = fieldContext

  return (
    <SelectMultiple
      id={buildFieldId(name, id)}
      disabled={disabled}
      invalid={invalid}
      {...props}
      {...register(name)}
    />
  )
}

export default FormSelectMultiple
