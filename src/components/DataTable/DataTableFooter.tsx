import React from "react"
import classnames from "classnames"

interface DataTableFooterProps {
  children: React.ReactNode
  className?: string
}

const DataTableFooter: React.FC<DataTableFooterProps> = ({
  children,
  className,
}) => (
  <tfoot className={classnames("data-table-footer", className)}>
    <tr>{children}</tr>
  </tfoot>
)

export default DataTableFooter
