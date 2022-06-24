import React from "react"
import LinkCard from "../../components/LinkCard"
import {
  MediaObject,
  MediaObjectDescription,
  MediaObjectTitle,
} from "../../components/MediaObject"
import Stamp from "../../components/Stamp"
import { SettingsGroup } from "../../types"

const SettingsGridItem: React.FC<SettingsGroup> = ({
  icon,
  color,
  link,
  name,
  description,
}) => (
  <LinkCard to={link}>
    <MediaObject media={<Stamp color={color} icon={icon} />}>
      <MediaObjectTitle>{name}</MediaObjectTitle>
      {description && (
        <MediaObjectDescription>{description}</MediaObjectDescription>
      )}
    </MediaObject>
  </LinkCard>
)

export default SettingsGridItem
