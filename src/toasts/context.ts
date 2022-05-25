import { ApolloError } from "@apollo/client"
import React from "react"

export interface ToastData {
  id: string
  type: string
  message: React.ReactNode
  show: boolean
}

interface ToastsContextData {
  toasts: Array<ToastData>
  toast(type: string, message: React.ReactNode): void
  hide(id: string): void
  remove(id: string): void
  success(message: React.ReactNode): void
  error(message: React.ReactNode): void
  graphQLError(error: ApolloError): void
}

const ToastsContext = React.createContext<ToastsContextData>({
  toasts: [],
  toast: () => {},
  hide: () => {},
  remove: () => {},
  success: () => {},
  error: () => {},
  graphQLError: () => {},
})

const useToasts = () => React.useContext(ToastsContext)

export { ToastsContext, useToasts }
