import { gql, useQuery } from "@apollo/client"

export const SETTINGS_USERS_QUERY = gql`
  query SettingsUsers {
    settings {
      avatarUploadMaxSize
      passwordMinLength
      usernameMinLength
      usernameMaxLength
    }
    constraints: settings {
      passwordMaxLength
    }
  }
`

export type SettingsUsersFormData = {
  avatarUploadMaxSize: number
  passwordMinLength: number
  usernameMinLength: number
  usernameMaxLength: number
}

type SettingsUsersData = {
  settings: SettingsUsersFormData | null
  constraints: { passwordMaxLength: number } | null
}

const useSettingsUsersQuery = () => {
  return useQuery<SettingsUsersData>(SETTINGS_USERS_QUERY, {
    fetchPolicy: "no-cache",
  })
}

export default useSettingsUsersQuery
