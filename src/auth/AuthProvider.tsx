import React from "react"
import Loading from "../pages/Loading"
import { AuthContext } from "./context"
import useAuthQuery from "./useAuthQuery"

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { loading, data } = useAuthQuery()

  if (loading) return <Loading />

  return (
    <AuthContext.Provider value={data?.auth || null}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
