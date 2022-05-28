import React from "react"

interface SkeletonTextProps {
  width: number
}

const SkeletonText: React.FC<SkeletonTextProps> = ({ width }) => (
  <span
    aria-hidden="true"
    className="skeleton skeleton-text"
    style={{ width: width + "px" }}
  >
    &nbsp;
  </span>
)

export default SkeletonText
