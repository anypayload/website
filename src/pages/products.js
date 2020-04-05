import React from "react"
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody, ListGroup, ListGroupItem } from "reactstrap"
import { FaPlay } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Callto from "../components/callto"
import workInProgress from "../images/undraw_work_in_progress_uhmv.svg"
import logoPython from "../images/languages/Python.svg"
import logoJavaScript from "../images/languages/JavaScript.svg"
import logoTypeScript from "../images/languages/TypeScript.svg"
import logoElixir from "../images/languages/Elixir.png"
import logoJava from "../images/languages/Java.svg"
import logoRust from "../images/languages/Rust.svg"

const ProductsPage = () => (
  <Layout className="bg-light">
    <SEO 
      title="Easily configure your IoT sensors. Decode any IoT payload."
      description="We offer a comprehensive collection of IoT payload parser libraries in Python, JavaScript, TypeScript, Elixir and Rust."
    />

    <header className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            <h1>Products</h1>
            <h2 className="text-muted lead mt-4">
              Easily configure your IoT sensors. Decode any IoT payload.
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="py-5 bg blob-right">
      <Container className="">
        <Row>
          <Col md="5">
            <h6 className="text-uppercase text-muted">Work in Progress</h6>
            <h2 className="pb-4">Payload Decoder</h2>
            <p className="lead">
              Decode uplink payloads of your IoT platform in a human-readable and machine-interpretable format.
            </p>
            <p>Try it out for free.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="shadow border-0 my-5">
              <CardBody>
                <Row>
                  <Col md="6">
                    <Form>
                      <FormGroup>
                        <Label size="lg">Select a sensor to decode:</Label>
                        <Input type="select" className="custom-select custom-select-lg" bsSize="lg">
                          <option>Adeunius</option>
                          <option selected>Elsys</option>
                          <option>Sensoneo</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label size="lg">Insert your sensor payload:</Label>
                        <Input type="text" placeholder="0x0100e20229040027"  bsSize="lg" />
                      </FormGroup>
                      <div className="text-right">
                        <Button color="primary" size="lg" className="font-weight-bold">
                          <FaPlay className="mr-3" /> Decode
                        </Button>
                      </div>
                    </Form>
                  </Col>

                  <Col md="6" className="mt-5 mt-md-0">
                    <ListGroup>
                      <ListGroupItem className="d-flex justify-content-between align-items-center">
                        Temperature: <span className="badge badge-primary">22.6°C</span>
                      </ListGroupItem>
                      <ListGroupItem className="d-flex justify-content-between align-items-center">
                        Humidity: <span className="badge badge-primary">41%</span>
                      </ListGroupItem>
                      <ListGroupItem className="d-flex justify-content-between align-items-center">
                        Light: <span className="badge badge-primary">39%</span>
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center text-md-center">
          <Col md="8">
            <p className="lead">
              Our battle-tested payload parser libraries are available in multiple programming languages such as Python, JavaScript, TypeScript, Java, Rust and Elixir.
            </p>
            <p>
              Feel free to contact us if you are interested in any of them.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col xs="4" md="2">
            <img src={logoPython} alt="Python" className="img-fluid" />
          </Col>
          <Col xs="4" md="2">
            <img src={logoJavaScript} alt="JavaScript" className="img-fluid p-3 p-lg-5" />
          </Col>
          <Col xs="4" md="2">
            <img src={logoTypeScript} alt="TypeScript" className="img-fluid p-3 p-lg-5" />
          </Col>
          <Col xs="4" md="2">
            <img src={logoJava} alt="Java" className="img-fluid p-3 p-lg-5" />
          </Col>
          <Col xs="4" md="2">
            <img src={logoRust} alt="Rust" className="img-fluid p-2 p-lg-4" />
          </Col>
          <Col xs="4" md="2">
            <img src={logoElixir} alt="Elixir" className="img-fluid p-2 p-lg-4" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-6 bg-white">
      <Container>
        <Row>
          <Col md="5">
            <h6 className="text-uppercase text-muted">Work in Progress</h6>
            <h2 className="pb-4">Downlink Generator</h2>
            <p className="lead">
              Easily configure your sensors of choice by using our downlink generator. 
              Use either our intuitive UI or our API to configure your sensors.
            </p>
            <p>
              If you are interested on this, feel free to contact us.<br />
              We are happy to give you early access.
            </p>
          </Col>
          <Col>
            <img 
              alt="Work in progress"
              src={workInProgress} 
              className="img-fluid" 
            />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="text-white d-none">
      <Container>
        <Row>
          <Col md="6">
            <div class="py-5 my-5 rounded px-5 ml-n5 bg-primary bg circuit">
              <h1>Easily configure your sensor. Parse any payload.</h1>
            </div>
          </Col>
          <Col md="6">
            <div class="py-5 my-5 rounded px-5 mr-n5 bg-light text-dark">
              <h1>Get. Started. Now.</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Callto />
  </Layout>
)

export default ProductsPage
