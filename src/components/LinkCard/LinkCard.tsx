import classnames from "classnames"
import React from "react"
import { Link } from "react-router-dom"
import { CardBody } from "../Card"

type LinkCardProps = {
  children: React.ReactNode
  className?: string
  to: string
}

const LinkCard: React.FC<LinkCardProps> = ({ children, className, to }) => (
  <Link className={classnames("link-card", className)} to={to}>
    <CardBody className="link-card-body">{children}</CardBody>
  </Link>
)

export default LinkCard
