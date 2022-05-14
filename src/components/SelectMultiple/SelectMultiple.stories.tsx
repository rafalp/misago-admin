import SelectMultiple from "."

export default {
  title: "Components/Controls",
}

const Template = {
  value: ["user", "admin"],
  disabled: false,
  invalid: false,
}

export const SelectMultipleStory = (args: typeof Template) => (
  <SelectMultiple
    options={[
      { value: "user", name: "User" },
      { value: "mod", name: "Moderator" },
      { value: "admin", name: "Admin" },
    ]}
    {...args}
  />
)
SelectMultipleStory.storyName = "Select Multiple"
SelectMultipleStory.args = Template
