import React from "react"
import WindowTitle from "../../components/WindowTitle"
import LayoutMinimal from "../../layouts/LayoutMinimal"
import LoginForm from "./LoginForm"
import LoginFormLogo from "./LoginFormLogo"
import LoginFormCard from "./LoginFormCard"

const Login: React.FC = () => (
  <LayoutMinimal>
    <WindowTitle />
    <LoginFormLogo />
    <LoginFormCard>
      <LoginForm />
    </LoginFormCard>
  </LayoutMinimal>
)

export default Login
