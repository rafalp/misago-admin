import TextInput from "."

export default {
  title: "Components/Controls",
}

const Template = {
  value: "",
  placeholder: "",
  disabled: false,
  invalid: false,
}

export const TextInputStory = (args: typeof Template) => (
  <TextInput {...args} />
)
TextInputStory.storyName = "Text Input"
TextInputStory.args = { ...Template, placeholder: "Enter your username..." }

export const PasswordInputStory = (args: typeof Template) => (
  <TextInput type="password" {...args} />
)
PasswordInputStory.storyName = "Password Input"
PasswordInputStory.args = { ...Template, placeholder: "Enter your password.." }

export const EmailInputStory = (args: typeof Template) => (
  <TextInput type="email" {...args} />
)
EmailInputStory.storyName = "Email Input"
EmailInputStory.args = { ...Template, placeholder: "Enter your e-mail..." }
