import { gql, useQuery } from "@apollo/client"

const AUTH_QUERY = gql`
  query Auth {
    auth {
      id
      name
    }
  }
`

interface AuthData {
  auth: {
    id: string
    name: string
  } | null
}

const useAuthQuery = () => useQuery<AuthData>(AUTH_QUERY)

export default useAuthQuery
