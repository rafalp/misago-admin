import React from "react"
import { BrowserRouter } from "react-router-dom"
import { useAuth } from "./auth"
import Navbar from "./components/Navbar"
import { MAIN_NAV } from "./hooks"
import LoyoutFull from "./layouts/LayoutFull"
import LoginPage from "./pages/Login"

const App: React.FC = () => {
  const { logout, user } = useAuth()
  if (!user) return <LoginPage />

  return (
    <BrowserRouter>
      <Navbar logout={logout} user={user} />
      <LoyoutFull navItems={MAIN_NAV}>Route here</LoyoutFull>
    </BrowserRouter>
  )
}

export default App
