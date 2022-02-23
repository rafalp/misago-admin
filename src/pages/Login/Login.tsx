import React from "react"
import WindowTitle from "../../components/WindowTitle"
import CenteredLayout from "../../layouts/CenteredLayout"
import LoginForm from "./LoginForm"
import LoginFormLogo from "./LoginFormLogo"
import LoginFormCard from "./LoginFormCard"

const Login: React.FC = () => (
  <CenteredLayout>
    <WindowTitle />
    <LoginFormLogo />
    <LoginFormCard>
      <LoginForm />
    </LoginFormCard>
  </CenteredLayout>
)

export default Login
