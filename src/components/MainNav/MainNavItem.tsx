import React from "react"

interface MainNavItemProps {
  children: React.ReactNode
}

const MainNavItem: React.FC<MainNavItemProps> = ({ children }) => (
  <li className="nav-item">{children}</li>
)

export default MainNavItem
