import { Trans, t } from "@lingui/macro"
import React from "react"
import PageHeader from "../../components/PageHeader"
import { Card, CardBody } from "../../components/Card"
import Icon from "../../components/Icon"
import Stamp from "../../components/Stamp"
import WindowTitle from "../../components/WindowTitle"
import { useToasts } from "../../toasts"
import usePluginsQuery from "./usePluginsQuery"

const SettingsThreads: React.FC = () => {
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
      <Card>
        {data?.plugins && (
          <>
            {data.plugins.map((plugin) => (
              <CardBody key={plugin.directory}>
                <div className="row">
                  <div className="col-auto col-icon">
                    <Stamp
                      color={plugin.color || "#495057"}
                      icon={plugin.icon || "fas fa-cube"}
                    />
                  </div>
                  <div className="col">
                    <div>
                      <span className="text-title">{plugin.name}</span>
                    </div>
                    {plugin.description && (
                      <div className="text-muted">
                        <small>{plugin.description}</small>
                      </div>
                    )}
                    <div>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <span className="badge rounded-pill bg-light text-dark">
                            <Icon name={"far fa-folder"} /> {plugin.directory}
                          </span>
                        </li>
                        {plugin.admin && (
                          <li className="list-inline-item">
                            <span className="badge rounded-pill bg-light text-dark">
                              <Icon name={"fas fa-wrench"} /> Admin
                            </span>
                          </li>
                        )}
                        {plugin.client && (
                          <li className="list-inline-item">
                            <span className="badge rounded-pill bg-light text-dark">
                              <Icon name={"far fa-window-maximize"} /> Client
                            </span>
                          </li>
                        )}
                        {plugin.version && (
                          <li className="list-inline-item">
                            <span className="badge rounded-pill bg-light text-dark">
                              <Icon name={"fas fa-code"} /> {plugin.version}
                            </span>
                          </li>
                        )}
                        {plugin.license && (
                          <li className="list-inline-item">
                            <span className="badge rounded-pill bg-light text-dark">
                              <Icon name={"fas fa-medal"} /> {plugin.license}
                            </span>
                          </li>
                        )}
                        {plugin.author && (
                          <li className="list-inline-item">
                            <span className="badge rounded-pill bg-light text-dark">
                              <Icon name={"far fa-user"} /> {plugin.author}
                            </span>
                          </li>
                        )}
                        {plugin.homepage && (
                          <li className="list-inline-item">
                            <a
                              className="badge rounded-pill bg-light text-dark"
                              href={plugin.homepage.url}
                              target="_blank"
                            >
                              <Icon name={"fas fa-link"} />{" "}
                              {plugin.homepage.domain}
                            </a>
                          </li>
                        )}
                        {plugin.repo && (
                          <li className="list-inline-item">
                            <a
                              className="badge rounded-pill bg-light text-dark"
                              href={plugin.repo.url}
                              target="_blank"
                            >
                              <Icon
                                name={plugin.repo.icon || "fas fa-code-branch"}
                              />{" "}
                              {plugin.repo.domain}
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardBody>
            ))}
          </>
        )}
      </Card>
    </>
  )
}

export default SettingsThreads
