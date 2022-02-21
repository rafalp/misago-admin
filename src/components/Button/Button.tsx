import classnames from "classnames"
import React from "react"
import Icon from "../Icon"
import Spinner from "../Spinner"

interface ButtonProps {
  children: React.ReactNode
  className?: string | null
  disabled?: boolean
  icon?: string | null
  small?: boolean
  spinner?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  icon,
  small,
  spinner,
  onClick,
}) => (
  <button
    className={classnames("btn", className, {
      "btn-sm": small,
      "has-text": !!children,
    })}
    disabled={disabled}
    type={!!onClick ? "button" : "submit"}
    onClick={onClick}
  >
    {icon && !spinner && <Icon name={icon} fixedWidth />}
    {spinner && <Spinner />}
    {children}
  </button>
)

const ButtonDanger: React.FC<ButtonProps> = ({ className, ...props }) => (
  <Button className={classnames("btn-danger", className)} {...props} />
)

const ButtonLight: React.FC<ButtonProps> = ({ className, ...props }) => (
  <Button className={classnames("btn-light", className)} {...props} />
)

const ButtonPrimary: React.FC<ButtonProps> = ({ className, ...props }) => (
  <Button className={classnames("btn-primary", className)} {...props} />
)

const ButtonSuccess: React.FC<ButtonProps> = ({ className, ...props }) => (
  <Button className={classnames("btn-success", className)} {...props} />
)

export { Button, ButtonDanger, ButtonLight, ButtonPrimary, ButtonSuccess }
