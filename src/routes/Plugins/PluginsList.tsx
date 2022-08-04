import { Trans } from "@lingui/macro"
import React from "react"
import { Card, CardList, CardListEmpty } from "../../components/Card"
import CardsGrid from "../../components/CardsGrid"
import { PluginData } from "./Plugins.types"
import PluginsListItem from "./PluginsListItem"

type PluginsListProps = {
  plugins: Array<PluginData>
}

const PluginsList: React.FC<PluginsListProps> = ({ plugins }) => {
  if (plugins.length === 0) {
    return (
      <Card>
        <CardList>
          <CardListEmpty
            message={
              <Trans id="plugins.empty">
                No plugins are currently enabled.
              </Trans>
            }
          />
        </CardList>
      </Card>
    )
  }

  return (
    <CardsGrid
      items={plugins.map((plugin) => (
        <PluginsListItem plugin={plugin} />
      ))}
    />
  )
}

export default PluginsList
