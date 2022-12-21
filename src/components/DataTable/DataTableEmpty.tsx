import React from "react"
import classnames from "classnames"

interface DataTableEmptyProps {
  className?: string
}

const DataTableEmpty: React.FC<DataTableEmptyProps> = ({ className }) => (
  <div className={classnames("data-table-empty", className)}>
    Data Table Empty
  </div>
)

export default DataTableEmpty
