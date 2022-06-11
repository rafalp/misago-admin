import classnames from "classnames"
import React from "react"
import Icon from "../Icon"

type CardListEmptyProps = {
  className?: string
  icon?: string
  message: React.ReactNode
}

const CardListEmpty: React.FC<CardListEmptyProps> = ({
  className,
  icon,
  message,
}) => (
  <div
    className={classnames(
      "card-list-item list-group-item empty-list",
      className
    )}
  >
    <Icon name={icon || "far fa-lightbulb"} />
    <div className="empty-list-message">{message}</div>
  </div>
)

export default CardListEmpty
