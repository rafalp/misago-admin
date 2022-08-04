import { MockedProvider } from "@apollo/client/testing"
import { MockLayoutFull } from "../Storybook"
import SettingsThreads from "."
import { SETTINGS_THREADS_QUERY } from "./useSettingsThreadsQuery"

export default {
  title: "Pages/Settings/Threads and posts",
  parameters: {
    layout: "fullscreen",
  },
}

export const SettingsThreadsStory = () => (
  <MockLayoutFull>
    <MockedProvider
      mocks={[
        {
          request: {
            query: SETTINGS_THREADS_QUERY,
          },
          result: {
            data: {
              settings: {
                postMinLength: 10,
                postsPerPage: 14,
                postsPerPageOrphans: 5,
                threadTitleMinLength: 3,
                threadTitleMaxLength: 150,
                threadsPerPage: 20,
              },
            },
          },
        },
      ]}
    >
      <SettingsThreads />
    </MockedProvider>
  </MockLayoutFull>
)
SettingsThreadsStory.storyName = "Ready"

export const SettingsThreadsLoadingStory = () => (
  <MockLayoutFull>
    <MockedProvider mocks={[]}>
      <SettingsThreads />
    </MockedProvider>
  </MockLayoutFull>
)
SettingsThreadsLoadingStory.storyName = "Loading"
