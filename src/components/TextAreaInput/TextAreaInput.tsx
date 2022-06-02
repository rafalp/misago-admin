import classnames from "classnames"
import React from "react"

type TextAreaInputProps = {
  className?: string | null
  describedBy?: string
  disabled?: boolean
  id?: string
  invalid?: boolean
  maxLength?: number
  name?: string
  placeholder?: string
  required?: boolean
  rows?: number
  value?: string
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement>
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>
}

const TextAreaInput = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
>(
  (
    {
      className,
      describedBy,
      disabled,
      id,
      invalid,
      maxLength,
      name,
      placeholder,
      required,
      rows,
      value,
      onBlur,
      onChange,
    },
    ref
  ) => (
    <textarea
      aria-describedby={describedBy}
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
      rows={rows || 5}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
    />
  )
)

export default TextAreaInput
