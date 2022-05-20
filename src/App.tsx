import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAuth } from "./auth"
import Navbar from "./components/Navbar"
import { MAIN_NAV, ROUTES } from "./hooks"
import LoyoutFull from "./layouts/LayoutFull"
import LoginPage from "./pages/Login"

const App: React.FC = () => {
  const { logout, user } = useAuth()
  if (!user) return <LoginPage />

  return (
    <BrowserRouter>
      <Navbar logout={logout} user={user} />
      <LoyoutFull navItems={MAIN_NAV}>
        <Routes>
          {ROUTES.map((route) => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}
        </Routes>
      </LoyoutFull>
    </BrowserRouter>
  )
}

export default App
