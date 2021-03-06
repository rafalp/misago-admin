import { t } from "@lingui/macro"
import React from "react"

type WindowTitleProps = {
  title?: string | null
  parent?: string | null
}

const WindowTitle: React.FC<WindowTitleProps> = ({ title, parent }) => {
  const segments = []
  if (title) segments.push(title)
  if (parent) segments.push(parent)

  segments.push(
    t({
      id: "misago_admin",
      message: "Misago Admin",
    })
  )

  window.document.title = segments.join(" | ")

  return null
}

export default WindowTitle
