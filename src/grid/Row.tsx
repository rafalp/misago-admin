import classnames from "classnames"
import React from "react"

type RowProps = {
  center?: boolean
  children: React.ReactNode
  spacing?: "half" | "quarter" | null
}

const Row: React.FC<RowProps> = ({ center, children, spacing }) => (
  <div
    className={classnames("row", {
      "align-items-center": center,
      "gx-3": spacing === "half",
      "gx-2": spacing === "quarter",
    })}
  >
    {children}
  </div>
)

export default Row
