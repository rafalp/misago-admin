import React from "react"
import SkeletonSentence from "./SkeletonSentence"

type SkeletonInputProps = {
  words: Array<number>
}

const SkeletonInput: React.FC<SkeletonInputProps> = ({ words }) => (
  <div aria-hidden="true" className="form-control">
    <SkeletonSentence words={words} />
  </div>
)

export default SkeletonInput
