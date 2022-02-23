import React from "react"
import { useAuth } from "./auth"
import LoginPage from "./pages/Login"

const App: React.FC = () => {
  const { logout, user } = useAuth()
  if (!user) return <LoginPage />

  return (
    <>
      <div>{"Hello, " + user.name}</div>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  )
}

export default App
