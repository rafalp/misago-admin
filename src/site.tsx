import { MainNavItem, Route } from "./types"

const MAIN_NAV: Array<MainNavItem> = [
  {
    key: "home",
    icon: "fas fa-home",
    link: "/",
    text: "Dashboard",
  },
  {
    key: "settings",
    icon: "fas fa-cog",
    link: "/settings",
    text: "Settings",
    children: [
      {
        key: "settings-general",
        link: "/settings/general",
        text: "General settings",
      },
    ],
  },
]

const Home = () => (
  <div>
    <h1>HOME PAGE</h1>
  </div>
)

const Settings = () => (
  <div>
    <h1>SETTINGS PAGE</h1>
  </div>
)

const SettingsGeneral = () => (
  <div>
    <h1>GENERAL SETTINGS PAGE</h1>
  </div>
)

const ROUTES: Array<Route> = [
  {
    key: "home",
    path: "/",
    element: <Home />,
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
]

export { MAIN_NAV, ROUTES }
