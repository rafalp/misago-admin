import { MockedProvider } from "@apollo/client/testing"
import { MockLayoutFull } from "../Storybook"
import GeneralSettings from "."
import { GENERAL_SETTINGS_QUERY } from "./useGeneralSettingsQuery"

export default {
  title: "Pages/Settings/General",
  parameters: {
    layout: "fullscreen",
  },
}

export const GeneralSettingsStory = () => (
  <MockLayoutFull>
    <MockedProvider
      mocks={[
        {
          request: {
            query: GENERAL_SETTINGS_QUERY,
          },
          result: {
            data: {
              settings: {
                forumName: "Lorem ipsum",
                forumIndexTitle: "",
                forumIndexHeader: "",
                forumIndexThreads: true,
              },
            },
          },
        },
      ]}
    >
      <GeneralSettings />
    </MockedProvider>
  </MockLayoutFull>
)
GeneralSettingsStory.storyName = "Ready"

export const GeneralSettingsLoadingStory = () => (
  <MockLayoutFull>
    <MockedProvider mocks={[]}>
      <GeneralSettings />
    </MockedProvider>
  </MockLayoutFull>
)
GeneralSettingsLoadingStory.storyName = "Loading"
