import React from 'react'
import { Link } from "gatsby"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap'
import LogoBlack from '../images/anypayload-black.png'
/*import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMeetup from '@fortawesome/fontawesome-free-brands/faMeetup'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'*/

const Footer = () => 
  <footer className="py-5 py-lg-7">
    <Container>
      <Row className="pb-5 align-items-centers">
        <Col xs="6" md="3">
          <Nav vertical>
            <NavItem>
              <NavLink tag={Link} to="/payloads/" className="text-uppercase text-muted">Payloads</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/articles/topics">Recent</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/articles/submit">Changelog</NavLink>
            </NavItem>
          </Nav>
        </Col>

        <Col xs="6" md="3">
          <Nav vertical>
            <NavItem>
              <NavLink to="/products/" tag={Link} className="text-uppercase text-muted">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products/payload-parser/" tag={Link} activeClassName="active">Payload Parser</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products/downlink-generator/" tag={Link} activeClassName="active">Downlink Generator</NavLink>
            </NavItem>
          </Nav>
        </Col>

        <Col xs="6" md="3">
          <Nav vertical>
            <NavItem>
              <NavLink to="/contact/" tag={Link} className="text-uppercase text-muted">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/privacy/" tag={Link} activeClassName="active">Privacy Policy</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/imprint/" tag={Link} activeClassName="active">Imprint</NavLink>
            </NavItem>
          </Nav>
        </Col>

        <Col xs="12" md="3" className="text-center text-md-right">
          <img src={LogoBlack} className="img-fluid mx-n2 w-50" alt="blockninjas" />
          <small className="mono d-block">Production-ready sensor payloads for your IoT solutions.</small>
        </Col>
      </Row>
    </Container>
  </footer>

export default Footer
