import React from "react"
import classnames from "classnames"

interface DataTableProps {
  children: React.ReactNode
  className?: string
}

const DataTable: React.FC<DataTableProps> = ({ children, className }) => (
  <table className={classnames("table datatable table-responsive", className)}>
    {children}
  </table>
)

export default DataTable
