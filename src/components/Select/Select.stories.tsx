import Select from "."

export default {
  title: "Components/Controls",
}

const Template = {
  value: "",
  disabled: false,
  invalid: false,
}

export const SelectStory = (args: typeof Template) => (
  <Select
    options={[
      { value: "", name: "" },
      { value: "user", name: "User" },
      { value: "mod", name: "Moderator" },
      { value: "admin", name: "Admin" },
    ]}
    {...args}
  />
)
SelectStory.storyName = "Select"
SelectStory.args = { ...Template }
