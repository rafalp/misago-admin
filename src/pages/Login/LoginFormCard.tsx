import React from "react"
import { Card, CardBody } from "../../components/Card"

interface LoginFormCardProps {
  children: React.ReactNode
}

const LoginFormCard: React.FC<LoginFormCardProps> = ({ children }) => (
  <Card className="login-form-card">
    <CardBody>{children}</CardBody>
  </Card>
)

export default LoginFormCard
