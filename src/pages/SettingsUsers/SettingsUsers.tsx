import { Trans, t } from "@lingui/macro"
import React from "react"
import Header from "../../components/Header"
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
      />
      <Header title={<Trans id="settings.users">User accounts</Trans>} />
      <SettingsUsersForm
        key={data?.settings ? "ready" : "loading"}
        constraints={data?.constraints}
        settings={data?.settings}
      />
    </>
  )
}

export default SettingsUsers
