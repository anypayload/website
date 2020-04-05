import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { FaLinkedin, FaXingSquare, FaGithub, FaStackOverflow } from 'react-icons/fa'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import WorldMap from '../components/world-map'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Callto from '../components/callto'

export default ({ data }) => (
  <Layout>
    <SEO 
      title="An Internet of Things initative from Austria" 
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
            <Col md="5" className="mt-4 text-center text-md-left">
              <h6 className="text-uppercase text-primary">Our Mission</h6>
              <h3 className="pb-4">Make adoption of IoT technology simple.</h3>
            </Col>

            <Col md={{size: 5, offset: 1}} className="mt-4 text-center text-md-left">
              <h6 className="text-uppercase text-primary">About Us</h6>
              <h3 className="pb-4">We are a small team of software engineers and product managers, embracing IoT technologies.</h3>
            </Col>
          </Row>
        </Container>
      </WorldMap>
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
            <Img 
              fluid={data.geraldImg.childImageSharp.fluid}
              className="w-25 rounded mb-4 shadow" 
              alt="Gerald Berger" 
            />
            <h6 className="text-uppercase text-primary">Gerald Berger</h6>
            <p className="py-3">
              PhD in Computer Science with a strong background in data engineering. Works
              for an Oxford University spin-out.
            </p>
            <ListGroup horizontal>
              <ListGroupItem title="LinkedIn" tag={OutboundLink} target="_blank" href="https://www.linkedin.com/in/gerald-berger-357942100/"><FaLinkedin /></ListGroupItem>
              <ListGroupItem title="Github" tag={OutboundLink} target="_blank" href="https://github.com/gbrgr"><FaGithub /></ListGroupItem>
            </ListGroup>
          </Col>

          <Col md="5" className="my-5">
            <Img 
              fluid={data.thomasImg.childImageSharp.fluid}
              className="w-25 rounded mb-4 shadow" 
              alt="Thomas Schmidleithner"
            />
            <h6 className="text-uppercase text-primary">Thomas Schmidleithner</h6>
            <p className="py-3">
              Full-Stack software engineer with a strong background in web-backend technologies.
              Studied Software Engineering at TU Wien and worked for several companies as a freelancer,
              especially in the energy and marketing industries.
            </p>
            <ListGroup horizontal>
              <ListGroupItem title="LinkedIn" tag={OutboundLink} target="_blank" href="https://www.linkedin.com/in/thomas-schmidleithner"><FaLinkedin /></ListGroupItem>
              <ListGroupItem title="Xing" tag={OutboundLink} target="_blank" href="https://www.xing.com/profile/Thomas_Schmidleithner"><FaXingSquare /></ListGroupItem>
              <ListGroupItem title="Github" tag={OutboundLink} target="_blank" href="https://github.com/tschmidleithner"><FaGithub /></ListGroupItem>
              <ListGroupItem title="Stack Overflow" tag={OutboundLink} target="_blank" href="https://stackoverflow.com/users/2571938/tom"><FaStackOverflow /></ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>

    <Callto />
  </Layout>
)

export const query = graphql`
  query {
    thomasImg: file(relativePath: { eq: "team/tschmidleithner.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 400, maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    geraldImg: file(relativePath: { eq: "team/gberger.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 400, maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
