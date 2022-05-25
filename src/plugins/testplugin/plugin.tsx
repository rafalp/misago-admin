import { MAIN_NAV, ROUTES } from "@misago/hooks"
import Message from "./Message"

const register = () => {
  MAIN_NAV.push({
    key: "plugin",
    icon: "fas fa-puzzle-piece",
    link: "/plugin",
    text: "Plugin",
  })

  ROUTES.push({
    key: "plugin",
    path: "/plugin",
    element: <Message />,
  })
}

export default register
