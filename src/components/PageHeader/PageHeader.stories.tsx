import PageHeader from "."

export default {
  title: "Components/Page Header",
}

const Template = {
  title: "Users",
  parent: undefined,
}

export const PageHeaderStory = (args: typeof Template) => (
  <PageHeader title={args.title} />
)
PageHeaderStory.storyName = "Basic"
PageHeaderStory.args = Template

export const PageHeaderWithParentStory = (args: typeof Template) => (
  <PageHeader title={args.title} parent={{ link: "/", title: args.parent }} />
)
PageHeaderWithParentStory.storyName = "With Parent"
PageHeaderWithParentStory.args = { ...Template, parent: "Settings" }
