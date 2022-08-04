import { t } from "@lingui/macro"
import React from "react"
import WindowTitle from "../../components/WindowTitle"

const Dashboard: React.FC = () => (
  <>
    <WindowTitle
      title={t({
        id: "dashboard",
        message: "Dashboard",
      })}
    />
    DASHBOARD!
  </>
)

export default Dashboard
