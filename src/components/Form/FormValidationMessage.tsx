import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import { ValidationError } from "../../validation"

type FormValidationMessageProps = {
  name: string
  validationMessage: (value: any, error: ValidationError) => string | null
}

const FormValidationMessage: React.FC<FormValidationMessageProps> = ({
  name,
  validationMessage,
}) => {
  const { formState, watch } = useHookFormContext()
  const error = formState.errors[name]
  const value = watch(name)

  if (!error) return null

  return <>{validationMessage(value, error as ValidationError)}</>
}

export default React.memo(FormValidationMessage)
