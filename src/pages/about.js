import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import WorldMap from '../components/world-map'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Callto from '../components/callto'
import CardInfo from '../components/card'

const AboutPage = () => (
  <Layout>
    <SEO 
      title="An IoT initative from Austria" 
      description="We seek to simplify the use of IoT sensors and devices in production by eliminating repetitive tasks.
      We are a small team located in Austria engaging in software consulting in IoT and related areas."
    />

    <section>
      <WorldMap className="py-md-5">
        <Container>
          <Row className="justify-content-center">
            <Col md="6" className="text-center">
              <h1>About</h1>
              <blockquote className="blockquote mt-4">
                <p>
                  We seek to simplify the use of IoT sensors and devices in production by eliminating repetitive tasks.
                  We are a small team located in Austria engaging in software consulting in IoT and related areas.
                </p>
                <p>
                  Feel free to contact us for more information and interesting engagements.
                </p>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </WorldMap>

      <Container className="mb-5">
        <Row className="row-cols-md-2">
          <Col md="6" className="mb-4">
            <CardInfo title="About Us" className="mt-n4">
              <p>We are a small team that …</p>
              <ul>
                <li>embraces IoT technologies,</li>
                <li>appreciate high-quality software,</li>
                <li>prefers economically feasible effectiveness and automation.</li>
              </ul>
            </CardInfo>
          </Col>

          <Col md="6" className="mb-4">
            <CardInfo title="Our Mission" className="mt-n4">
              <p>Make adoption of IoT technology simple.</p>
            </CardInfo>
          </Col>
        </Row>
      </Container>
    </section>
    
    <Callto />
  </Layout>
)

export default AboutPage
