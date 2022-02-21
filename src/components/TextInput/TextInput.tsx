import classnames from "classnames"
import React from "react"

interface TextInputProps {
  className?: string | null
  disabled?: boolean
  id?: string
  invalid?: boolean
  maxLength?: number
  name?: string
  placeholder?: string
  required?: boolean
  type?: "text" | "email" | "password"
  value?: string | number
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      disabled,
      id,
      invalid,
      maxLength,
      name,
      placeholder,
      required,
      type,
      value,
      onBlur,
      onChange,
    },
    ref
  ) => (
    <input
      className={classnames("form-control", className, {
        "is-invalid": invalid,
      })}
      disabled={disabled}
      id={id}
      maxLength={maxLength}
      name={name}
      placeholder={placeholder}
      ref={ref}
      required={required}
      type={type || "text"}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
)

export default TextInput
