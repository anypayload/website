import React, { useState } from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap'
import Logo from '../images/anypayload.png'

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
  <header>
    <Navbar color="transparent" light expand="lg" sticky>
      <Container>
        <NavbarBrand tag={Link} to="/">
          <img src={Logo} style={{height: "50px"}} alt={props.siteTitle} />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto text-uppercase" navbar>
            <NavItem>
              <NavLink tag={Link} activeClassName="active" to="/consulting">Consulting</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} activeClassName="active" to="/payloads">Payloads</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} activeClassName="active" to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} activeClassName="active" to="/contact">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  </header>
  )
}
  
export default Header
  