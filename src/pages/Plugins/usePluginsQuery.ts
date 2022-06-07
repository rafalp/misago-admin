import { gql, useQuery } from "@apollo/client"

export const PLUGINS_QUERY = gql`
  query Plugins {
    plugins {
      name
      description
      license
      icon
      color
      version
      author
      homepage {
        domain
        url
      }
      repo {
        domain
        icon
        url
      }
      directory
      admin
      client
    }
  }
`

export type PluginData = {
  name: string
  description: string | null
  license: string | null
  icon: string | null
  color: string | null
  version: string | null
  author: string | null
  homepage: {
    domain: string
    url: string
  } | null
  repo: {
    domain: string
    icon: string | null
    url: string
  } | null
  directory: string
  admin: boolean
  client: boolean
}

type PluginsData = {
  plugins: Array<PluginData>
}

const usePluginsQuery = () => {
  return useQuery<PluginsData>(PLUGINS_QUERY)
}

export default usePluginsQuery
