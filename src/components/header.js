import React, { useState } from 'react'
import { Link } from "gatsby"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import Logo from '../images/anypayload.png'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (<>
    <div className="bg-secondary position-relative">
      <Container className="text-center small py-2">
        <Link to={'/products/'} className="text-dark stretched-link text-decoration-none">
          <strong>April 16, 2024</strong> <span className="mx-2" role="img" aria-label="Updates">🚀</span> Check out our latest payload sensor decoders for Adeunis, Bosch, Decentlab, Dragino, Elvaco, IMBuildings, Milesight, NAS, PNI, Sensoneo, Teneo, Wehrle/Sontex, and many others.
        </Link>
      </Container>
    </div>
    <Navbar color="transparent" light expand="lg">
      <Container>
        <NavbarBrand tag={Link} to="/">
          <img src={Logo} style={{ height: "60px" }} alt={props.siteTitle} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ms-auto text-uppercase" navbar>
            <NavItem>
              <NavLink tag={Link} activeClassName="active" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} activeClassName="active" to="/products/">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} activeClassName="active" to="/pricing/">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} activeClassName="active" to="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} activeClassName="active" to="/contact/">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </>)
}

export default Header