import React from "react"

interface SkeletonTextInputProps {
  children: React.ReactNode
}

const SkeletonTextInput: React.FC<SkeletonTextInputProps> = ({ children }) => (
  <div aria-hidden="true" className="form-control">
    {children}
  </div>
)

export default SkeletonTextInput
