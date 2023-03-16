import React from "react"
import classnames from "classnames"

interface DataTableRowProps {
  children: React.ReactNode
  className?: string
}

const DataTableRow: React.FC<DataTableRowProps> = ({
  children,
  className,
}) => <tr className={classnames("datatable-row", className)}>{children}</tr>

export default DataTableRow
