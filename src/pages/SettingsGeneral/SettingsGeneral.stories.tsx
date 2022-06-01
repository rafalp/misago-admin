import { MockedProvider } from "@apollo/client/testing"
import { MockLayoutFull } from "../Storybook"
import SettingsGeneral from "."
import { SETTINGS_GENERAL_QUERY } from "./useSettingsGeneralQuery"

export default {
  title: "Pages/Settings/General",
  parameters: {
    layout: "fullscreen",
  },
}

export const SettingsGeneralStory = () => (
  <MockLayoutFull>
    <MockedProvider
      mocks={[
        {
          request: {
            query: SETTINGS_GENERAL_QUERY,
          },
          result: {
            data: {
              settings: {
                forumName: "My forum",
                forumIndexTitle: "My forum community",
                forumIndexHeader: "Welcome to my forum!",
                forumIndexThreads: true,
              },
            },
          },
        },
      ]}
    >
      <SettingsGeneral />
    </MockedProvider>
  </MockLayoutFull>
)
SettingsGeneralStory.storyName = "Ready"

export const SettingsGeneralLoadingStory = () => (
  <MockLayoutFull>
    <MockedProvider mocks={[]}>
      <SettingsGeneral />
    </MockedProvider>
  </MockLayoutFull>
)
SettingsGeneralLoadingStory.storyName = "Loading"
