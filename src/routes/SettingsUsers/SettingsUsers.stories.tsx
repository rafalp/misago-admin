import { MockedProvider } from "@apollo/client/testing"
import { MockLayoutFull } from "../Storybook"
import SettingsUsers from "."
import { SETTINGS_USERS_QUERY } from "./useSettingsUsersQuery"

export default {
  title: "Routes/Settings/User accounts",
  parameters: {
    layout: "fullscreen",
  },
}

export const SettingsUsersStory = () => (
  <MockLayoutFull>
    <MockedProvider
      mocks={[
        {
          request: {
            query: SETTINGS_USERS_QUERY,
          },
          result: {
            data: {
              constraints: {
                passwordMaxLength: 40,
              },
              settings: {
                avatarUploadMaxSize: 500,
                passwordMinLength: 10,
                usernameMinLength: 3,
                usernameMaxLength: 15,
              },
            },
          },
        },
      ]}
    >
      <SettingsUsers />
    </MockedProvider>
  </MockLayoutFull>
)
SettingsUsersStory.storyName = "Ready"

export const SettingsUsersLoadingStory = () => (
  <MockLayoutFull>
    <MockedProvider mocks={[]}>
      <SettingsUsers />
    </MockedProvider>
  </MockLayoutFull>
)
SettingsUsersLoadingStory.storyName = "Loading"
