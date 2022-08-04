import { MockLayoutFull } from "../Storybook"
import Settings from "."

export default {
  title: "Routes/Settings",
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
