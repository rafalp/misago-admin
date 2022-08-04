import { gql, useMutation } from "@apollo/client"
import { ApiError } from "../../types"
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

type LoginData = {
  login: {
    token: string
    errors: Array<ApiError>
  }
}

const useLoginMutation = () => {
  return useMutation<LoginData, FormData>(LOGIN_MUTATION)
}

export default useLoginMutation
