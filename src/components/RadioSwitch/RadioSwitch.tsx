import classnames from "classnames"
import React from "react"

interface RadioSwitchProps {
  checked?: boolean
  className?: string | null
  disabled?: boolean
  id?: string
  invalid?: boolean
  name?: string
  on: React.ReactNode
  off: React.ReactNode
  onBlur?: (
    event: React.FocusEvent<HTMLInputElement>,
    newValue: boolean
  ) => void
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: boolean
  ) => void
}

const RadioSwitch: React.FC<RadioSwitchProps> = ({
  checked,
  className,
  disabled,
  id,
  invalid,
  name,
  on,
  off,
  onBlur,
  onChange,
}) => (
  <div className={classnames("form-check-select", className)}>
    <div className="form-check" key={`${id}_on`}>
      <input
        className={classnames("form-check-input", className, {
          "is-invalid": invalid,
        })}
        disabled={disabled}
        id={`${id}_on`}
        name={name}
        type="radio"
        checked={checked === true}
        onBlur={(event) => onBlur && onBlur(event, true)}
        onChange={(event) => onChange && onChange(event, true)}
      />
      <label className="form-check-label" htmlFor={`${id}_on`}>
        {on}
      </label>
    </div>
    <div className="form-check" key={`${id}_off`}>
      <input
        className={classnames("form-check-input", className, {
          "is-invalid": invalid,
        })}
        disabled={disabled}
        id={`${id}_off`}
        name={name}
        type="radio"
        checked={checked === false}
        onBlur={(event) => onBlur && onBlur(event, false)}
        onChange={(event) => onChange && onChange(event, false)}
      />
      <label className="form-check-label" htmlFor={`${id}_off`}>
        {off}
      </label>
    </div>
  </div>
)

export default RadioSwitch
