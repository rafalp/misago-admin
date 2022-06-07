import classnames from "classnames"
import React from "react"

type CardListProps = {
  children: React.ReactNode
  className?: string
}

const CardList: React.FC<CardListProps> = ({ children, className }) => (
  <div className={classnames("card-list list-group list-group-flush", className)}>{children}</div>
)

export default CardList
