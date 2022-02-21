import React from "react"
import WindowTitle from "../../components/WindowTitle"
import CenteredLayout from "../../layouts/CenteredLayout"
import LoginCard from "./LoginCard"
import LoginForm from "./LoginForm"
import LoginLogo from "./LoginLogo"

const Login: React.FC = () => (
  <CenteredLayout>
    <WindowTitle />
    <LoginCard>
      <LoginLogo />
      <LoginForm />
    </LoginCard>
  </CenteredLayout>
)

export default Login
