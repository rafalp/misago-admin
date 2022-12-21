import { DataTable, DataTableEmpty, DataTableHeader, DataTableRow } from "."

export default {
  title: "Components/Data Table",
}

const Template = {
  children: "Data Table",
}

export const DataTableStory = () => (
  <DataTable>
    <DataTableHeader>
      <td>#</td>
      <td>one</td>
      <td>two</td>
    </DataTableHeader>
    <DataTableRow>
      <td>1</td>
      <td>one</td>
      <td>two</td>
    </DataTableRow>
    <DataTableRow>
      <td>1</td>
      <td>one</td>
      <td>two</td>
    </DataTableRow>
  </DataTable>
)
DataTableStory.args = { ...Template, children: "Sample List" }

export const DataTableEmptyStory = () => (
  <DataTable>
    <DataTableEmpty>This table is empty.</DataTableEmpty>
  </DataTable>
)
DataTableEmptyStory.args = { ...Template, children: "Data Table Empty" }

export const DataTableEmptyWithHeadersStory = () => (
  <DataTable>
    <DataTableHeader>
      <th>#</th>
      <th>one</th>
      <th>two</th>
    </DataTableHeader>
    <DataTableEmpty colspan={3}>
      <td>1</td>
      <td>2</td>
      <td>3</td>
    </DataTableEmpty>
  </DataTable>
)
DataTableEmptyWithHeadersStory.args = {
  ...Template,
  children: "Data Table Empty",
}
