import { gql, useQuery } from "@apollo/client"

export const SETTINGS_GENERAL_QUERY = gql`
  query SettingsGeneral {
    settings {
      forumName
      forumIndexTitle
      forumIndexHeader
      forumIndexThreads
    }
  }
`

export type SettingsGeneralFormData = {
  forumName: string
  forumIndexTitle: string
  forumIndexHeader: string
  forumIndexThreads: boolean
}

type SettingsGeneralData = {
  settings: SettingsGeneralFormData | null
}

const useSettingsGeneralQuery = () => {
  return useQuery<SettingsGeneralData>(SETTINGS_GENERAL_QUERY, {
    fetchPolicy: "no-cache",
  })
}

export default useSettingsGeneralQuery
