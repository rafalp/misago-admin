import React from "react"
import CardsGrid from "../../components/CardsGrid"
import { SettingsGroup } from "../../types"
import SettingsGridItem from "./SettingsGridItem"

type SettingsGridProps = {
  items: Array<SettingsGroup>
}

const SettingsGrid: React.FC<SettingsGridProps> = ({ items }) => (
  <CardsGrid
    items={items.map((settings) => (
      <SettingsGridItem {...settings} />
    ))}
  />
)

export default SettingsGrid
