import classnames from "classnames"
import React from "react"

type ColProps = {
  children: React.ReactNode
  width?: "min" | "max" | number
}

const Col: React.FC<ColProps> = ({ children, width }) => (
  <div
    className={classnames("col", {
      col: width !== "min" || typeof width !== "undefined",
      "col-auto": width === "min" || typeof width === "undefined",
    })}
    style={{ width: typeof width === "number" ? width + "px" : undefined }}
  >
    {children}
  </div>
)

export default Col
