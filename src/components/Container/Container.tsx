import React from "react"

interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="container-fluid">{children}</div>
)

export default Container
