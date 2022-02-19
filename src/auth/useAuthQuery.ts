import { gql, useQuery } from "@apollo/client"

const AUTH = gql`
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

const useAuthQuery = () => useQuery<AuthData>(AUTH)

export default useAuthQuery
