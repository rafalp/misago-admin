import React from "react"
import Row from "./Row"

type ListRowProps = {
  children: React.ReactNode
  compact?: boolean
}

const ListRow: React.FC<ListRowProps> = ({ children, compact }) => (
  <Row spacing={compact ? "quarter" : "half"} center>
    {children}
  </Row>
)

export default ListRow
