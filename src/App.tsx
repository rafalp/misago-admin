import { Trans } from "@lingui/macro"
import React from "react"
import Navbar from "./components/Navbar"
import { EXTRA_COMPONENTS } from "./hooks"
import LoginPage from "./pages/LoginPage"

const App: React.FC = () => (
  <div>
    <LoginPage />
    {EXTRA_COMPONENTS.TEST.map((Component, i) => (
      <Component key={i} />
    ))}
  </div>
)

export default App
