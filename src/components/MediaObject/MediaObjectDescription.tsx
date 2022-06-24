import React from "react"

type MediaObjectDescriptionProps = {
  children: React.ReactNode
}

const MediaObjectDescription: React.FC<MediaObjectDescriptionProps> = ({
  children,
}) => <p className="item-description">{children}</p>

export default MediaObjectDescription
