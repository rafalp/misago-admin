import { ApolloError } from "@apollo/client"
import React from "react"

export type ToastData = {
  id: string
  type: string
  message: React.ReactNode
  show: boolean
}

type ToastsContextData = {
  toasts: Array<ToastData>
  toast(type: string, message: React.ReactNode): void
  hide(id: string): void
  remove(id: string): void
  success(message: React.ReactNode): void
  error(message: React.ReactNode): void
  graphQLError(error: ApolloError): void
  useGraphQLErrorEffect(error?: ApolloError): void
}

const ToastsContext = React.createContext<ToastsContextData>({
  toasts: [],
  toast: () => {},
  hide: () => {},
  remove: () => {},
  success: () => {},
  error: () => {},
  graphQLError: () => {},
  useGraphQLErrorEffect: () => {},
})

const useToasts = () => React.useContext(ToastsContext)

export { ToastsContext, useToasts }
