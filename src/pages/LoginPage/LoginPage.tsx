import React from "react"
import LoginForm from "../../forms/LoginForm"
import CenteredLayout from "../../layouts/CenteredLayout"

const LoginPage: React.FC = () => (
  <CenteredLayout>
    <h1>Admin login</h1>
    <LoginForm />
  </CenteredLayout>
)

export default LoginPage
