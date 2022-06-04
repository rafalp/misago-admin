import classnames from "classnames"
import React from "react"

type CheckboxProps = {
  checked?: boolean
  className?: string | null
  describedBy?: string
  disabled?: boolean
  id?: string
  invalid?: boolean
  name?: string
  required?: boolean
  switchRole?: boolean
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      className,
      describedBy,
      disabled,
      id,
      invalid,
      name,
      required,
      switchRole,
      onBlur,
      onChange,
    },
    ref
  ) => (
    <input
      aria-describedby={describedBy}
      className={classnames("form-check-input", className, {
        "is-invalid": invalid,
      })}
      disabled={disabled}
      id={id}
      name={name}
      ref={ref}
      required={required}
      role={switchRole ? "switch" : undefined}
      type="checkbox"
      checked={checked}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
)

export default Checkbox
