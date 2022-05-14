import classnames from "classnames"
import React from "react"

interface FileInputProps {
  accept?: string
  className?: string | null
  describedBy?: string
  disabled?: boolean
  id?: string
  invalid?: boolean
  name?: string
  required?: boolean
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      accept,
      className,
      describedBy,
      disabled,
      id,
      invalid,
      name,
      required,
      onBlur,
      onChange,
    },
    ref
  ) => (
    <input
      accept={accept}
      aria-describedby={describedBy}
      className={classnames("form-control", className, {
        "is-invalid": invalid,
      })}
      disabled={disabled}
      id={id}
      name={name}
      ref={ref}
      required={required}
      type="file"
      onBlur={onBlur}
      onChange={onChange}
    />
  )
)

export default FileInput
