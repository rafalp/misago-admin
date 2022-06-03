import { MockLayoutFull } from "../Storybook"
import Settings from "."

export default {
  title: "Pages/Settings",
  parameters: {
    layout: "fullscreen",
  },
}

export const SettingsStory = () => (
  <MockLayoutFull>
    <Settings />
  </MockLayoutFull>
)
SettingsStory.storyName = "Settings Groups"
