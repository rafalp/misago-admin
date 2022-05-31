import React from "react"
import SkeletonSentence from "./SkeletonSentence"

interface SkeletonTextInputProps {
  words: Array<number>
}

const SkeletonTextInput: React.FC<SkeletonTextInputProps> = ({ words }) => (
  <div aria-hidden="true" className="form-control">
    <SkeletonSentence words={words} />
  </div>
)

export default SkeletonTextInput
