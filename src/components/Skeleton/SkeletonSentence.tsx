import React from "react"
import SkeletonText from "./SkeletonText"

interface SkeletonSentenceProps {
  words: Array<number>
}

const SkeletonSentence: React.FC<SkeletonSentenceProps> = ({ words }) => (
  <span className="skeleton skeleton-sentence">
    {words.map((width, key) => (
      <React.Fragment key={key}>
        <SkeletonText width={width} />
        {key + 1 < words.length ? " " : ""}
      </React.Fragment>
    ))}
  </span>
)

export default SkeletonSentence
