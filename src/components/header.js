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

export default (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (<>
    <div class="bg-secondary position-relative">
      <Container className="text-center small py-2">
        <Link to={'/products'} className="text-dark stretched-link">
          <strong>November 11, 2020</strong> <span className="mx-2">🚀</span> Check out our latest payload sensor decoders for Bosch, Gavazzi, PNI, Sensoneo, and many others.
        </Link>
      </Container>
    </div>
    <Navbar color="transparent" light expand="lg">
      <Container>
        <NavbarBrand tag={Link} to="/">
          <img src={Logo} style={{height: "60px"}} alt={props.siteTitle} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto text-uppercase" navbar>
            {/*<NavItem>
              <NavLink tag={Link} activeClassName="active" to="/industries/">Industries</NavLink>
            </NavItem>*/}
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
  