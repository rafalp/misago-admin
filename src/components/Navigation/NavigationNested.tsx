import React from "react"

interface NavigationNestedProps {
  children: React.ReactNode
}

const NavigationNested: React.FC<NavigationNestedProps> = ({ children }) => (
  <ul className="nav flex-column nav-nested">{children}</ul>
)

export default NavigationNested
