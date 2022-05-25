import { Trans } from "@lingui/macro"
import Dashboard from "./pages/Dashboard"
import GeneralSettings from "./pages/GeneralSettings"
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
    element: <GeneralSettings />,
  },
]

export { MAIN_NAV, ROUTES }
