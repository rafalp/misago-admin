import { ApolloError } from "@apollo/client"
import ClientError from "."

export default {
  title: "Components/ClientError",
}

export const ApplicationError = () => (
  <ClientError error={new ApolloError({})}>
    {(error) => <>{JSON.stringify(error)}</>}
  </ClientError>
)

export const NetworkError = () => (
  <ClientError error={new ApolloError({ networkError: new Error() })}>
    {(error) => <>{JSON.stringify(error)}</>}
  </ClientError>
)
