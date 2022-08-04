import React from "react"
import WindowTitle from "../../components/WindowTitle"
import LayoutMinimal from "../../layouts/LayoutMinimal"

const Loading: React.FC = () => (
  <LayoutMinimal>
    <WindowTitle />
    <div className="page-loading" />
  </LayoutMinimal>
)

export default Loading
