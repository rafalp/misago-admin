import React from "react"

interface AuthenticatedUser {
  id: string
  name: string
}

const AuthContext = React.createContext<AuthenticatedUser | null>(null)

const useAuth = () => React.useContext(AuthContext)

export { AuthContext, useAuth }
