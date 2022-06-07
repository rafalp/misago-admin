import { MockedProvider } from "@apollo/client/testing"
import { MockLayoutFull } from "../Storybook"
import Plugins from "."
import { PLUGINS_QUERY } from "./usePluginsQuery"

export default {
  title: "Pages/Plugins",
  parameters: {
    layout: "fullscreen",
  },
}

export const PluginsStory = () => (
  <MockLayoutFull>
    <MockedProvider
      mocks={[
        {
          request: {
            query: PLUGINS_QUERY,
          },
          result: {
            data: {
              plugins: [
                {
                  name: "Create Demo Categories",
                  description: "Adds \"createdemocategories\" command to Misago's CLI.",
                  license: "BSD-3",
                  icon: "fas fa-folder",
                  color: "#6a4c93",
                  version: "0.1.0",
                  author: "Rafał Pitoń",
                  homepage: {
                    domain: "misago-project.org",
                    url: "https://misago-project.org"
                  },
                  repo: {
                    domain: "github.com",
                    icon: "fab fa-github",
                    url: "https://github.com/rafalp/misago-local-dev/tree/main/plugins/setupcategories"
                  },
                  directory: "setupcategories",
                  admin: false,
                  client: false
                },
                {
                  name: "Data Faker",
                  description: "Adds mock data generation commands to Misago's CLI.",
                  license: "BSD-3",
                  icon: "fas fa-dice",
                  color: "#0466c8",
                  version: "0.1.0",
                  author: "Rafał Pitoń",
                  homepage: {
                    domain: "misago-project.org",
                    url: "https://misago-project.org"
                  },
                  repo: {
                    domain: "github.com",
                    icon: "fab fa-github",
                    url: "https://github.com/rafalp/misago-local-dev/tree/main/plugins/datafaker"
                  },
                  directory: "datafaker",
                  admin: true,
                  client: true
                },
                {
                  name: "topposters",
                  description: null,
                  license: null,
                  icon: null,
                  color: null,
                  version: null,
                  author: null,
                  homepage: null,
                  repo: null,
                  directory: "topposters",
                  admin: false,
                  client: false
                },
              ],
            },
          },
        },
      ]}
    >
      <Plugins />
    </MockedProvider>
  </MockLayoutFull>
)
PluginsStory.storyName = "Ready"

export const PluginsLoadingStory = () => (
  <MockLayoutFull>
    <MockedProvider mocks={[]}>
      <Plugins />
    </MockedProvider>
  </MockLayoutFull>
)
PluginsLoadingStory.storyName = "Loading"
