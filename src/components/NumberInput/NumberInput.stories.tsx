import NumberInput from "."

export default {
  title: "Components/Controls",
}

const Template = {
  value: "",
  placeholder: "",
  disabled: false,
  invalid: false,
}

export const NumberInputStory = (args: typeof Template) => (
  <NumberInput {...args} />
)
NumberInputStory.storyName = "Number Input"
NumberInputStory.args = { ...Template, placeholder: "Enter your age..." }
