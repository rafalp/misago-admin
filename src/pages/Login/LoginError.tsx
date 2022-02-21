import React from "react"
import { Card, CardBody } from "../../components/Card"

interface LoginErrorProps {
  children: React.ReactNode
}

const LoginError: React.FC<LoginErrorProps> = ({ children }) => (
  <div className="login-error">
    {children}
  </div>
)

export default LoginError
