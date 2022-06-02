import React from "react"
import { Link } from "react-router-dom"
import Icon from "../Icon"

type PageHeaderProps = {
  title: React.ReactNode
  parent?: {
    link: string
    title: React.ReactNode
  } | null
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, parent }) => (
  <div className="page-header">
    <h1>
      {parent && (
        <>
          <Link className="page-header-parent" to={parent.link}>{parent.title}</Link>
          <span className="page-header-divider">
            <Icon name="fas fa-chevron-right" fixedWidth />
          </span>
        </>
      )}
      <span className="page-header-title">{title}</span>
    </h1>
  </div>
)

export default PageHeader
