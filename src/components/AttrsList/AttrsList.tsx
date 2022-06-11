import React from "react"
import { AttrsItem } from "./AttrsList.types"
import AttrsListItem from "./AttrsListItem"

type AttrsListProps = {
  items: Array<AttrsItem>
}

const AttrsList: React.FC<AttrsListProps> = ({ items }) => (
  <ul className="attrs-list">
    {items.map(({ show, ...props }, key) =>
      show === false ? null : <AttrsListItem key={key} {...props} />
    )}
  </ul>
)

export default AttrsList
