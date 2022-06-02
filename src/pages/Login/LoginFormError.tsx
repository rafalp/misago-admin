import React from "react"

type LoginFormErrorProps = {
  children: React.ReactNode
}

const LoginFormError: React.FC<LoginFormErrorProps> = ({ children }) => (
  <div className="login-form-error">{children}</div>
)

export default LoginFormError
