import React from "react"
import { Container, Row, Col } from "reactstrap"
import { faChevronCircleDown, faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Callto from "../components/callto"
import CardTargetGroup from "../components/card"
import anypayload from "../images/anypayload-icon.png"

const ProductsPage = () => (
  <Layout>
    <SEO 
      title="Easily configure your IoT sensor. Parse any IoT payload."
    />

    <section className="bg-primary text-white bg circuit">
      <Container>
        <Row>
          <Col md="6">
            <div class="py-5 my-5">
              <h1>Easily configure your sensor. Parse any payload.</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col md="6" className="py-5 border-right">
            <Row>
              <Col>
                <CardTargetGroup icon={faChevronCircleDown} title="Downlink Generator">
                  Easily configure your sensors of choice by using our downlink generator. Use our intuitive UI or configure your 
                  sensors with our API.
                </CardTargetGroup>
              </Col>
            </Row>

            <Row className="justify-content-center align-items-center">
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
            
            <Row className="justify-content-center align-items-center">
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
