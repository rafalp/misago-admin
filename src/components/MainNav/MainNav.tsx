import React from "react"
import { MainNavItem as MainNavItemType } from "../../types"
import MainNavItem from "./MainNavItem"
import MainNavLink from "./MainNavLink"
import MainNavSubNav from "./MainNavSubNav"

type MainNavProps = {
  items: Array<MainNavItemType>
}

const MainNav: React.FC<MainNavProps> = ({ items }) => (
  <ul className="nav flex-column nav-main">
    {items.map((item) => (
      <MainNavItem key={item.key}>
        <MainNavLink icon={item.icon} link={item.link} text={item.text} />
        {item.children && item.children.length > 0 && (
          <MainNavSubNav>
            {item.children.map((child) => (
              <MainNavItem key={child.key}>
                <MainNavLink link={child.link} text={child.text} />
              </MainNavItem>
            ))}
          </MainNavSubNav>
        )}
      </MainNavItem>
    ))}
  </ul>
)

export default MainNav
