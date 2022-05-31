import RadioSwitch from "."

export default {
  title: "Components/Controls",
}

const Template = {
  checked: true,
  on: "Categories",
  off: "Threads",
  disabled: false,
  invalid: false,
}

export const RadioSwitchStory = (args: typeof Template) => (
  <RadioSwitch {...args} />
)
RadioSwitchStory.storyName = "Radio Switch"
RadioSwitchStory.args = Template
