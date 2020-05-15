import React from "react"
import { navigate } from "gatsby"
import { Container, Row, Col, Card, CardBody,Button, Form, FormGroup, Input, Alert } from "reactstrap"
import { FaLock, FaPhone, FaEnvelope } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactSuccessPage = () => (

  <Layout className="bg-light">
    <SEO 
      title="Contact"
    />

    <header className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            <h1>Contact</h1>
            <h2 className="text-muted lead mt-4">
              Do not hesitate to contact us. We are happy to help.
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="py-5">
      <Container>
        <Row>
          <Col lg="6">
            <Row>
              <Col>
                <h2 className="font-weight-bold">Let's discuss your IoT project</h2>
                <p className="lead my-4">
                  We can help you to get your IoT project up and running quickly 
                  from prototyping to production.
                </p>
              </Col>
            </Row>

            <Row className="my-4">
              <Col>
                {/*<Button color="dark" outline block href="mailto:office@anypayload.com">*/}
                <Button color="dark" outline block href="mailto:info@serverless.at">
                  <FaEnvelope />
                  {/*<div>office@anypayload.com</div>*/}
                  <div className="mt-1">info@serverless.at</div>
                </Button>
              </Col>
              <Col>
                <Button color="dark" outline block href="tel:+436641455590">
                  <FaPhone />
                  <div className="mt-1">+43 664 14 555 90</div>
                </Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <h5 className="mt-5 border-top pt-4">Address</h5>
                <address className="font-weight-light">
                  Thomas Schmidleithner, BSc<br />
                  Meggenhofen 95/11<br />
                  A-4714 Meggenhofen<br />
                </address>
              </Col>
            </Row>
          </Col>

          <Col lg="6">
            <Alert color="success">
              Your contact request has been successfully sent. We will come 
              back to you shortly.
            </Alert>
          </Col>
        </Row>

        <Row className="py-5 my-md-5">
          <Col className="mx-auto text-center" md="9">
            <p className="lead">
              We are already working on a broader set of payload decoders. 
              Furthermore, we are currently aiming to simplify configurations of sensors over the air.
            </p>
            <p>More products coming soon.</p>
          </Col>
        </Row>

      </Container>
    </section>
  </Layout>
)

export default ContactSuccessPage;