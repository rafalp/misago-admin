import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import RadioSwitch from "../RadioSwitch"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildFieldId } from "./buildId"

interface FormRadioSwitchProps {
  className?: string
  on: React.ReactNode
  off: React.ReactNode
}

const FormRadioSwitch: React.FC<FormRadioSwitchProps> = ({
  className,
  on,
  off,
}) => {
  const { register, watch, setValue } = useHookFormContext()
  const { disabled, id } = useFormContext()
  const fieldContext = useFormFieldContext()

  const { name, invalid } = fieldContext
  register(name)
  const checked = watch(name, false)

  return (
    <RadioSwitch
      checked={checked === true}
      className={className}
      id={buildFieldId(name, id)}
      disabled={disabled}
      invalid={invalid}
      name={name}
      on={on}
      off={off}
      onChange={(evt, value) => setValue(name, value)}
    />
  )
}

export default FormRadioSwitch
