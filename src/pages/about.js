import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap'
import WorldMap from '../components/world-map'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />

    <Container className="my-5 text-center">
      <Row>
        <Col>
          <h1>About</h1>
        </Col>
      </Row>
    </Container>

    <div className="bg-primary-light">
      <WorldMap className="py-5 border-top">
        <Container>
          <Row className="text-center align-items-center justify-content-center">
            <Col lg="7" className="my-5 py-md-5">
              <h2 className="mono">anypayload</h2>
              <p className="h5 mt-5">
                We seek to simplify the use of IoT devices in production by eliminating repetitive tasks. 
                We are a small team located in Austria engaging in software consulting in IoT and related areas.
                Feel free to contact us for more information and interesting engagements.
              </p>
            </Col>
          </Row>
        </Container>
      </WorldMap>

      <Container className="py-5" style={{marginTop: '-4rem'}}>
        <Row>
          <Col md="6" className="mb-4">
            <Card className="shadow-sm border-0">
              <CardBody>
                <CardTitle>About Us</CardTitle>
                <p>We are a small team that ...</p>
                <ul>
                  <li>embraces IoT technologies</li>
                  <li>lorem ipsum situr</li>
                  <li>csed diam nonumy eirmod tempor</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" className="mb-4">
            <Card className="shadow-sm border-0">
              <CardBody>
                <CardTitle>Our Mission</CardTitle>
                <p>At vero eos et accusam et justo duo dolores et ea rebum.</p>
                <ul>
                  <li>Clita kasd gubergren</li>
                  <li>No sea takimata sanctus est</li>
                  <li>Lorem ipsum dolor sit amet</li>
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </Layout>
)

export default AboutPage
