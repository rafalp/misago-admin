import React from "react"
import { Card, CardList, CardListItem } from "../../components/Card"
import Icon from "../../components/Icon"
import Stamp from "../../components/Stamp"
import { PluginData } from "./Plugins.types"

type PluginsListProps = {
  plugins: Array<PluginData>
}

const PluginsList: React.FC<PluginsListProps> = ({ plugins }) => (
  <Card>
      <CardList>
        {plugins.map((plugin) => (
          <CardListItem key={plugin.directory}>
            <div className="row gx-3">
              <div className="col-auto">
                <Stamp
                  color={plugin.color || "#495057"}
                  icon={plugin.icon || "fas fa-cube"}
                />
              </div>
              <div className="col">
                <div className="row gx-2">
                  <div className="col">
                    <div className="text-title">
                      {plugin.name}
                    </div>
                    {plugin.description && (
                      <div className="text-muted">
                        <small>{plugin.description}</small>
                      </div>
                    )}
                  </div>
                  {plugin.homepage && (
                    <div className="col-auto">
                      <a
                        className="btn btn-light btn-sm has-text"
                        href={plugin.homepage.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon name={"fas fa-link"} />
                        {plugin.homepage.domain}
                      </a>
                    </div>
                  )}
                  {plugin.repo && (
                    <div className="col-auto">
                      <a
                        className="btn btn-light btn-sm has-text"
                        href={plugin.repo.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Icon
                          name={plugin.repo.icon || "fas fa-code-branch"}
                        />
                        {plugin.repo.domain}
                      </a>
                    </div>
                  )}
                </div>
                <div>
                  <ul className="list-inline m-0">
                    <li className="list-inline-item">
                      <span className="badge rounded-pill bg-light text-dark">
                        <Icon name="far fa-folder" /> {plugin.directory}
                      </span>
                    </li>
                    {plugin.admin && (
                      <li className="list-inline-item">
                        <span className="badge rounded-pill bg-light text-dark">
                          <Icon name="fas fa-wrench" /> Admin
                        </span>
                      </li>
                    )}
                    {plugin.client && (
                      <li className="list-inline-item">
                        <span className="badge rounded-pill bg-light text-dark">
                          <Icon name="far fa-window-maximize" /> Client
                        </span>
                      </li>
                    )}
                    {plugin.version && (
                      <li className="list-inline-item">
                        <span className="badge rounded-pill bg-light text-dark">
                          <Icon name="fas fa-code" /> {plugin.version}
                        </span>
                      </li>
                    )}
                    {plugin.license && (
                      <li className="list-inline-item">
                        <span className="badge rounded-pill bg-light text-dark">
                          <Icon name="fas fa-medal" /> {plugin.license}
                        </span>
                      </li>
                    )}
                    {plugin.author && (
                      <li className="list-inline-item">
                        <span className="badge rounded-pill bg-light text-dark">
                          <Icon name="far fa-user" /> {plugin.author}
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </CardListItem>
        ))}
      </CardList>
  </Card>
  )

export default PluginsList
