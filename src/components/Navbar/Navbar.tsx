import React from "react"
import { ButtonLight } from "../Button"
import Container from "../Container"

type NavbarProps = {
  user: {
    name: string
  }
  logout: () => void
}

const Navbar: React.FC<NavbarProps> = ({ logout, user }) => {
  return (
    <nav className="navbar navbar-expand">
      <Container>
        <div className="row w-100">
          <div className="col-side">[MISAGO]</div>
          <div className="col-main d-flex justify-content-end align-items-center">
            <span className="navbar-text me-3">{user.name}</span>
            <ButtonLight onClick={logout} small>
              Logout
            </ButtonLight>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
