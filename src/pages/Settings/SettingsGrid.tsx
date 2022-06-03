import React from "react"
import { Card, CardBody } from "../../components/Card"
import useChunks from "../../useChunks"
import { SettingsGroup } from "../../types"
import SettingsGridItem from "./SettingsGridItem"

type SettingsGridProps = {
  items: Array<SettingsGroup>
}

const SettingsGrid: React.FC<SettingsGridProps> = ({ items }) => {
  const rows = useChunks(items, 2)

  return (
    <Card className="settings-grid-card">
      <CardBody className="settings-grid">
        {rows.map((row, i) => (
          <div key={i} className="row">
            {row.map((settings) => (
              <SettingsGridItem {...settings} />
            ))}
          </div>
        ))}
      </CardBody>
    </Card>
  )
}

export default SettingsGrid
