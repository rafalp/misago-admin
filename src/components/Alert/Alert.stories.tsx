import { AlertDanger, AlertInfo, AlertSuccess, AlertWarning } from "."

export default {
  title: "Components/Alert",
}

export const Danger = () => (
  <AlertDanger>
    A simple danger alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </AlertDanger>
)

export const Info = () => (
  <AlertInfo>
    A simple info alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </AlertInfo>
)

export const Success = () => (
  <AlertSuccess>
    A simple success alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </AlertSuccess>
)

export const Warning = () => (
  <AlertWarning>
    A simple danger alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </AlertWarning>
)
