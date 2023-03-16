import React from "react"
import classnames from "classnames"

interface DataTableHeaderProps {
  children?: React.ReactNode
  className?: string
}

const DataTableHeader: React.FC<DataTableHeaderProps> = ({
  children,
  className,
}) => <tr className={classnames("datatable-header", className)}>{children}</tr>

export default DataTableHeader
