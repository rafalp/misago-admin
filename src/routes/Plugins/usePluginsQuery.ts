import { gql, useQuery } from "@apollo/client"
import { PluginData } from "./Plugins.types"

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

type PluginsData = {
  plugins: Array<PluginData>
}

const usePluginsQuery = () => {
  return useQuery<PluginsData>(PLUGINS_QUERY)
}

export default usePluginsQuery
