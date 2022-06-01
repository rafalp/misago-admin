import React from "react"
import SkeletonSentence from "./SkeletonSentence"

interface SkeletonRadioSelectProps {
  options: Array<Array<number>>
}

const SkeletonRadioSelect: React.FC<SkeletonRadioSelectProps> = ({
  options,
}) => (
  <div aria-hidden="true" className="form-check-select">
    {options.map((words, key) => (
      <div className="form-check" key={key}>
        <span className="form-check-input skeleton skeleton-radio" />
        <span className="form-check-label">
          <SkeletonSentence words={words} />
        </span>
      </div>
    ))}
  </div>
)

export default SkeletonRadioSelect
