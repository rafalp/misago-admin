import FileInput from "."

export default {
  title: "Components/Controls",
}

const Template = {
  accept: "image/*",
  disabled: false,
  invalid: false,
}

export const FileInputStory = (args: typeof Template) => (
  <FileInput {...args} />
)
FileInputStory.storyName = "File Input"
FileInputStory.args = Template
