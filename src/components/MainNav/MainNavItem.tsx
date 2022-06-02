import React from "react"

type MainNavItemProps = {
  children: React.ReactNode
}

const MainNavItem: React.FC<MainNavItemProps> = ({ children }) => (
  <li className="nav-item">{children}</li>
)

export default MainNavItem
