import classnames from "classnames"
import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import Select from "../Select"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildErrorId, buildFieldId, buildHelpId } from "./buildId"

type FormSelectProps = {
  className?: string
  options: Array<{ value: string; name: React.ReactNode }>
}

const FormSelect: React.FC<FormSelectProps> = (props) => {
  const { register } = useHookFormContext()
  const { disabled, id } = useFormContext()
  const fieldContext = useFormFieldContext()

  const { name, help, invalid } = fieldContext

  return (
    <Select
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

export default FormSelect
