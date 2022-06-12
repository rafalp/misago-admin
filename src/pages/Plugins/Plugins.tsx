import { Trans, t } from "@lingui/macro"
import React from "react"
import { Card } from "../../components/Card"
import PageHeader from "../../components/PageHeader"
import WindowTitle from "../../components/WindowTitle"
import { useToasts } from "../../toasts"
import PluginsList from "./PluginsList"
import PluginsLoading from "./PluginsLoading"
import usePluginsQuery from "./usePluginsQuery"

const Plugins: React.FC = () => {
  const toasts = useToasts()
  const { data, error } = usePluginsQuery()

  toasts.useGraphQLErrorEffect(error)

  return (
    <>
      <WindowTitle
        title={t({
          id: "plugins",
          message: "Plugins",
        })}
      />
      <PageHeader title={<Trans id="plugins">Plugins</Trans>} />
      {data?.plugins ? (
        <PluginsList plugins={data.plugins} />
      ) : (
        <PluginsLoading />
      )}
    </>
  )
}

export default Plugins
