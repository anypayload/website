import React from 'react'
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

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { siteTitle } = this.props;

    return (
      <header>
        <Navbar color="transparent" light expand="lg">
          <Container>
            <NavbarBrand tag={Link} to="/">
              <img src={Logo} style={{height: "50px"}} />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto text-uppercase" navbar>
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
}
  
  export default Header
  