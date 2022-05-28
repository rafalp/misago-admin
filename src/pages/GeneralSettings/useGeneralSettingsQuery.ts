import { gql, useQuery } from "@apollo/client"

const GENERAL_SETTINGS_QUERY = gql`
  query GeneralSettings {
    settings {
      forumName
      forumIndexTitle
      forumIndexHeader
      forumIndexThreads
    }
  }
`

interface GeneralSettingsData {
  settings: {
    forumName: string
    forumIndexTitle: string
    forumIndexHeader: string
    forumIndexThreads: boolean
  } | null
}

const useGeneralSettingsQuery = () => {
  return useQuery<GeneralSettingsData>(GENERAL_SETTINGS_QUERY, {
    fetchPolicy: "no-cache",
  })
}

export default useGeneralSettingsQuery
