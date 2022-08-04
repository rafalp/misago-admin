import { Trans, t } from "@lingui/macro"
import React from "react"
import PageHeader from "../../components/PageHeader"
import WindowTitle from "../../components/WindowTitle"
import { useToasts } from "../../toasts"
import SettingsThreadsForm from "./SettingsThreadsForm"
import useSettingsThreadsQuery from "./useSettingsThreadsQuery"

const SettingsThreads: React.FC = () => {
  const toasts = useToasts()
  const { data, error } = useSettingsThreadsQuery()

  toasts.useGraphQLErrorEffect(error)

  return (
    <>
      <WindowTitle
        title={t({
          id: "settings.threads",
          message: "Threads and posts",
        })}
        parent={t({
          id: "settings",
          message: "Settings",
        })}
      />
      <PageHeader
        title={<Trans id="settings.threads">Threads and posts</Trans>}
        parent={{
          link: "/settings",
          title: <Trans id="settings">Settings</Trans>,
        }}
      />
      <SettingsThreadsForm
        key={data?.settings ? "ready" : "loading"}
        settings={data?.settings}
      />
    </>
  )
}

export default SettingsThreads
