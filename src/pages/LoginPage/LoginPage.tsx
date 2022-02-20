import React from "react"
import { Card, CardBody } from "../../components/Card"
import LoginForm from "../../forms/LoginForm"
import CenteredLayout from "../../layouts/CenteredLayout"

const LoginPage: React.FC = () => (
  <CenteredLayout>
    <Card className="card-admin-login">
      <CardBody>
        <h1>Admin login</h1>
        <LoginForm />
      </CardBody>
    </Card>
  </CenteredLayout>
)

export default LoginPage
