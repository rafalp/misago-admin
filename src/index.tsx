import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import LocaleProvider from "./LocaleProvider"
import setupPlugins from "./plugins"
import "./styles/index.scss"

setupPlugins()

ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider language="en">
      <App />
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
