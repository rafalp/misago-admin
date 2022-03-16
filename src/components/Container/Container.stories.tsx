import Container from "."

export default {
  title: "Components",
  parameters: {
    layout: "fullscreen",
  },
}

export const ContainerStory = () => (
  <Container>Lorem ipsum dolor met.</Container>
)
ContainerStory.storyName = "Container"
