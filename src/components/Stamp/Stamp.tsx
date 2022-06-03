import React from "react"
import Icon from "../Icon"

type StampProps = {
  color: string
  icon: string
}

const Stamp: React.FC<StampProps> = ({ color, icon }) => {
  const style = { "--color-theme": color } as React.CSSProperties

  return (
    <span className={"stamp"} style={style}>
      <Icon name={icon} fixedWidth />
    </span>
  )
}

export default Stamp
