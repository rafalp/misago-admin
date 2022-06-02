import { ApolloError } from "@apollo/client"
import React from "react"
import ClientError from "../components/ClientError"
import { ToastsContext, ToastData } from "./context"

type ToastsProviderProps = {
  children: React.ReactNode
}

const TOASTS_LIMIT = 4

const ToastsProvider: React.FC<ToastsProviderProps> = ({ children }) => {
  const [toasts, setToast] = React.useState<Array<ToastData>>([])

  const remove = React.useCallback(
    (id: string) => {
      setToast((value) => value.filter((toast) => toast.id !== id))
    },
    [setToast]
  )

  const hide = React.useCallback(
    (id: string) => {
      setToast((value) => {
        return value.map((toast) => {
          if (toast.id !== id) return toast
          return { ...toast, show: false }
        })
      })

      window.setTimeout(() => {
        remove(id)
      }, 300)
    },
    [setToast, remove]
  )

  const toast = React.useCallback(
    (type: string, message: React.ReactNode) => {
      const id = String(Date.now())
      setToast((value) => {
        if (value.length === TOASTS_LIMIT) {
          return [...value.slice(1), { id, type, message, show: false }]
        }

        return [...value, { id, type, message, show: false }]
      })
      window.setTimeout(() => {
        setToast((value) => {
          return value.map((toast) => {
            if (toast.id !== id) return toast
            return { ...toast, show: true }
          })
        })
      }, 100)
      window.setTimeout(() => hide(id), 7000)
    },
    [setToast, hide]
  )

  const success = React.useCallback(
    (message: React.ReactNode) => toast("success", message),
    [toast]
  )

  const error = React.useCallback(
    (message: React.ReactNode) => toast("danger", message),
    [toast]
  )

  const graphQLError = React.useCallback(
    (err: ApolloError) => {
      error(
        <ClientError error={err}>
          {({ message }) => <>{message}</>}
        </ClientError>
      )
    },
    [error]
  )

  const useGraphQLErrorEffect = (error?: ApolloError) => {
    React.useEffect(() => {
      if (error) graphQLError(error)
    }, [error])
  }

  const value = {
    toasts,
    toast,
    hide,
    remove,
    success,
    error,
    graphQLError,
    useGraphQLErrorEffect,
  }

  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  )
}

export default ToastsProvider
