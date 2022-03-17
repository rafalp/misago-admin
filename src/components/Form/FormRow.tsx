import classnames from "classnames"
import { Trans } from "@lingui/macro"
import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import { ValidationError } from "../../validation"
import { useFormContext } from "./Form"
import FormField from "./FormField"
import FormError from "./FormError"
import FormHelp from "./FormHelp"
import FormValidationMessage from "./FormValidationMessage"
import { buildErrorId, buildFieldId, buildHelpId } from "./buildId"

interface FormRowProps {
  className?: string | null
  control: React.ReactNode
  help?: React.ReactNode
  label: React.ReactNode
  name: string
  optional?: boolean
  validationMessage?: (value: any, error: ValidationError) => string | null
}

const FormRow: React.FC<FormRowProps> = ({
  className,
  control,
  help,
  label,
  name,
  optional,
  validationMessage,
}) => {
  const { formState } = useHookFormContext()
  const { id: formId } = useFormContext()

  const error = formState.errors[name]

  return (
    <FormField name={name} help={!!help} invalid={!!error}>
      <div className={classnames("form-row", className)}>
        <label htmlFor={buildFieldId(name, formId)} className="form-label">
          {label}
          {optional && (
            <span className="badge bg-light text-dark">
              <Trans id="field.optional">Optional</Trans>
            </span>
          )}
        </label>
        {control}
        {!!error && !!validationMessage && (
          <FormError id={buildErrorId(name, formId)}>
            <FormValidationMessage
              name={name}
              validationMessage={validationMessage}
            />
          </FormError>
        )}
        {help && <FormHelp id={buildHelpId(name, formId)}>{help}</FormHelp>}
      </div>
    </FormField>
  )
}

export default FormRow
