import { gql, useMutation } from "@apollo/client"
import { ApiError } from "../../types"
import { SettingsThreadsFormData } from "./useSettingsThreadsQuery"

const UPDATE_THREADS_SETTINGS_MUTATION = gql`
  mutation UpdateSettingsThreads($input: SettingsUpdateInput!) {
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

interface UpdateSettingsThreadsData {
  settingsUpdate: {
    updated: boolean
    errors: Array<ApiError>
  }
}

interface UpdateSettingsThreadsInput {
  input: SettingsThreadsFormData
}

const useSettingsThreadsMutation = () => {
  return useMutation<UpdateSettingsThreadsData, UpdateSettingsThreadsInput>(
    UPDATE_THREADS_SETTINGS_MUTATION
  )
}

export default useSettingsThreadsMutation
