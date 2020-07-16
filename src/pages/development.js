import React from "react"
import { Link } from 'gatsby'
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

const DECODER_API = "https://europe-west3-silent-octagon-281319.cloudfunctions.net/website-lambda-api"

class Decoder extends React.Component {
  state = {
    decoder: "elsys",
    payload: "",
    decoded: null
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  
    const decoder = this.state.decoder;

    // Remove optional hex prefix
    const payload = this.state.payload.replace('0x', '')
    
    console.info(`Decode payload '${payload}' using '${decoder}'`)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payload: payload })
    }

    fetch(`${DECODER_API}/decoders/${decoder}`, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ decoded: data }))
  }

  render() {
    return (
      <Card className="shadow border-0 my-5">
        <CardBody>
          <Row>
            <Col md="6">
              <Form onSubmit={this.handleSubmit} method="post">
                <FormGroup>
                  <Label size="lg">Select a sensor to decode:</Label>
                  <Input 
                    type="select" 
                    name="decoder" 
                    onChange={this.handleInputChange} 
                    className="custom-select custom-select-lg" 
                    bsSize="lg"
                    defaultValue={'elsys'}
                  >
                    <option value="adeunis-dc">Adeunius Dry Contacts</option>
                    <option value="elsys">Elsys</option>
                    <option value="elvaco-CMi4160">Elvaco CMi4160</option>
                    <option value="gavazzi-R56">Gavazzi R56 (in development)</option>
                    <option value="libelium-smart-parking-v1">Libelium Smart Parking (v1)</option>
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label size="lg">Insert your sensor payload:</Label>
                  <Input 
                    type="text" 
                    name="payload"
                    onChange={this.handleInputChange}
                    placeholder="0x0100e20229040027" 
                    bsSize="lg" 
                  />
                </FormGroup>
                <div className="text-right">
                  <Button type="submit" color="primary" size="lg" className="font-weight-bold">
                    <FaPlay className="mr-3" /> Decode
                  </Button>
                </div>
              </Form>
            </Col>

            <Col md="6" className="mt-5 mt-md-0">
              {this.state.decoded && <PrettyPrintJson data={this.state.decoded} />}
              {!this.state.decoded && <>
                <h4 className="my-2">Getting started</h4>
                
                <p>
                  Select a sensor and the payload you want to decode. You can 
                  also try out one of the following examples:
                </p>
                
                <ul className="mt-2">
                  <li>Adeunis Dry Contacts: <code>0x1020900143140700020000</code></li>
                  <li>Elsys: <code>0x0100CD021E07005F</code></li>
                  <li>Elvaco CMi4160: <code>0x1E0403A00000000413FF000000022BFF00023BFF00025AA000025EA000ABCD0A010000FF00010F01FD17FF</code></li>
                  <li>Libelium Smart Parking v1: <code>0x00281515adef6b0ae300c5</code></li>
                </ul>
              </>}
              {/*<ListGroup>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  Temperature: <span className="badge badge-primary">22.6°C</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  Humidity: <span className="badge badge-primary">41%</span>
                </ListGroupItem>
                <ListGroupItem className="d-flex justify-content-between align-items-center">
                  Light: <span className="badge badge-primary">39 Lux</span>
                </ListGroupItem>
              </ListGroup>*/}
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}

const PrettyPrintJson = ({data}) => (
  <div className={`pre-scrollable ${data.status ? 'bg-decode-success' : 'bg-decode-danger'}`}>
    <pre>{JSON.stringify(data, null, 2) }</pre>
  </div>)

const DevelopmentPage = () => (
  <Layout className="bg-light">
    <SEO 
      title="Development"
      description="Test IoT sensor that are currently in development."
    />

    <header className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            <h1>Development</h1>
            <h2 className="text-muted lead mt-4">
              Test IoT sensors that are currently in development.
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="py-5 bg blob-right" id="payload-decoder">
      <Container>
        <Row>
          <Col md="5">
            <h6 className="text-uppercase text-muted">Work in Progress</h6>
            <h2 className="pb-4">Payload Decoder</h2>
            <p className="lead">
              Decode uplink payloads of your IoT platform in a human-readable and machine-interpretable format.
            </p>
            <p>Simply try out some of our decoders for free.</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Decoder />
          </Col>
        </Row>
        <Row className="justify-content-center text-md-center">
          <Col md="8">
            <p className="lead">
              Our battle-tested payload parser libraries are available in multiple programming languages such as Python, JavaScript, TypeScript, Java, Rust and Elixir.
            </p>
            <p>
              Feel free to <Link to="/contact/">contact us</Link> if you are interested in any of them.
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

    <section className="py-6 bg-white" id="downlink-generator">
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
              If you are interested on this, feel free to <Link to="/contact/">contact us</Link>.<br />
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
            <div className="py-5 my-5 rounded px-5 ml-n5 bg-primary bg circuit">
              <h1>Easily configure your sensor. Parse any payload.</h1>
            </div>
          </Col>
          <Col md="6">
            <div className="py-5 my-5 rounded px-5 mr-n5 bg-light text-dark">
              <h1>Get. Started. Now.</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <Callto />
  </Layout>
)

export default DevelopmentPage
