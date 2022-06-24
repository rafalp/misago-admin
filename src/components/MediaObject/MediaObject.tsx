import React from "react"

type MediaObjectProps = {
  children: React.ReactNode
  media: React.ReactNode
}

const MediaObject: React.FC<MediaObjectProps> = ({ children, media }) => (
  <div className="row gx-3 media-object">
    <div className="col-auto media-object-media">{media}</div>
    <div className="col media-object-body">{children}</div>
  </div>
)

export default MediaObject
