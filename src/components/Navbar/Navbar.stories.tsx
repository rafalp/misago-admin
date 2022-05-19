import Navbar from "."

export default {
  title: "Components",
  parameters: {
    layout: "fullscreen",
  },
}

export const NavbarStory = () => (
  <Navbar
    user={{
      name: "Sephiroth",
    }}
    logout={() => {}}
  />
)
NavbarStory.storyName = "Navbar"
