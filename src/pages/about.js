import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import WorldMap from '../components/world-map'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Callto from '../components/callto'

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

          <Row className="mt-md-5 justify-content-center">
            <Col md="5" className="mt-4">
              <h6 className="text-uppercase text-primary">Our Mission</h6>
              <h3 className="pb-4">Make adoption of IoT technology simple.</h3>
            </Col>

            <Col md={{size: 5, offset: 1}} className="mt-4">
              <h6 className="text-uppercase text-primary">About Us</h6>
              <h3 className="pb-4">We are a small team of software engineers and product managers, embracing IoT technologies.</h3>
            </Col>
          </Row>
        </Container>
      </WorldMap>
    </section>
    
    <Callto />
  </Layout>
)

export default AboutPage
