import React from "react"

type MediaObjectTitleProps = {
  children: React.ReactNode
}

const MediaObjectTitle: React.FC<MediaObjectTitleProps> = ({ children }) => (
  <h5 className="item-title">{children}</h5>
)

export default MediaObjectTitle
