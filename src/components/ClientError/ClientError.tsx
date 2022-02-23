import { ApolloError } from "@apollo/client"
import { t } from "@lingui/macro"
import React from "react"
import { ApiError } from "../../types"

interface ClientErrorProps {
  children(error: ApiError): React.ReactElement
  error?: ApolloError | null
}

const ClientError: React.FC<ClientErrorProps> = ({ children, error }) => {
  if (!error) return null

  if (isConnectionError(error)) {
    return children({
      location: "__root__",
      type: "client_error.network",
      message: t({
        id: "client_error.network",
        message: "Site server can't be reached.",
      }),
    })
  }

  return children({
    location: "__root__",
    type: "client_error.graphql",
    message: t({
      id: "client_error.graphql",
      message: "Unexpected error has occurred.",
    }),
  })
}

const isConnectionError = (error: ApolloError): boolean => {
  if (!error.networkError) return false
  if (!("statusCode" in error.networkError)) return true
  return error.networkError["statusCode"] !== 400
}

export default ClientError
