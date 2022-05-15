import React from "react"

interface NavigationProps {
  children: React.ReactNode
}

const Navigation: React.FC<NavigationProps> = ({ children }) => (
  <ul className="nav flex-column nav-main">{children}</ul>
)

export default Navigation
