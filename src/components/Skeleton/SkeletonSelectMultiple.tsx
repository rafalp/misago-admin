import React from "react"
import SkeletonSentence from "./SkeletonSentence"

interface SkeletonSelectMultipleProps {
  options: Array<Array<number>>
}

const SkeletonSelectMultiple: React.FC<SkeletonSelectMultipleProps> = ({
  options,
}) => (
  <div aria-hidden="true" className="form-check-select">
    {options.map((words, key) => (
      <div className="form-check" key={key}>
        <span className="form-check-input skeleton skeleton-checkbox" />
        <span className="form-check-label">
          <SkeletonSentence words={words} />
        </span>
      </div>
    ))}
  </div>
)

export default SkeletonSelectMultiple
