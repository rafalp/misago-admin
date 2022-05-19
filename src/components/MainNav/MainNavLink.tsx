import classnames from "classnames"
import React from "react"
import { NavLink } from "react-router-dom"
import Icon from "../Icon"

interface MainNavLinkProps {
  icon?: string
  link: string
  text: React.ReactNode
}

const MainNavLink: React.FC<MainNavLinkProps> = ({ icon, link, text }) => (
  <NavLink
    className={({ isActive }) => classnames("nav-link", { active: isActive })}
    to={link}
  >
    {icon && <Icon name={icon} fixedWidth />}
    {text}
  </NavLink>
)

export default MainNavLink
