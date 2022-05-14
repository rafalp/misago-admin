import TextAreaInput from "."

export default {
  title: "Components/Controls",
}

const Template = {
  value: "",
  placeholder: "",
  disabled: false,
  invalid: false,
}

export const TextAreaInputStory = (args: typeof Template) => (
  <TextAreaInput {...args} />
)
TextAreaInputStory.storyName = "Text Area Input"
TextAreaInputStory.args = { ...Template, placeholder: "Enter your story..." }
