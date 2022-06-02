import { gql, useMutation } from "@apollo/client"
import { ApiError } from "../../types"
import { SettingsGeneralFormData } from "./useSettingsGeneralQuery"

const UPDATE_GENERAL_SETTINGS_MUTATION = gql`
  mutation UpdateSettingsGeneral($input: SettingsUpdateInput!) {
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

type UpdateSettingsGeneralData = {
  settingsUpdate: {
    updated: boolean
    errors: Array<ApiError>
  }
}

type UpdateSettingsGeneralInput = {
  input: SettingsGeneralFormData
}

const useSettingsGeneralMutation = () => {
  return useMutation<UpdateSettingsGeneralData, UpdateSettingsGeneralInput>(
    UPDATE_GENERAL_SETTINGS_MUTATION
  )
}

export default useSettingsGeneralMutation
