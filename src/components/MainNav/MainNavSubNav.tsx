import React from "react"

type MainNavSubNavProps = {
  children: React.ReactNode
}

const MainNavSubNav: React.FC<MainNavSubNavProps> = ({ children }) => (
  <ul className="nav nav-sub flex-column">{children}</ul>
)

export default MainNavSubNav
