import { Trans } from "@lingui/macro"
import React from "react"
import Navbar from "./components/Navbar"

const App: React.FC = () => (
  <div>
    <Navbar />
    <div className="container-fluid">
      <Trans id="login.submit">Login</Trans>
    </div>
  </div>
)

export default App
