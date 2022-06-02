import classnames from "classnames"
import React from "react"
import { useFormContext } from "./Form"
import { useFormFieldContext } from "./FormField"
import { buildFieldId } from "./buildId"

type FormCheckboxLabelProps = {
  className?: string | null
  children: React.ReactNode
  label: React.ReactNode
}

const FormCheckboxLabel: React.FC<FormCheckboxLabelProps> = ({
  className,
  children,
  label,
}) => {
  const { id: formId } = useFormContext()
  const { name } = useFormFieldContext()

  return (
    <div className={classnames("form-check", className)}>
      {children}
      <label className="form-check-label" htmlFor={buildFieldId(name, formId)}>
        {label}
      </label>
    </div>
  )
}

export default FormCheckboxLabel
