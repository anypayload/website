import React from 'react'
import Link from 'gatsby-link'
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap'
import WorldMap from '../components/world-map'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <Container className="my-5 text-center">
      <Row>
        <Col>
          <h1>Contact</h1>
        </Col>
      </Row>
    </Container>

    <section className="bg-primary-light border-top">
      <Container>
        <Row className="text-center align-items-center justify-content-center">
          <Col lg="7" className="my-5 py-md-5">
            <h2 className="mono">TODO</h2>
            <p className="lead mt-4">
              We seek to simplify the use of IoT devices in production by eliminating repetitive tasks. 
              We are a small team located in Austria engaging in software consulting in IoT and related areas.
              Feel free to contact us for more information and interesting engagements.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default ContactPage
