import React from "react"
import Container from "../../components/Container"
import MainNav from "../../components/MainNav"
import { MainNavItem } from "../../types"

type LayoutFullProps = {
  children: React.ReactNode
  navItems: Array<MainNavItem>
}

const LayoutFull: React.FC<LayoutFullProps> = ({ children, navItems }) => (
  <div className="layout-full">
    <Container>
      <div className="row">
        <div className="col-side">
          <MainNav items={navItems} />
        </div>
        <div className="col-main">{children}</div>
      </div>
    </Container>
  </div>
)

export default LayoutFull
