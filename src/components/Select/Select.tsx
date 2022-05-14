import classnames from "classnames"
import React from "react"

interface SelectProps {
  className?: string | null
  describedBy?: string
  disabled?: boolean
  id?: string
  invalid?: boolean
  name?: string
  options: Array<{ value: string; name: React.ReactNode }>
  required?: boolean
  value?: string | number
  onBlur?: React.FocusEventHandler<HTMLSelectElement>
  onChange?: React.ChangeEventHandler<HTMLSelectElement>
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      describedBy,
      disabled,
      id,
      invalid,
      name,
      options,
      required,
      value,
      onBlur,
      onChange,
    },
    ref
  ) => (
    <select
      aria-describedby={describedBy}
      className={classnames("form-control", className, {
        "is-invalid": invalid,
      })}
      disabled={disabled}
      id={id}
      name={name}
      ref={ref}
      required={required}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    >
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  )
)

export default Select
