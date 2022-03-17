import classnames from "classnames"
import React from "react"

interface NumberInputProps {
  className?: string | null
  describedBy?: string
  disabled?: boolean
  id?: string
  invalid?: boolean
  max?: string | number
  min?: string | number
  name?: string
  placeholder?: string
  required?: boolean
  value?: string | number
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      className,
      describedBy,
      disabled,
      id,
      invalid,
      max,
      min,
      name,
      placeholder,
      required,
      value,
      onBlur,
      onChange,
    },
    ref
  ) => (
    <input
      aria-describedby={describedBy}
      className={classnames("form-control", className, {
        "is-invalid": invalid,
      })}
      disabled={disabled}
      id={id}
      max={max}
      min={min}
      name={name}
      placeholder={placeholder}
      ref={ref}
      required={required}
      type="number"
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
)

export default NumberInput
