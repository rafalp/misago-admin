import { Trans, t } from "@lingui/macro"
import React from "react"
import { Card } from "../../components/Card"
import PageHeader from "../../components/PageHeader"
import WindowTitle from "../../components/WindowTitle"
import { SETTINGS_GROUPS } from "../../site"
import SettingsGrid from "./SettingsGrid"

const Settings: React.FC = () => (
  <>
    <WindowTitle
      title={t({
        id: "settings",
        message: "Settings",
      })}
    />
    <PageHeader title={<Trans id="settings">Settings</Trans>} />
    <SettingsGrid items={SETTINGS_GROUPS} />
  </>
)

export default Settings
