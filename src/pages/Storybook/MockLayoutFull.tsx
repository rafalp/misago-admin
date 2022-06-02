import React from "react"
import Navbar from "../../components/Navbar"
import LayoutFull from "../../layouts/LayoutFull"
import { MAIN_NAV } from "../../site"

type MockLayoutFullProps = {
  children: React.ReactNode
}

const admin = { name: "JohnDoe" }

const MockLayoutFull: React.FC<MockLayoutFullProps> = ({ children }) => (
  <>
    <Navbar user={admin} logout={() => {}} />
    <LayoutFull navItems={MAIN_NAV}>{children}</LayoutFull>
  </>
)

export default MockLayoutFull
