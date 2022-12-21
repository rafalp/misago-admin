import React from "react"
import classnames from "classnames"
import DataTableRow from "./DataTableRow"

interface DataTableEmptyProps {
  children: React.ReactNode
  colspan?: number
  className?: string
}

const DataTableEmpty: React.FC<DataTableEmptyProps> = ({
  className,
  children,
  colspan,
}) => (
  <DataTableRow className={classnames("datatable-empty-tr", className)}>
    <td className="datatable-empty-col" colSpan={colspan}>
      {children}
    </td>
  </DataTableRow>
)

export default DataTableEmpty
