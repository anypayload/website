import React from 'react'
import { Container, Row, Col, Card, CardTitle, CardBody } from 'reactstrap'
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
          <Row className="text-center align-items-center justify-content-center">
            <Col lg="7" className="my-5 py-md-5">
              <blockquote className="blockquote mt-5 font-weight-bold">
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

      <Container className="mb-5 mt-md-n5">
        <Row className="row-cols-md-2">
          <InfoCard title="About Us">
            <p>We are a small team that …</p>
            <ul>
              <li>embraces IoT technologies,</li>
              <li>appreciate high-quality software,</li>
              <li>prefers economically feasible effectiveness and automation.</li>
            </ul>
          </InfoCard>

          <InfoCard title="Our Mission">
            <p>Make adoption of IoT technology simple.</p>
          </InfoCard>
        </Row>
      </Container>
    </section>
    
    <Callto />
  </Layout>
)

const InfoCard = ({title, children}) => {
  return (
    <Col md="6" className="mb-4">
      <Card className="shadow-lg border-0 h-100">
        <CardBody>
          <CardTitle className="h4 mb-4">{title}</CardTitle>
          {children}
        </CardBody>
      </Card>
    </Col>
  );
}

export default AboutPage
