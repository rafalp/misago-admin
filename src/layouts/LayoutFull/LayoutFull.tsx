import React from "react"
import Container from "../../components/Container"

interface LayoutFullProps {
  children: React.ReactNode
}

const LayoutFull: React.FC<LayoutFullProps> = ({ children }) => (
  <div className="layout-full">
    <Container>
      <div className="row">
        <div className="col-side">[SIDENAV]</div>
        <div className="col-main">{children}</div>
      </div>
    </Container>
  </div>
)

export default LayoutFull
