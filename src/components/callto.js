import React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col, Button } from 'reactstrap'

const Callto = ({ top, bottom, btn }) => (
  <div className="py-5 border-top border-bottom">
    <Container>
      <Row className="align-items-center justify-content-md-center" noGutters>
        <Col md="6">
          <h2 className="text-primary fw-normal">{top || "Are you interested in our services?"}</h2>
          <h2>{bottom || "Get in touch now."}</h2>
        </Col>
        <Col md="4">
          <Button color="primary" size="lg" tag={Link} className="text-white" to="/contact/">{btn || "Contact us"}</Button>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Callto;