import { gql, useMutation } from "@apollo/client"
import { ApiError } from "../../types"
import { SettingsUsersFormData } from "./useSettingsUsersQuery"

const UPDATE_USERS_SETTINGS_MUTATION = gql`
  mutation UpdateSettingsUsers($input: SettingsUpdateInput!) {
    settingsUpdate(input: $input) {
      updated
      errors {
        type
        location
        message
      }
    }
  }
`

type UpdateSettingsUsersData = {
  settingsUpdate: {
    updated: boolean
    errors: Array<ApiError>
  }
}

type UpdateSettingsUsersInput = {
  input: SettingsUsersFormData
}

const useSettingsUsersMutation = () => {
  return useMutation<UpdateSettingsUsersData, UpdateSettingsUsersInput>(
    UPDATE_USERS_SETTINGS_MUTATION
  )
}

export default useSettingsUsersMutation
