import { Trans, t } from "@lingui/macro"
import React from "react"
import PageHeader from "../../components/PageHeader"
import WindowTitle from "../../components/WindowTitle"
import { useToasts } from "../../toasts"
import SettingsUsersForm from "./SettingsUsersForm"
import useSettingsUsersQuery from "./useSettingsUsersQuery"

const SettingsUsers: React.FC = () => {
  const toasts = useToasts()
  const { data, error } = useSettingsUsersQuery()

  toasts.useGraphQLErrorEffect(error)

  return (
    <>
      <WindowTitle
        title={t({
          id: "settings.users",
          message: "User accounts",
        })}
        parent={t({
          id: "settings",
          message: "Settings",
        })}
      />
      <PageHeader
        title={<Trans id="settings.users">User accounts</Trans>}
        parent={{
          link: "/settings",
          title: <Trans id="settings">Settings</Trans>,
        }}
      />
      <SettingsUsersForm
        key={data?.settings ? "ready" : "loading"}
        constraints={data?.constraints}
        settings={data?.settings}
      />
    </>
  )
}

export default SettingsUsers
