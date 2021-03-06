import React from "react"
import Container from "../../components/Container"

type LayoutMinimalProps = {
  children: React.ReactNode
}

const LayoutMinimal: React.FC<LayoutMinimalProps> = ({ children }) => (
  <div className="layout-minimal">
    <Container>{children}</Container>
  </div>
)

export default LayoutMinimal
