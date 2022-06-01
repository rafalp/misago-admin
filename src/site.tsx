import { Trans } from "@lingui/macro"
import Dashboard from "./pages/Dashboard"
import SettingsGeneral from "./pages/SettingsGeneral"
import SettingsThreads from "./pages/SettingsThreads"
import SettingsUsers from "./pages/SettingsUsers"
import { MainNavItem, Route } from "./types"

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
        text: <Trans id="settings.general">General settings</Trans>,
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
]

const Settings = () => (
  <div>
    <h1>SETTINGS PAGE</h1>
  </div>
)

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
]

export { MAIN_NAV, ROUTES }
