import Checkbox from "."

export default {
  title: "Components/Controls",
}

const Template = {
  checked: false,
  disabled: false,
  invalid: false,
}

export const CheckboxStory = (args: typeof Template) => <Checkbox {...args} />
CheckboxStory.storyName = "Checkbox"
CheckboxStory.args = Template
