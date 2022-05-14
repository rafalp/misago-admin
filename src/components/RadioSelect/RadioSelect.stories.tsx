import RadioSelect from "."

export default {
  title: "Components/Controls",
}

const Template = {
  value: "mod",
  disabled: false,
  invalid: false,
}

export const RadioSelectStory = (args: typeof Template) => (
  <RadioSelect
    options={[
      { value: "user", name: "User" },
      { value: "mod", name: "Moderator" },
      { value: "admin", name: "Admin" },
    ]}
    {...args}
  />
)
RadioSelectStory.storyName = "Radio Select"
RadioSelectStory.args = Template
