import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

const Callto = () => (
  <div className="bg-light py-5">
    <Container>
      <Row className="align-items-center justify-content-md-center" noGutters>
        <Col md="6">
          <h2 className="text-primary">Are you interested in our services?</h2>
          <h2 className="text-secondarys">Get in touch now.</h2>
        </Col>
        <Col md="2">
          <Button color="primary" size="lg">Contact us</Button>
        </Col>
      </Row>
    </Container>
  </div>
)

export default Callto;