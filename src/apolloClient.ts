import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  from,
} from "@apollo/client"
import { getAuthToken } from "./auth"

const httpLink = new HttpLink({ uri: "/admin/graphql/" })

const authMiddleware = new ApolloLink((operation, forward) => {
  const auth = getAuthToken()

  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: !!auth ? `Bearer ${auth}` : null,
    },
  }))

  return forward(operation)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink]),
})

export default client
