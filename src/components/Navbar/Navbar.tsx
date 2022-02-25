import React from "react"
import Container from "../Container"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand">
      <Container>
        <div className="row">
          <div className="col-side">[BRAND]</div>
          <div className="col-main">[SEARCH]</div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
