import classnames from "classnames"
import { Trans } from "@lingui/macro"
import React from "react"
import { useFormContext as useHookFormContext } from "react-hook-form"
import { useFormContext } from "./Form"
import FormField from "./FormField"
import FormErrorText from "./FormErrorText"
import FormHelpText from "./FormHelpText"
import { buildErrorId, buildFieldId, buildHelpTextId } from "./buildId"

interface FormRowProps {
  className?: string | null
  control: React.ReactNode
  helpText?: React.ReactNode
  label: React.ReactNode
  name: string
  optional?: boolean
}

const FormRow: React.FC<FormRowProps> = ({
  className,
  control,
  helpText,
  label,
  name,
  optional,
}) => {
  const { formState } = useHookFormContext()
  const { id: formId } = useFormContext()

  const error = formState.errors[name]

  return (
    <FormField name={name} helpText={!!helpText} invalid={!!error}>
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
        {!!error && (
          <FormErrorText id={buildErrorId(name, formId)}>
            {error.message}
          </FormErrorText>
        )}
        {helpText && (
          <FormHelpText id={buildHelpTextId(name, formId)}>
            {helpText}
          </FormHelpText>
        )}
      </div>
    </FormField>
  )
}

export default FormRow
