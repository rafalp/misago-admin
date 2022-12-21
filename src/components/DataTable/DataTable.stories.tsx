import { DataTable, DataTableBody, DataTableEmpty, DataTableHeader } from "."

export default {
  title: "Components/Data Table",
}

const Template = {
  children: "Data Table",
}

export const Empty = () => <DataTableEmpty />
Empty.args = { ...Template, children: "Data Table Empty" }

export const dataTable = () => (
  <DataTable>
    <DataTableHeader>
      <td>one</td>
      <td>two</td>
    </DataTableHeader>
    <DataTableBody>
      <td>one</td>
      <td>two</td>
    </DataTableBody>
  </DataTable>
)
dataTable.args = { ...Template, children: "Sample List" }
