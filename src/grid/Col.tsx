import classnames from "classnames"
import React from "react"

type ColProps = {
  children: React.ReactNode
  width?: "min" | "half" | "max" | number
}

const Col: React.FC<ColProps> = ({ children, width }) => (
  <div
    className={classnames({
      col: width === "max",
      "col-auto": width === "min" || typeof width === "undefined",
      "col-6": width === "half",
    })}
    style={{ width: typeof width === "number" ? width + "px" : undefined }}
  >
    {children}
  </div>
)

export default Col
