import { Trans } from "@lingui/macro"
import Dashboard from "./pages/Dashboard"
import Plugins from "./pages/Plugins"
import Settings from "./pages/Settings"
import SettingsGeneral from "./pages/SettingsGeneral"
import SettingsThreads from "./pages/SettingsThreads"
import SettingsUsers from "./pages/SettingsUsers"
import { MainNavItem, SettingsGroup, Route } from "./types"

const MAIN_NAV: Array<MainNavItem> = [
  {
    key: "dashboard",
    icon: "fas fa-home",
    link: "/",
    text: <Trans id="dashboard">Dashboard</Trans>,
  },
  {
    key: "settings",
    icon: "fas fa-cog",
    link: "/settings",
    text: <Trans id="settings">Settings</Trans>,
    children: [
      {
        key: "settings-general",
        link: "/settings/general",
        text: <Trans id="settings.general">General</Trans>,
      },
      {
        key: "settings-users",
        link: "/settings/users",
        text: <Trans id="settings.users">User accounts</Trans>,
      },
      {
        key: "settings-threads",
        link: "/settings/threads",
        text: <Trans id="settings.threads">Threads and posts</Trans>,
      },
    ],
  },
  {
    key: "plugins",
    icon: "fas fa-cubes",
    link: "/plugins",
    text: <Trans id="plugins">Plugins</Trans>,
  },
]

const ROUTES: Array<Route> = [
  {
    key: "dashboard",
    path: "/",
    element: <Dashboard />,
  },
  {
    key: "settings",
    path: "/settings",
    element: <Settings />,
  },
  {
    key: "settings-general",
    path: "/settings/general",
    element: <SettingsGeneral />,
  },
  {
    key: "settings-users",
    path: "/settings/users",
    element: <SettingsUsers />,
  },
  {
    key: "settings-threads",
    path: "/settings/threads",
    element: <SettingsThreads />,
  },
  {
    key: "plugins",
    path: "/plugins",
    element: <Plugins />,
  },
]

const SETTINGS_GROUPS: Array<SettingsGroup> = [
  {
    key: "general",
    icon: "fas fa-cog",
    color: "#3a86ff",
    link: "/settings/general",
    name: <Trans id="settings.general">General</Trans>,
    description: (
      <Trans id="settings.general.description">
        Setup forum details like name, title, home page or footer.
      </Trans>
    ),
  },
  {
    key: "users",
    icon: "fas fa-user",
    color: "#8ac926",
    link: "/settings/users",
    name: <Trans id="settings.users">User accounts</Trans>,
    description: (
      <Trans id="settings.users.description">
        Customize user accounts defaults and available features.
      </Trans>
    ),
  },
  {
    key: "threads",
    icon: "fas fa-comment-alt",
    color: "#ffca3a",
    link: "/settings/threads",
    name: <Trans id="settings.threads">Threads and posts</Trans>,
    description: (
      <Trans id="settings.threads.description">
        Change the way that threads and posts are displayed or edit posting
        constraints.
      </Trans>
    ),
  },
]

export { MAIN_NAV, ROUTES, SETTINGS_GROUPS }
