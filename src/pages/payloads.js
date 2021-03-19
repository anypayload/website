import React from "react"
import { graphql, Link } from "gatsby"
import { FaPlay } from "react-icons/fa"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Payloads = ({ data }) => (
  <Layout>
    <SEO title="Payloads" />

    <header className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h1>Sensor Payloads</h1>
            <h2 className="text-muted lead mt-4">
              {`Production-ready sensor payloads for your IoT platform`}
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="bg-light pt-5">
      <Container>
        <Row>
          <Col>
            <table className="table text-center table-hover table-borderless">
              <thead>
                <th>
                  Manufacturer
                </th>
                <th>
                  Sensor
                </th>
                <th>{ }</th>
              </thead>
              <tbody>
                {data.allMarkdownRemark.edges.map(edge =>
                  <tr>
                    <td>{edge.node.frontmatter.manufacturer}</td>
                    <td>{edge.node.frontmatter.sensor}</td>
                    <td>
                      <Link to={edge.node.fields.slug}>
                        <FaPlay className="mr-3" /> More
                    </Link>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Col>
        </Row>

        <Row className="py-5">
          <Col className="mx-auto text-center" md="7">
            <p className="lead">
              This list is not complete and is just an excerpt yet.
              We offer a lot of other sensor payload decoders as well.
              Furthermore, we are happy to help in integrating your sensors of
              choice on request.
            </p>
            <p>More payload decoders coming soon.</p>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default Payloads;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___manufacturer], order: ASC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            manufacturer
            sensor
          }
          excerpt
        }
      }
    }
  }
`