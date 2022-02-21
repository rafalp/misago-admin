import { gql, useMutation } from "@apollo/client"
import { MutationError } from "../../types"
import { FormData } from "./Login.types"

const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      errors {
        type
        location
        message
      }
    }
  }
`

interface LoginData {
  login: {
    token: string
    errors: Array<MutationError>
  } | null
}

const useLoginMutation = () => {
  return useMutation<LoginData, FormData>(LOGIN_MUTATION)
}

export default useLoginMutation
