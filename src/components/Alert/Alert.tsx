import classnames from "classnames"
import React from "react"

interface AlertProps {
  children: React.ReactNode
  className?: string | null
}

const Alert: React.FC<AlertProps> = ({ children, className }) => (
  <div className={classnames("alert", className)} role="alert">
    {children}
  </div>
)

const AlertDanger: React.FC<AlertProps> = ({ children, className }) => (
  <Alert className={classnames("alert-danger", className)}>{children}</Alert>
)

const AlertInfo: React.FC<AlertProps> = ({ children, className }) => (
  <Alert className={classnames("alert-info", className)}>{children}</Alert>
)

const AlertSuccess: React.FC<AlertProps> = ({ children, className }) => (
  <Alert className={classnames("alert-success", className)}>{children}</Alert>
)

const AlertWarning: React.FC<AlertProps> = ({ children, className }) => (
  <Alert className={classnames("alert-warning", className)}>{children}</Alert>
)

export { Alert, AlertDanger, AlertInfo, AlertSuccess, AlertWarning }
