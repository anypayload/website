import React from 'react'
import { Link } from "gatsby"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap'
import LogoBlack from '../images/anypayload-black.png'
/*import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMeetup from '@fortawesome/fontawesome-free-brands/faMeetup'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'*/

const Footer = () => 
  <footer className="pb-5">
    <Container>
      <Row className="pb-5 align-items-centers">
        {/*<Col xs="6" md="3" className="pt-5">
          <Nav vertical>
            <NavItem>
              <NavLink tag={Link} to="/changelog/" className="text-uppercase text-muted">Payloads</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/changelog">Changelog</NavLink>
            </NavItem>
          </Nav>
</Col>*/}

        <Col xs="6" md="4" className="pt-5">
          <Nav vertical>
            <NavItem>
              <NavLink to="/products/" tag={Link} className="text-uppercase text-muted">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products/#payload-decoder" tag={Link} activeClassName="active">Payload Decoder</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products/#downlink-generator" tag={Link} activeClassName="active">Downlink Generator</NavLink>
            </NavItem>
          </Nav>
        </Col>

        <Col xs="6" md="4" className="pt-5">
          <Nav vertical>
            <NavItem>
              <NavLink to="/contact/" tag={Link} className="text-uppercase text-muted">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/imprint/" tag={Link} activeClassName="active">Imprint</NavLink>
            </NavItem>
          </Nav>
        </Col>

        <Col xs="12" md="4" className="text-center text-md-right pt-5">
          <img src={LogoBlack} className="img-fluid mx-md-n1 w-50 mt-5 mt-md-0" alt="anypayload Logo" />
          <small className="mt-md-3 d-block">Production-ready sensor payloads for your IoT business.</small>
        </Col>
      </Row>
    </Container>
  </footer>

export default Footer
