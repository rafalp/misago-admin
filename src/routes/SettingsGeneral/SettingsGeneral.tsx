import { Trans, t } from "@lingui/macro"
import React from "react"
import PageHeader from "../../components/PageHeader"
import WindowTitle from "../../components/WindowTitle"
import { useToasts } from "../../toasts"
import SettingsGeneralForm from "./SettingsGeneralForm"
import useSettingsGeneralQuery from "./useSettingsGeneralQuery"

const SettingsGeneral: React.FC = () => {
  const toasts = useToasts()
  const { data, error } = useSettingsGeneralQuery()

  toasts.useGraphQLErrorEffect(error)

  return (
    <>
      <WindowTitle
        title={t({
          id: "settings.general",
          message: "General",
        })}
        parent={t({
          id: "settings",
          message: "Settings",
        })}
      />
      <PageHeader
        title={<Trans id="settings.general">General</Trans>}
        parent={{
          link: "/settings",
          title: <Trans id="settings">Settings</Trans>,
        }}
      />
      <SettingsGeneralForm
        key={data?.settings ? "ready" : "loading"}
        settings={data?.settings}
      />
    </>
  )
}

export default SettingsGeneral
