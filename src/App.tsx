import { Trans } from "@lingui/macro"
import React from "react"
import Navbar from "./components/Navbar"
import { EXTRA_COMPONENTS } from "./hooks"

const App: React.FC = () => (
  <div>
    <Navbar />
    <div className="container-fluid">
      <Trans id="login.submit">Login</Trans>
    </div>
    {EXTRA_COMPONENTS.TEST.map((Component, i) => (
      <Component key={i} />
    ))}
  </div>
)

export default App
