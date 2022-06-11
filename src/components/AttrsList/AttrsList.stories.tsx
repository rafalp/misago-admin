import AttrsList from "."

export default {
  title: "Components",
}

export const AttrsListStory = () => (
  <AttrsList
    items={[
      {
        icon: "far fa-check-square",
        text: "Hello world",
      },
      {
        icon: "far fa-user",
        text: "John Doe",
      },
      {
        show: false,
        icon: "far fa-remove",
        text: "This item should not be shown",
      },
      {
        show: true,
        icon: "far fa-clock",
        text: "15 days ago",
        title: "18 Jan 2022",
      },
    ]}
  />
)
AttrsListStory.storyName = "Attributes list"
