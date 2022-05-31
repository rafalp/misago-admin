import { gql, useQuery } from "@apollo/client"

export const GENERAL_SETTINGS_QUERY = gql`
  query GeneralSettings {
    settings {
      forumName
      forumIndexTitle
      forumIndexHeader
      forumIndexThreads
    }
  }
`

interface SettingsFormData {
  forumName: string
  forumIndexTitle: string
  forumIndexHeader: string
  forumIndexThreads: boolean
}

interface GeneralSettingsData {
  settings: SettingsFormData | null
}

const useGeneralSettingsQuery = () => {
  return useQuery<GeneralSettingsData>(GENERAL_SETTINGS_QUERY, {
    fetchPolicy: "no-cache",
  })
}

export default useGeneralSettingsQuery
