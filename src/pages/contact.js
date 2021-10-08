import React from "react"
import { navigate } from "gatsby"
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Input } from "reactstrap"
import { FaLock, FaPhone, FaEnvelope } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: this.encode({
        'form-name': form.getAttribute("name"),
        ...this.state
      }),
    })
      .then(response => {
        console.log(`${JSON.stringify(response, null, 2)}`)
        navigate(form.getAttribute("action"))
      })
      .catch(error => {
        console.error(`error in submiting the form data:${error}`)
        alert('Sorry, we are not able to submit your message. Please try to contact us directly via email.')
      })
  }

  render() {
    return (
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
            <Row className="align-items-center gx-5">
              <Col lg="6">
                <Row>
                  <Col>
                    <h2 className="fw-bold">Let's discuss your IoT project</h2>
                    <p className="lead my-4">
                      We can help you to get your IoT project up and running quickly
                      from prototyping to production.
                    </p>
                  </Col>
                </Row>

                <Row className="my-4">
                  <Col>
                    <Button color="dark" className="d-block" outline block href="mailto:office@anypayload.com">
                      <FaEnvelope />
                      <div className="mt-1">office@anypayload.com</div>
                    </Button>
                  </Col>
                  <Col>
                    <Button color="dark" className="d-block" outline block href="tel:+436641455590">
                      <FaPhone />
                      <div className="mt-1">+43 664 14 555 90</div>
                    </Button>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <h5 className="mt-5 border-top pt-4">Address</h5>
                    <address className="fw-light">
                      Thomas Schmidleithner, BSc<br />
                      Grolzham 2D<br />
                      A-4680 Weibern<br />
                    </address>
                  </Col>
                </Row>
              </Col>

              <Col lg="6">
                <Card className="bg-white border-0 shadow p-md-3">
                  <CardBody>
                    <Form
                      name="contact"
                      netlify-honeypot="bot-field"
                      data-netlify="true"
                      action="/contact-success"
                      onSubmit={this.handleSubmit}>
                      <input type="hidden" name="bot-field" />
                      <Row form className="mb-3">
                        <Col>
                          <FormGroup>
                            <Input type="text" name="name" id="name" placeholder="Your name" onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form className="mb-3">
                        <Col>
                          <FormGroup>
                            <Input type="text" name="email" id="email" placeholder="Company email" onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form className="mb-3">
                        <Col>
                          <FormGroup>
                            <Input type="text" name="phone" id="phone" placeholder="Phone" onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form className="mb-3">
                        <Col>
                          <FormGroup>
                            <Input type="text" name="country" id="country" placeholder="Country" onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row form className="mb-3">
                        <Col>
                          <FormGroup>
                            <Input type="textarea" name="details" id="details" placeholder="Project details or questions" onChange={this.handleChange} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row className="mb-3">
                        <Col className="d-flex align-items-center">
                          <FaLock className="text-secondary h2 me-3" />
                          <p className="small mb-0">
                            On submitting the form, you agree that we are allowed to store
                            your data on our server for the purposes of contacting you.
                            Your data will of course be treated confidentially.
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Button color="primary" size="lg" block className="fw-bold text-white w-100">Get in touch</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
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
  }
}

export default ContactPage
