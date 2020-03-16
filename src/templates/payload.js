import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"

export default ({ data }) => {
  const payload = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={`${payload.frontmatter.payload}`}
        description={`${payload.excerpt}`}
      />

      <Container>
        <Row>
          <Col>
            <h1 className="display-4">{payload.frontmatter.payload}</h1>
            <div dangerouslySetInnerHTML={{ __html: payload.html }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        payload
      }
    }
  }
`