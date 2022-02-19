import React from "react"
import Container from "../../components/Container"

interface CenteredLayoutProps {
  children: React.ReactNode
}

const CenteredLayout: React.FC<CenteredLayoutProps> = ({ children }) => (
  <div className="layout-centered">
    <Container>{children}</Container>
  </div>
)

export default CenteredLayout
