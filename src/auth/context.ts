import React from "react"
import { AuthenticatedUser } from "./types"

type AuthContextData = {
  user: AuthenticatedUser | null
  login: (token: string) => void
  logout: () => void
}

const AuthContext = React.createContext<AuthContextData>({
  user: null,
  login: (token: string) => {},
  logout: () => {},
})

const useAuth = () => React.useContext(AuthContext)

export { AuthContext, useAuth }
