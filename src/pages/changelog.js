import React from "react"
import { Container, Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Callto from "../components/callto"

const ProductsPage = () => (
  <Layout className="bg-light">
    <SEO 
      title="Changelog"
      description="Recent updates for your IoT payloads"
    />

    <header className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            <h1>Changelog</h1>
            <h2 className="text-muted lead mt-4">
              Recent updates for your IoT payloads.
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="bg-white py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="8" className="text-center">
            <article className="py-5">
              <h4>Elvaco CMi4160</h4>
              <h6 className="text-muted font-weight-light mb-4">June 24, 2020</h6>
              <p>
                We have implemented the Elvaco CMi4160 sensor in most recent 
                version 1.0 and added the decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Adeunis Dry Contacts</h4>
              <h6 className="text-muted font-weight-light mb-4">May 11, 2020</h6>
              <p>
                We have implemented the Adeunis Dry Contacts sensor and added the 
                decoder to our payload collection.
              </p>
            </article>
            <article className="py-5 border-top">
              <h4>Elsys</h4>
              <h6 className="text-muted font-weight-light mb-4">April 20, 2020</h6>
              <p>
                The popular Elsys sensor has been added to our payload collection.
              </p>
            </article>
          </Col>
        </Row>
      </Container>
    </section>

    <Callto />
  </Layout>
)

export default ProductsPage