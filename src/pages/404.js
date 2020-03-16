import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "reactstrap"

const NotFoundPage = () => (
  <Layout>
    <SEO 
      title="The page you are looking for cannot be found" 
    />

    <section className="bg-primary text-light">
    <Container>
      <Row>
        <Col className="justify-content-center align-items-center text-center py-5 my-md-5">
          <h1>Sorry.</h1>
          <p className="h5">The page you are looking for cannot be found.</p>
        </Col>
      </Row>
    </Container>
    </section>
  </Layout>
)

export default NotFoundPage
