import Stamp from "."

export default {
  title: "Components",
}

const Template = {
  color: "#4361ee",
  icon: "fas fa-cog",
}

export const StampStory = (args: typeof Template) => <Stamp {...args} />
StampStory.storyName = "Stamp"
StampStory.args = Template
