import React from "react"
import { useAuth } from "./auth"
import LoginPage from "./pages/LoginPage"

const App: React.FC = () => {
  const user = useAuth()

  return user ? <div>{"Hello, " + user.name}</div> : <LoginPage />
}

export default App
