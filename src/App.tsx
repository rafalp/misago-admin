import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useAuth } from "./auth"
import Navbar from "./components/Navbar"
import { MAIN_NAV, ROUTES } from "./hooks"
import LayoutFull from "./layouts/LayoutFull"
import LoginPage from "./pages/Login"
import { ToastsProvider, ToastsContainer } from "./toasts"

const basename =
  typeof window !== "undefined"
    ? (window["MISAGO_ADMIN_PATH"] as string | undefined)
    : undefined

const App: React.FC = () => {
  const { logout, user } = useAuth()
  if (!user) return <LoginPage />

  return (
    <BrowserRouter basename={basename}>
      <ToastsProvider>
        <ToastsContainer />
        <Navbar logout={logout} user={user} />
        <LayoutFull navItems={MAIN_NAV}>
          <Routes>
            {ROUTES.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </LayoutFull>
      </ToastsProvider>
    </BrowserRouter>
  )
}

export default App
