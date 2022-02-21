import { AlertError, AlertInfo, AlertSuccess, AlertWarning } from "."

export default {
  title: "Components/Alert",
}

export const Error = () => (
  <AlertError>
    A simple error alert with{" "}
    <a href="#" className="alert-link">
      an example link
    </a>
    . Give it a click if you like.
  </AlertError>
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
