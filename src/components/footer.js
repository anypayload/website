import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap'
/*import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMeetup from '@fortawesome/fontawesome-free-brands/faMeetup'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'*/

const Footer = () => 
  <React.Fragment>
    <footer className="py-5 py-lg-7">
      <Container>
        <Row className="pb-5">
          <Col xs="6" md="3">
            <Nav vertical>
              <NavItem>
                <NavLink tag={Link} to="/payloads" className="text-uppercase text-muted">Payloads</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/articles/topics">Recent</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/articles/submit">Trending</NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col xs="6" md="3">
            <Nav vertical>
              <NavItem>
                <NavLink to="/events" tag={Link} className="text-uppercase text-muted">Tools</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.meetup.com/de-DE/blockchainers-vienna/">Payload Decoder</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/code-of-conduct" tag={Link} activeClassName="active">Payload Builder</NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col xs="6" md="3">
            <Nav vertical>
              <NavItem>
                <NavLink to="/contact" tag={Link} className="text-uppercase text-muted">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/privacy" tag={Link} activeClassName="active">Privacy Policy</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/imprint" tag={Link} activeClassName="active">Imprint</NavLink>
              </NavItem>
            </Nav>
          </Col>

          <Col className="small" xs="6" md="3" lg="2">
            <Nav vertical>
              <NavItem>
                <NavLink href="https://www.blockninjas.io" className="text-uppercase text-muted">
                  Supported by 
                  <img src="https://blockninjas.io/Logoschwarz.png" className="img-fluid mt-3" alt="blockninjas" />
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  </React.Fragment>

export default Footer
