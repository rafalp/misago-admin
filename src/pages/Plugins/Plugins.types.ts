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