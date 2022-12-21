import React from "react"
import classnames from "classnames"

interface DataTableBodyProps {
  children: React.ReactNode
  className?: string
}

const DataTableBody: React.FC<DataTableBodyProps> = ({
  children,
  className,
}) => (
  <tbody className={classnames("data-table-body", className)}>
    <tr>{children}</tr>
  </tbody>
)

export default DataTableBody
