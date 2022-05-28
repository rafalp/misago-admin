import { Trans } from "@lingui/macro"
import classnames from "classnames"
import React from "react"
import { FormHelp } from "../Form"

interface SkeletonFormRowProps {
  className?: string | null
  control: React.ReactNode
  help?: React.ReactNode
  label?: React.ReactNode
  optional?: boolean
}

const SkeletonFormRow: React.FC<SkeletonFormRowProps> = ({
  className,
  control,
  help,
  label,
  optional,
}) => (
  <div aria-hidden="true" className={classnames("form-row", className)}>
    {label && (
      <label className="form-label">
        {label}
        {optional && (
          <span className="badge bg-light text-dark">
            <Trans id="field.optional">Optional</Trans>
          </span>
        )}
      </label>
    )}
    {control}
    {help && <FormHelp>{help}</FormHelp>}
  </div>
)

export default SkeletonFormRow
