import classnames from "classnames"
import React from "react"

type SelectMultipleProps = {
  className?: string | null
  disabled?: boolean
  id?: string
  invalid?: boolean
  name?: string
  options: Array<{ value: string; name: React.ReactNode }>
  value?: Array<string>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

const SelectMultiple = React.forwardRef<HTMLInputElement, SelectMultipleProps>(
  (
    {
      className,
      disabled,
      id,
      invalid,
      name,
      options,
      value,
      onBlur,
      onChange,
    },
    ref
  ) => (
    <div className={classnames("form-select-multiple", className)}>
      {options.map(({ value: choice, name: optionName }) => (
        <div className="form-check" key={`${id}_${choice}`}>
          <input
            className={classnames("form-check-input", {
              "is-invalid": invalid,
            })}
            disabled={disabled}
            id={`${id}_${choice}`}
            name={name}
            ref={ref}
            type="checkbox"
            value={choice}
            checked={
              typeof value !== "undefined"
                ? value.indexOf(choice) !== -1
                : undefined
            }
            onBlur={onBlur}
            onChange={onChange}
          />
          <label className="form-check-label" htmlFor={`${id}_${choice}`}>
            {optionName}
          </label>
        </div>
      ))}
    </div>
  )
)

export default SelectMultiple
