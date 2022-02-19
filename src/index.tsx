import React from "react"
import ReactDOM from "react-dom"
import { ApolloProvider } from "@apollo/client"
import App from "./App"
import LocaleProvider from "./LocaleProvider"
import client from "./apolloClient"
import { AuthProvider } from "./auth"
import setupPlugins from "./plugins"
import "./styles/index.scss"

setupPlugins()

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <LocaleProvider language="en">
        <AuthProvider>
          <App />
        </AuthProvider>
      </LocaleProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
