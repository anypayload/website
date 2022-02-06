import React from 'react'
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { FaLinkedin, FaXingSquare, FaGithub, FaStackOverflow } from 'react-icons/fa'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import WorldMap from '../components/world-map'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Callto from '../components/callto'

const About = ({ data }) => (
  <Layout>
    <SEO
      title="An Internet of Things initiative from Austria"
      description="We seek to simplify the use of IoT sensors and devices in production by eliminating repetitive tasks.
      We are a small team located in Austria engaging in software consulting in IoT and related areas."
    />


    <header className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            <h1>About</h1>
            <h2 className="text-muted lead mt-4 lh-base">
              We seek to simplify the use of IoT sensors and devices in production by eliminating repetitive tasks.
              We are a small team located in Austria engaging in software consulting in IoT and related areas.
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section>
      <Container>
        <WorldMap className="py-md-5">
          <Row className="mt-md-5 justify-content-center">
            <Col md="4" className="mt-4 text-center text-md-start">
              <h6 className="text-uppercase text-primary">Our Mission</h6>
              <h3 className="pb-4">Make adoption of IoT technology simple.</h3>
            </Col>

            <Col md={{ size: 4, offset: 2 }} className="mt-4 text-center text-md-start">
              <h6 className="text-uppercase text-primary">About Us</h6>
              <h3 className="pb-4">We are a small team of software engineers embracing IoT technologies.</h3>
            </Col>
          </Row>
        </WorldMap>
      </Container>
    </section>

    <section className="py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="mb-md-5 text-md-center">Our Team</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="5" className="my-5">
            <GatsbyImage
              image={data.geraldImg.childImageSharp.gatsbyImageData}
              className="w-25 rounded mb-4 shadow"
              alt="Gerald Berger"
            />
            <h6 className="text-uppercase text-primary">Gerald</h6>
            <a href="mailto:gerald@anypayload.com" className="text-muted">gerald@anypayload.com</a>
            <ListGroup horizontal>
              <ListGroupItem title="LinkedIn" tag={OutboundLink} target="_blank" href="https://www.linkedin.com/in/gerald-berger-357942100/"><FaLinkedin /></ListGroupItem>
              <ListGroupItem title="Github" tag={OutboundLink} target="_blank" href="https://github.com/gbrgr"><FaGithub /></ListGroupItem>
            </ListGroup>
          </Col>

          <Col md="5" className="my-5">
            <GatsbyImage
              image={data.thomasImg.childImageSharp.gatsbyImageData}
              className="w-25 rounded mb-4 shadow"
              alt="Thomas Schmidleithner"
            />
            <h6 className="text-uppercase text-primary">Thomas</h6>
            <a href="mailto:thomas@anypayload.com" className="text-muted">thomas@anypayload.com</a>
            <ListGroup horizontal>
              <ListGroupItem title="LinkedIn" tag={OutboundLink} target="_blank" href="https://www.linkedin.com/in/thomas-schmidleithner"><FaLinkedin /></ListGroupItem>
              <ListGroupItem title="Xing" tag={OutboundLink} target="_blank" href="https://www.xing.com/profile/Thomas_Schmidleithner"><FaXingSquare /></ListGroupItem>
              <ListGroupItem title="Github" tag={OutboundLink} target="_blank" href="https://github.com/tschmidleithner"><FaGithub /></ListGroupItem>
              <ListGroupItem title="Stack Overflow" tag={OutboundLink} target="_blank" href="https://stackoverflow.com/users/2571938/tom"><FaStackOverflow /></ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
        <Row className="justify-content-center text-center my-md-5">
          <Col md="8">
            <h4>Feel free to contact us for more information and interesting engagements.</h4>
          </Col>
        </Row>
      </Container>
    </section>

    <Callto />
  </Layout>
)

export default About

export const query = graphql`
  query {
    thomasImg: file(relativePath: { eq: "team/tschmidleithner.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    geraldImg: file(relativePath: { eq: "team/gberger.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
