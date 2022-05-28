import { gql, useMutation } from "@apollo/client"
import { ApiError } from "../../types"

const UPDATE_GENERAL_SETTINGS_MUTATION = gql`
  mutation UpdateGeneralSettings($input: SettingsUpdateInput!) {
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

interface UpdateGeneralSettingsData {
  settingsUpdate: {
    updated: boolean
    errors: Array<ApiError>
  }
}

interface UpdateGeneralSettingsInput {
  input: {
    forumName: string
    forumIndexTitle: string
    forumIndexHeader: string
  }
}

const useGeneralSettingsMutation = () => {
  return useMutation<UpdateGeneralSettingsData, UpdateGeneralSettingsInput>(
    UPDATE_GENERAL_SETTINGS_MUTATION
  )
}

export default useGeneralSettingsMutation
