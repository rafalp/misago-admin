import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import RadioSelect from "../RadioSelect"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildFieldId } from "./buildId"

interface FormRadioSelectProps {
  className?: string
  options: Array<{ value: string; name: React.ReactNode }>
}

const FormRadioSelect: React.FC<FormRadioSelectProps> = (props) => {
  const { register } = useHookFormContext()
  const { disabled, id } = useFormContext()
  const fieldContext = useFormFieldContext()

  const { name, invalid } = fieldContext

  return (
    <RadioSelect
      id={buildFieldId(name, id)}
      disabled={disabled}
      invalid={invalid}
      {...props}
      {...register(name)}
    />
  )
}

export default FormRadioSelect
