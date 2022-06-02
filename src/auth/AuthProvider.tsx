import React from "react"
import Loading from "../pages/Loading"
import { AuthContext } from "./context"
import { clearAuthToken, setAuthToken } from "./token"
import useAuthQuery from "./useAuthQuery"

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { loading, data, refetch } = useAuthQuery()

  const login = React.useCallback(
    async (token: string) => {
      setAuthToken(token)
      await refetch()
    },
    [refetch]
  )

  const logout = React.useCallback(async () => {
    clearAuthToken()
    await refetch()
  }, [refetch])

  const context = React.useMemo(() => {
    return {
      user: data?.auth || null,
      login,
      logout,
    }
  }, [data, login, logout])

  if (loading) return <Loading />

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
