import Header from "."

export default {
  title: "Components/Header",
}

const Template = {
  title: "Page header",
  parent: undefined,
}

export const HeaderStory = (args: typeof Template) => (
  <Header title={args.title} />
)
HeaderStory.storyName = "Basic"
HeaderStory.args = Template

export const HeaderWithParentStory = (args: typeof Template) => (
  <Header title={args.title} parentTitle={args.parent} parentUrl="/parent" />
)
HeaderWithParentStory.storyName = "With Parent"
HeaderWithParentStory.args = { ...Template, parent: "Parent title" }
