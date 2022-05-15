import { BrowserRouter as Router } from "react-router-dom"
import { Navigation, NavigationItem } from "."

export default {
  title: "Components/Navigation",
}

export const NavigationStory = () => (
  <Router>
    <Navigation>
      <NavigationItem
        icon="fas fa-home"
        to="/"
        nested={
          <>
            <NavigationItem to="/">Analytics</NavigationItem>
            <NavigationItem to="/">System checks</NavigationItem>
          </>
        }
      >
        Dashboard
      </NavigationItem>
      <NavigationItem icon="fas fa-users" to="/">
        Users
      </NavigationItem>
      <NavigationItem icon="fas fa-sitemap" to="/">
        Categories
      </NavigationItem>
      <NavigationItem icon="fas fa-paint-brush" to="/">
        Themes
      </NavigationItem>
      <NavigationItem icon="fas fa-paperclip" to="/">
        Attachments
      </NavigationItem>
      <NavigationItem icon="fas fa-cog" to="/">
        Settings
      </NavigationItem>
    </Navigation>
  </Router>
)
NavigationStory.storyName = "Navigation"
