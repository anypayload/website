import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Callto from "../components/callto"

const Payload = ({ data }) => {
  const content = data.markdownRemark
  const title = content.frontmatter.title
  const sensor = content.frontmatter.sensor
  const manufacturer = content.frontmatter.manufacturer
  const manufacturerWeb = content.frontmatter.manufacturer_web
  const useCases = content.frontmatter.use_cases

  return (
    <Layout className="bg-light">
      <SEO
        title={`${title} Payload Decoder`}
        description={`Production-ready sensor payload decoder ${title}`}
      />

      <header className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-left">
              <h1>{`${title}`}</h1>
              <h2 className="text-muted lead mt-4">
                {`Production-ready sensor payload decoder ${title}`}
              </h2>
            </Col>
          </Row>
        </Container>
      </header>

      <section className="bg-white py-5">
        <Container>
          <Row className="justify-content-between">
            <Col md="8">
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            </Col>
            <Col md="3" className="text-md-right mt-4 mt-md-0">
              <h6 className="text-uppercase">Manufacturer</h6>
              {renderManufacturer(manufacturer, manufacturerWeb)}

              <h6 className="text-uppercase mt-4">Sensor</h6>
              <span>{sensor}</span>

              <h6 className="text-uppercase mt-4">Use Cases</h6>
              {useCases.map(useCase => <span className="badge bg-primary ms-1">{useCase}</span>)}
            </Col>
          </Row>
        </Container>
      </section>

      <Callto />

    </Layout>
  )
}

const renderManufacturer = (manufacturer, web) => {
  if (web) {
    return (
      <OutboundLink href={web}>
        {manufacturer}
      </OutboundLink>
    )
  }
  return <span>{manufacturer}</span>
}

export default Payload

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        sensor
        manufacturer
        manufacturer_web
        use_cases
      }
    }
  }
`