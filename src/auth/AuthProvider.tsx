import React from "react"
import LoadingPage from "../pages/LoadingPage"
import { AuthContext } from "./context"
import useAuthQuery from "./useAuthQuery"

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { loading, data } = useAuthQuery()

  if (loading) return <LoadingPage />

  return (
    <AuthContext.Provider value={data?.auth || null}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
