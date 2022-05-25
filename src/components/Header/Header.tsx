import React from "react"
import { Link } from "react-router-dom"
import Icon from "../Icon"

interface HeaderProps {
  title: React.ReactNode
  parentTitle?: React.ReactNode
  parentUrl?: string
}

const Header: React.FC<HeaderProps> = ({ title, parentTitle, parentUrl }) => (
  <div className="page-header">
    {parentTitle && parentUrl && (
      <div className="page-header-parent">
        <Link to={parentUrl}>
          {parentTitle}
          <Icon name="fas fa-chevron-right" />
        </Link>
      </div>
    )}
    <h1>{title}</h1>
  </div>
)

export default Header
