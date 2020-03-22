import React from "react"
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody, ListGroup, ListGroupItem } from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronCircleDown, faChevronCircleUp, faPlay } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Callto from "../components/callto"
import CardTargetGroup from "../components/card"
import anypayload from "../images/anypayload-icon.png"
import workInProgress from "../images/undraw_work_in_progress_uhmv.svg"
import blobShape from "../images/blob-shape.svg"

const ProductsPage = () => (
  <Layout className="bg-light">
    <SEO 
      title="Easily configure your IoT sensors. Parse any IoT payload."
      description="We offer a comprehensive collection of IoT payload parser libraries in Python, JavaScript, TypeScript, Elixir and Rust."
    />

    <header className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            <h1>Products</h1>
            <h2 className="text-muted lead mt-4">
              Easily configure your IoT sensors. Parse any IoT payload.
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="py-5">
      <Container>
        <Row>
          <Col md="5">
            <h6 className="text-uppercase text-muted">Work in Progress</h6>
            <h2 className="pb-4">Payload Parser</h2>
            <p className="lead">
              Decode uplink payloads of your IoT platform in a human-readable and machine-interpretable format.
            </p>
            <p>Try it out for free.</p>
          </Col>
          <Col>
            <img 
              alt="Background Illustration"
              src={blobShape} 
              className="position-absolute" 
              style={{top: -100, right: -150, opacity: 0.1}} 
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="shadow border-0 my-5">
              <CardBody>
                <Row>
                  <Col>
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
                          <FontAwesomeIcon icon={faPlay} className="mr-3" /> Decode
                        </Button>
                      </div>
                    </Form>
                  </Col>

                  <Col>
                    <ListGroup>
                      <ListGroupItem className="d-flex justify-content-between align-items-center">
                        Temperature: <span className="badge badge-primary">22.6°C</span>
                      </ListGroupItem>
                      <ListGroupItem className="d-flex justify-content-between align-items-center">
                        Humidity: <span className="badge badge-primary">41</span>
                      </ListGroupItem>
                      <ListGroupItem className="d-flex justify-content-between align-items-center">
                        Light: <span className="badge badge-primary">39</span>
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
              Our battle-tested payload parser libraries are available in multiple programming languages such as Python, JavaScript, TypeScript, Elixir, Java and Rust.
            </p>
            <p>
              Feel free to contact us if you are interested in any of them.
            </p>
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

    <section className="d-none">
      <Container>
        <Row>
          <Col md="6" className="py-5 border-right">
            <Row>
              <Col className="text-md-right">
                <CardTargetGroup icon={faChevronCircleDown} title="Downlink Generator">
                  Easily configure your sensors of choice by using our downlink generator. Use our intuitive UI or configure your 
                  sensors with our API.
                </CardTargetGroup>
              </Col>
            </Row>

            <Row className="justify-content-center align-items-center border-top pt-5">
              <Col xs="4" className="text-right">
                <h5 className="text-primary mt-3">Input</h5>
                <pre>
                  <code>
                  "Reboot": True<br />
                  "TempPer": True<br />
                  </code>
                </pre>
              </Col>
              <Col xs={{size: 2, offset: 1}}>
                <img src={anypayload} alt="anypayload technology" className="img-fluid rounded shadow" />
              </Col>
              <Col xs={{size: 4, offset: 1}}>
                <h5 className="text-primary mt-3">Output</h5>
                <pre>
                  <code>0x3E01FE</code>
                  <small className="text-muted d-block">– Elsys Dowlink Sample</small>
                </pre>
              </Col>
            </Row>
          </Col>

          <Col md="6" className="py-5">
            <Row>
              <Col>
                <CardTargetGroup icon={faChevronCircleUp} title="Payload Parser">
                  Decode uplink payloads of your IoT platform in a human-readable and machine-interpretable format.
                </CardTargetGroup>
              </Col>
            </Row>
            
            <Row className="justify-content-center align-items-center border-top pt-5">
              <Col xs="4" className="text-right">
                <h5 className="text-primary mt-3">Input</h5>
                <pre>
                  <code>0x0100e20229</code>
                  <small className="text-muted d-block">– Elsys Payload Sample</small>
                </pre>
              </Col>
              <Col xs={{size: 2, offset: 1}}>
                <img src={anypayload} alt="anypayload technology" className="img-fluid rounded shadow" />
              </Col>
              <Col xs={{size: 4, offset: 1}}>
                <h5 className="text-primary mt-3">Output</h5>
                <pre>
                  <code>
                  "temperature": 22.6<br />
                  "humidity": 41<br />
                  </code>
                </pre>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>

    <Callto />
  </Layout>
)

export default ProductsPage
