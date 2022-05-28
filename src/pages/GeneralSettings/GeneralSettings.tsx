import { Trans, t } from "@lingui/macro"
import React from "react"
import Header from "../../components/Header"
import WindowTitle from "../../components/WindowTitle"
import { useToasts } from "../../toasts"
import GeneralSettingsForm from "./GeneralSettingsForm"
import GeneralSettingsFormLoader from "./GeneralSettingsFormLoader"
import useGeneralSettingsQuery from "./useGeneralSettingsQuery"

const GeneralSettings: React.FC = () => {
  const toasts = useToasts()
  const { data, error } = useGeneralSettingsQuery()

  toasts.useGraphQLErrorEffect(error)

  return (
    <>
      <WindowTitle
        title={t({
          id: "settings.general",
          message: "General settings",
        })}
      />
      <Header title={<Trans id="settings.general">General settings</Trans>} />
      {data && data.settings ? (
        <GeneralSettingsForm settings={data.settings} />
      ) : (
        <GeneralSettingsFormLoader />
      )}
    </>
  )
}

export default GeneralSettings
