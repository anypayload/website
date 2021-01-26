import React from "react"
import { Link } from 'gatsby'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from "reactstrap"
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
import Newsletter from "../components/newsletter"

const DECODER_API = "https://europe-west3-silent-octagon-281319.cloudfunctions.net/website-lambda-api"

class Decoder extends React.Component {
  state = {
    decoder: "elsys",
    payload: "",
    port: 1,
    decoded: null,
    loading: false
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

    this.setState({ loading: true })
  
    const decoder = this.state.decoder

    // Remove optional hex prefix
    const payload = this.state.payload.replace('0x', '')
    const port = parseInt(this.state.port)
    
    console.info(`Decode payload '${payload}' using '${decoder}'`)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payload: payload, port: port })
    }

    fetch(`${DECODER_API}/decoders/${decoder}`, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ decoded: data, loading: false }))
      .catch(error => this.setState({ loading: false }))
  }

  render() {
    const { loading } = this.state

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
                    disabled={loading}
                  >
                    <option value="adeunis-dc">Adeunius Dry Contacts</option>
                    <option value="bosch-parking-lot-sensor">Bosch Parking Lot Sensor</option>
                    <option value="cayenne-lpp">Cayenne LPP</option>
                    <option value="elsys">Elsys</option>
                    <option value="elvaco-CMi4160">Elvaco CMi4160</option>
                    <option value="emz-slx-1307">EMZ SLX-1307</option>
                    <option value="gavazzi">Gavazzi</option>
                    <option value="gavazzi-R56">Gavazzi R56</option>
                    <option value="pni-placepod">PNI PlacePod Vehicle Detection Sensor</option>
                    <option value="senseair-explora-co2">Senseair Explora CO2</option>
                    <option value="sensoneo-single-sensor">Sensoneo Single Sensor</option>
                    <option value="tabs-healthy-home">Tabs Healthy Home Sensor</option>
                    <option value="teneo-CO2-stoplicht">Teneo CO2 Stoplicht</option>
                    <option value="libelium-smart-parking-v1">Libelium Smart Parking V1</option>
                    <option value="ursalink-AM100">Ursalink AM100/AM102 series</option>
                  </Input>
                </FormGroup>
                <Row>
                  <Col md={9}>
                    <FormGroup>
                      <Label size="lg">Insert your sensor payload:</Label>
                      <Input 
                        type="text" 
                        name="payload"
                        onChange={this.handleInputChange}
                        placeholder="0x0100e20229040027" 
                        bsSize="lg" 
                        disabled={loading}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label size="lg">Port:</Label>
                      <Input 
                        type="text" 
                        name="port"
                        onChange={this.handleInputChange}
                        placeholder="1" 
                        bsSize="lg" 
                        disabled={loading}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <div className="text-right">
                  <Button type="submit" color="primary" size="lg" className="font-weight-bold" disabled={loading}>
                    <FaPlay className={`mr-3 ${loading ? 'fa-spin' : ''}`} /> Decode
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
                  <li>Bosch Parking Lot Sensor: <code>0x00FE</code></li>
                  <li>Cayenne LPP: <code>0x6701106700FF</code> with Port <code>2</code></li>
                  <li>Elsys: <code>0x0100CD021E07005F</code></li>
                  <li>Elvaco CMi4160: <code>0x1E0403A00000000413FF000000022BFF00023BFF00025AA000025EA000ABCD0A010000FF00010F01FD17FF</code></li>
                  <li>EMZ SLX-1307: <code>0x43303A31353233</code></li>
                  <li>Gavazzi: <code>0x01200A000000000F000000</code></li>
                  <li>Gavazzi R56: <code>0x801122334411F400011122334401111122334411223344111122</code></li>
                  <li>Libelium Smart Parking v1: <code>0x00281515adef6b0ae300c5</code></li>
                  <li>PNI PlacePod Vehicle Detection: <code>0x156601</code></li>
                  <li>Senseair Explora CO<sub>2</sub>: <code>0x12A02300FF</code> with Port <code>2</code></li>
                  <li>Sensoneo Single Sensor: <code>0xffff22b262d090700105050505701b0075</code></li>
                  <li>Tabs Healthy Home Sensor: <code>0xFFCA250A0A000F00</code> with Port <code>103</code></li>
                  <li>Teneo CO2 Stoplicht: <code>0x0F000001533B0753114D</code> with Port <code>1</code></li>
                  <li>Ursalink AM100/AM102 series: <code>0x0367fc00046849</code></li>
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

    <section className="pt-5 bg dotted" id="payload-decoder">
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

      <div className="bg-primary py-5">
        <Newsletter />
      </div>
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

export default ProductsPage
