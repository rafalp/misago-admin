import { gql, useQuery } from "@apollo/client"

const GENERAL_SETTINGS_QUERY = gql`
  query GeneralSettings {
    settings {
      forumName
    }
  }
`

interface GeneralSettingsData {
  settings: {
    forumName: string
  } | null
}

const useGeneralSettingsQuery = () => {
  return useQuery<GeneralSettingsData>(GENERAL_SETTINGS_QUERY, {
    fetchPolicy: "no-cache",
  })
}

export default useGeneralSettingsQuery
