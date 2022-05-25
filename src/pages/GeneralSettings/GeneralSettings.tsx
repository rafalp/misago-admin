import { Trans, t } from "@lingui/macro"
import React from "react"
import Header from "../../components/Header"
import WindowTitle from "../../components/WindowTitle"
import GeneralSettingsForm from "./GeneralSettingsForm"
import useGeneralSettingsQuery from "./useGeneralSettingsQuery"

const GeneralSettings: React.FC = () => {
  const { data, loading, error } = useGeneralSettingsQuery()

  return (
    <>
      <WindowTitle
        title={t({
          id: "settings.general",
          message: "General settings",
        })}
      />
      <Header title={<Trans id="settings.general">General settings</Trans>} />
      {loading && <div>LOADING</div>}
      {error && <div>ERROR LOADING</div>}
      {data && data.settings && (
        <GeneralSettingsForm settings={data.settings} />
      )}
    </>
  )
}

export default GeneralSettings
