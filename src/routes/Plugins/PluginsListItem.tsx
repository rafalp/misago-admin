import { Trans, t } from "@lingui/macro"
import React from "react"
import AttrsList from "../../components/AttrsList"
import { Card, CardBody, CardFooter } from "../../components/Card"
import Icon from "../../components/Icon"
import {
  MediaObject,
  MediaObjectDescription,
  MediaObjectTitle,
} from "../../components/MediaObject"
import Stamp from "../../components/Stamp"
import { Row } from "../../grid"
import { PluginData } from "./Plugins.types"

const PluginsListItem: React.FC<{ plugin: PluginData }> = ({ plugin }) => (
  <Card>
    <CardBody>
      <MediaObject
        media={
          <Stamp
            color={plugin.color || "#495057"}
            icon={plugin.icon || "fas fa-cube"}
          />
        }
      >
        <MediaObjectTitle>{plugin.name}</MediaObjectTitle>
        {plugin.description && (
          <MediaObjectDescription>{plugin.description}</MediaObjectDescription>
        )}
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
      </MediaObject>
    </CardBody>
    {(plugin.homepage || plugin.repo) && (
      <CardFooter>
        <Row>
          {plugin.homepage && (
            <div className="col-12 col-md-6">
              <a
                className="btn btn-light btn-sm has-text w-100 text-truncate"
                href={plugin.homepage.url}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name="fas fa-link" />
                {plugin.homepage.domain}
              </a>
            </div>
          )}
          {plugin.repo && (
            <div className="col-12 col-md-6">
              <a
                className="btn btn-light btn-sm has-text w-100 text-truncate"
                href={plugin.repo.url}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={plugin.repo.icon || "fas fa-code-branch"} />
                {plugin.repo.domain}
              </a>
            </div>
          )}
        </Row>
      </CardFooter>
    )}
  </Card>
)

export default PluginsListItem
