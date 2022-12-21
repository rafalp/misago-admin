import React from "react"
import classnames from "classnames"

interface DataTableHeaderProps {
  children: React.ReactNode
  className?: string
}

const DataTableHeader: React.FC<DataTableHeaderProps> = ({
  children,
  className,
}) => (
  <thead className={classnames("data-table-header", className)}>
    <tr>{children}</tr>
  </thead>
)

export default DataTableHeader
