import MainNav from "."

export default {
  title: "Components",
}

export const NavigationStory = () => (
  <MainNav
    items={[
      {
        key: "home",
        icon: "fas fa-home",
        text: "Dashboard",
        link: "/",
        children: [
          {
            key: "analytics",
            text: "Analytics",
            link: "/home/analytics",
          },
          {
            key: "checks",
            text: "System checks",
            link: "/home/checks",
          },
        ],
      },
      {
        key: "users",
        icon: "fas fa-users",
        text: "Users",
        link: "/users",
        children: [
          {
            key: "groups",
            text: "Groups",
            link: "/users/groups",
          },
          {
            key: "bans",
            text: "Bans",
            link: "/users/bans",
          },
        ],
      },
      {
        key: "categories",
        icon: "fas fa-sitemap",
        text: "Categories",
        link: "/categories",
      },
      {
        key: "themes",
        icon: "fas fa-paint-brush",
        text: "Themes",
        link: "/themes",
      },
      {
        key: "attachments",
        icon: "fas fa-paperclip",
        text: "Attachments",
        link: "/attachments",
      },
      {
        key: "settings",
        icon: "fas fa-cog",
        text: "Settings",
        link: "/settings",
      },
    ]}
  />
)
NavigationStory.storyName = "Main Nav"
