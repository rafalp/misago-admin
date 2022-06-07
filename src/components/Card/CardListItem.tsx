import classnames from "classnames"
import React from "react"

type CardListItemProps = {
  children: React.ReactNode
  className?: string
}

const CardListItem: React.FC<CardListItemProps> = ({ children, className }) => (
  <div className={classnames("card-list-item list-group-item", className)}>{children}</div>
)

export default CardListItem
