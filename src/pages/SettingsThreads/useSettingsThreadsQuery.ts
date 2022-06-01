import { gql, useQuery } from "@apollo/client"

export const SETTINGS_THREADS_QUERY = gql`
  query SettingsThreads {
    settings {
      postMinLength
      postsPerPage
      postsPerPageOrphans
      threadTitleMinLength
      threadTitleMaxLength
      threadsPerPage
    }
  }
`

export interface SettingsThreadsFormData {
  postMinLength: number
  postsPerPage: number
  postsPerPageOrphans: number
  threadTitleMinLength: number
  threadTitleMaxLength: number
  threadsPerPage: number
}

interface SettingsThreadsData {
  settings: SettingsThreadsFormData | null
}

const useSettingsThreadsQuery = () => {
  return useQuery<SettingsThreadsData>(SETTINGS_THREADS_QUERY, {
    fetchPolicy: "no-cache",
  })
}

export default useSettingsThreadsQuery
