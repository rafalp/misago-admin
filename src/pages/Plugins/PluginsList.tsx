import { Trans, t } from "@lingui/macro"
import React from "react"
import AttrsList from "../../components/AttrsList"
import { CardList, CardListEmpty, CardListItem } from "../../components/Card"
import Icon from "../../components/Icon"
import Stamp from "../../components/Stamp"
import { Col, Row } from "../../grid"
import { PluginData } from "./Plugins.types"

type PluginsListProps = {
  plugins: Array<PluginData>
}

const PluginsList: React.FC<PluginsListProps> = ({ plugins }) => (
  <CardList>
    {plugins.length === 0 && (
      <CardListEmpty
        message={
          <Trans id="plugins.empty">No plugins are currently enabled.</Trans>
        }
      />
    )}
    {plugins.map((plugin) => (
      <CardListItem key={plugin.directory}>
        <Row spacing="half">
          <Col>
            <Stamp
              color={plugin.color || "#495057"}
              icon={plugin.icon || "fas fa-cube"}
            />
          </Col>
          <Col width="max">
            <Row spacing="quarter">
              <Col width="max">
                <div className="text-title">{plugin.name}</div>
                {plugin.description && (
                  <div className="text-muted">
                    <small>{plugin.description}</small>
                  </div>
                )}
              </Col>
              {plugin.homepage && (
                <Col>
                  <a
                    className="btn btn-light btn-sm has-text"
                    href={plugin.homepage.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name={"fas fa-link"} />
                    {plugin.homepage.domain}
                  </a>
                </Col>
              )}
              {plugin.repo && (
                <Col>
                  <a
                    className="btn btn-light btn-sm has-text"
                    href={plugin.repo.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name={plugin.repo.icon || "fas fa-code-branch"} />
                    {plugin.repo.domain}
                  </a>
                </Col>
              )}
            </Row>
            <AttrsList
              items={[
                {
                  icon: "far fa-folder",
                  text: plugin.directory,
                  title: t({
                    id: "plugins.directory.tooltip",
                    message: "Plugin directory",
                  }),
                },
                {
                  show: plugin.admin,
                  icon: "fas fa-wrench",
                  text: <Trans id="plugin.admin">Admin</Trans>,
                  title: t({
                    id: "plugins.admin.tooltip",
                    message: "Extends admin control panel",
                  }),
                },
                {
                  show: plugin.client,
                  icon: "far fa-window-maximize",
                  text: <Trans id="plugin.client">Client</Trans>,
                  title: t({
                    id: "plugins.client.tooltip",
                    message: "Extends client UI",
                  }),
                },
                {
                  show: !!plugin.version,
                  icon: "fas fa-code",
                  text: plugin.version,
                  title: t({
                    id: "plugins.version.tooltip",
                    message: "Version",
                  }),
                },
                {
                  show: !!plugin.license,
                  icon: "fas fa-medal",
                  text: plugin.license,
                  title: t({
                    id: "plugins.license.tooltip",
                    message: "License",
                  }),
                },
                {
                  show: !!plugin.author,
                  icon: "far fa-user",
                  text: plugin.author,
                  title: t({
                    id: "plugins.author.tooltip",
                    message: "Author",
                  }),
                },
              ]}
            />
          </Col>
        </Row>
      </CardListItem>
    ))}
  </CardList>
)

export default PluginsList
