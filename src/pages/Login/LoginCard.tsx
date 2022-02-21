import React from "react"
import { Card, CardBody } from "../../components/Card"

interface LoginCardProps {
  children: React.ReactNode
}

const LoginCard: React.FC<LoginCardProps> = ({ children }) => (
  <Card className="card-login-form">
    <CardBody>{children}</CardBody>
  </Card>
)

export default LoginCard
