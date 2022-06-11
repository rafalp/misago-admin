import React from "react"
import Icon from "../Icon"
import { AttrsItem } from "./AttrsList.types"

type AttrsListItemProps = AttrsItem

const AttrsListItem: React.FC<AttrsListItemProps> = ({
  icon,
  text,
  title,
}) => (
  <li className="attrs-list-item">
    <span className="attr-bg" title={title}>
      <Icon name={icon} fixedWidth /> {text}
    </span>
  </li>
)

export default AttrsListItem
