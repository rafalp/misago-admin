import { t } from "@lingui/macro"
import React from "react"

interface LoginMessageProps {
  error: {
    type: string
    message: string
  }
  children(message: string): React.ReactElement
}

const LoginMessage: React.FC<LoginMessageProps> = ({ error, children }) => {
  switch (error.type) {
    case "auth_error.invalid_credentials":
      return children(
        t({
          id: "auth_error.invalid_credentials",
          message: "Login or password is incorrect.",
        })
      )

    case "auth_error.not_admin":
      return children(
        t({
          id: "auth_error.not_admin",
          message: "Administrator permission is required.",
        })
      )

    case "value_error.all_fields_are_required":
      return children(
        t({
          id: "value_error.all_fields_are_required",
          message: "Fill out all fields.",
        })
      )

    default:
      return children(error.message)
  }
}

export default LoginMessage
