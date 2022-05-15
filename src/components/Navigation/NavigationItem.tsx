import classnames from "classnames"
import React from "react"
import { NavLink } from "react-router-dom"
import Icon from "../Icon"
import NavigationNested from "./NavigationNested"

interface NavigationItemProps {
  active?: boolean
  children: React.ReactNode
  icon?: string
  nested?: React.ReactNode
  to: string
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  active,
  children,
  icon,
  nested,
  to,
}) => (
  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        classnames("nav-link", { active: isActive || active })
      }
      to={to}
    >
      {icon && <Icon name={icon} fixedWidth />}
      {children}
    </NavLink>
    {nested && <NavigationNested>{nested}</NavigationNested>}
  </li>
)

export default NavigationItem
