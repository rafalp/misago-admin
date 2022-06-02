import classnames from "classnames"
import React from "react"

type IconProps = {
  fixedWidth?: boolean
  name: string
}

const Icon: React.FC<IconProps> = ({ fixedWidth, name }) => (
  <i className={classnames("icon", name, { "fa-fw": fixedWidth })} />
)

export default Icon
