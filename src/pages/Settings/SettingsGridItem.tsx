import React from "react"
import { Link } from "react-router-dom"
import Stamp from "../../components/Stamp"
import { SettingsGroup } from "../../types"

const SettingsGridItem: React.FC<SettingsGroup> = ({
  icon,
  color,
  link,
  name,
  description,
}) => (
  <div className="col-12 col-md-6">
    <Link className="settings-grid-item" to={link}>
      <div className="settings-grid-icon">
        <Stamp color={color} icon={icon} />
      </div>
      <div className="settings-grid-content">
        <div className="text-title">{name}</div>
        {description && <div className="text-muted">{description}</div>}
      </div>
    </Link>
  </div>
)

export default SettingsGridItem
