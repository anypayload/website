import React from "react"
import { Link } from 'gatsby'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Card, CardBody } from "reactstrap"
import { FaPlay, FaTimes } from "react-icons/fa"
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
const DECODERS = {
  'adeunis-dc': {
    name: 'Adeunis Dry Contacts',
    payload: '0x1020900143140700020000'
  },
  'adeunis-field-test-device': {
    name: 'Adeunis Field Test Device',
    payload: '0xBF1B45159690005534502720200FC95207',
  },
  'axioma-qalcosonic-w1': {
    name: 'Axioma W1 Ultrasonic Water Meter',
    payload: '0x199B4262304E8B050060BF4162EAF20400C400C109C409C409a4098809C409C509C409C409C409C409C809C009C409',
    port: 100,
    api: '/decoders/axioma-qalcosonic-w1'
  },
  'bosch-parking-lot-sensor': {
    name: 'Bosch Parking Lot Sensor',
    payload: '0x00FE',
    port: 2,
  },
  'cayenne-lpp': {
    name: 'Cayenne LPP',
    payload: '0x6701106700FF',
    port: 2
  },
  'decentlab-DL-SHT35': {
    name: 'Decentlab DL-SHT35',
    payload: '0x02030e000364a079b10c60'
  },
  'diehl-HRL-C-G3': {
    name: 'Diehl HRLc G3',
    payload: '0x33120000004078000000E00000A700004000008081470000110000000000000000000000000000DCCCC600F9FFEB00000000D3'
  },
  'dragino-LHT65': {
    name: 'Dragino LHT65',
    payload: '0x00000000000000003cff41'
  },
  'dragino-LT22222-L': {
    name: 'Dragino LT22222-L',
    payload: '0x00000000000000003cff41'
  },
  'elsys': {
    name: 'Elsys',
    payload: '0x0100CD021E07005F',
  },
  'elvaco-CMi4110': {
    name: 'Elvaco CMi4110',
    payload: '0x000c06010000000c14010000000b2b0100000b3b0100000a5a01000a5e01000c781234567802fd170000',
  },
  'elvaco-CMi4140': {
    name: 'Elvaco CMi4140',
    payload: '0x150400000000000411401f0000022a0000023b000002599e08025d9e080c785920298602fd170001',
    api: '/decoders/elvaco-CMi4140'
  },
  'elvaco-CMi4160': {
    name: 'Elvaco CMi4160',
    payload: '0x1E0403A00000000413FF000000022BFF00023BFF00025AA000025EA000ABCD0A010000FF00010F01FD17FF',
  },
  'elvaco-CMi4180': {
    name: 'Elvaco CMi4180',
    payload: '0x340413d90800004413d9080000840113d9080000f4011300000000046d0024a6293c780000000002fd170000',
  },
  'emz-slx-1307': {
    name: 'EMZ SLX-1307',
    payload: '0x43303A31353233',
  },
  'gavazzi': {
    name: 'Gavazzi',
    payload: '0x01200A000000000F000000',
  },
  'gavazzi-R56': {
    name: 'Gavazzi R56',
    payload: '0x801122334411F400011122334401111122334411223344111122',
  },
  'imbuildings': {
    name: 'IMBuildings',
    payload: '0x02060004a30b00f0d40e0001000000000020000d000a6a'
  },
  'libelium-smart-parking-v1': {
    name: 'Libelium Smart Parking v1',
    payload: '0x00281515adef6b0ae300c5',
  },
  'LoRa-EC': {
    name: 'LoRa-EC',
    payload: 'f26162636465666768696a6b6c6d6e6f707878e06100150004160000093a',
  },
  'milesight-AM300': {
    name: 'Milesight AM300',
    payload: '0367EE0004687C05000106CB02077DA803087D2500097366270A7D04000B7D20000C7D3000'
  },
  'milesight-EM500': {
    name: 'Milesight EM500',
    payload: '0x01756403671001046871057d670406736827'
  },
  'nas-CM3021': {
    name: 'NAS CM3021',
    payload: '0x013000ff1110004f0701000000000000',
    port: 24,
  },
  'pni-placepod': {
    name: 'PNI PlacePod Vehicle Detection',
    payload: '0x156601',
  },
  'senseair-explora-co2': {
    name: 'Senseair Explora CO2',
    payload: '0x3E441D021B',
    port: 2
  },
  'sensoneo-single-sensor': {
    name: 'Sensoneo Single Sensor',
    payload: '0xffff22b262d090700105050505701b0075',
  },
  'tabs-healthy-home': {
    name: 'Tabs Healthy Home Sensor',
    payload: '0xFFCA250A0A000F00',
    port: 103
  },
  'teneo-CO2-stoplicht': {
    name: 'Teneo CO2 Stoplicht',
    payload: '0x0F000001533B0753114D',
    port: 1
  },
  'ursalink-AM100': {
    name: 'Ursalink AM100/AM102 series',
    payload: '0x0367fc00046849',
  }
}

class Decoder extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      decoder: "elsys",
      payload: "",
      port: null,
      api: null,
      decoded: null,
      loading: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    if (name === 'decoder') {
      var decoder = DECODERS[value]
      this.setState({
        port: decoder.port,
        api: decoder.api
      })
    }

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
    const api = this.state.api || `${DECODER_API}/decoders/${decoder}`

    console.info(`Decode payload '${payload}' using '${decoder}'`)

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ payload: payload, port: port })
    }



    fetch(api, requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ decoded: data, loading: false }))
      .catch(error => this.setState({ loading: false }))
  }

  render() {
    const { loading, decoder, payload, port } = this.state

    return (
      <Card className="shadow border-0 my-5">
        <CardBody>
          <Row>
            <Col md="6">
              <Form onSubmit={this.handleSubmit} method="post">
                <h4 className="mt-1 mb-3">Decoding</h4>
                <p>
                  Select a sensor and the payload you want to decode.
                </p>
                <FormGroup className="mb-3">
                  <Label size="lg">Select a sensor to decode:</Label>
                  <Input
                    type="select"
                    name="decoder"
                    value={decoder}
                    onChange={this.handleChange}
                    className="form-select form-select-lg"
                    bsSize="lg"
                    disabled={loading}
                  >
                    {Object.entries(DECODERS).map(([key, value]) => (
                      <option value={key} key={key}>{value.name}</option>
                    ))}
                  </Input>
                </FormGroup>
                <Row className="mb-3">
                  <Col>
                    <FormGroup>
                      <Label size="lg">Insert your sensor payload:</Label>
                      <Input
                        type="text"
                        name="payload"
                        value={payload}
                        onChange={this.handleChange}
                        placeholder="0x0100e20229040027"
                        bsSize="lg"
                        disabled={loading}
                      />
                    </FormGroup>
                  </Col>
                  {DECODERS[decoder].port && <Col md={3}>
                    <FormGroup>
                      <Label size="lg">Port:</Label>
                      <Input
                        type="text"
                        name="port"
                        value={port}
                        onChange={this.handleChange}
                        placeholder="1"
                        bsSize="lg"
                        disabled={loading}
                      />
                    </FormGroup>
                  </Col>}
                </Row>
                <div className="text-right">
                  <Button type="submit" color="primary" size="lg" block className="fw-bold w-100 text-white" disabled={loading}>
                    <FaPlay className={`me-3 ${loading ? 'fa-spin' : ''}`} /> Decode
                  </Button>
                </div>
              </Form>
            </Col>

            <Col md="6" className="mt-5 mt-md-0">
              {this.state.decoded &&
                <div className={`pre-scrollable rounded h-100 ${this.state.decoded.status ? 'bg-decode-success' : 'bg-decode-danger'}`}>
                  <Button
                    type="button"
                    color="transparent"
                    className="float-end"
                    onClick={() => this.setState({ decoded: null })}
                  >
                    <FaTimes />
                  </Button>
                  <pre className="p-2">{JSON.stringify(this.state.decoded, null, 2)}</pre>
                </div>
              }
              {!this.state.decoded && <>
                <h4 className="mt-1 mb-3">Sample Payloads</h4>
                <p>
                  You can also try out our decoder with one of the sample payloads provided below.
                </p>
                <div className="mt-2 list-group">
                  {Object.entries(DECODERS).map(([key, value]) => (
                    <div key={key} className="list-group-item d-flex justify-content-between align-items-center overflow-auto">
                      <div>
                        <h6>{value.name}</h6>
                        <code>{value.payload}</code>
                      </div>
                      {value.port && <span className="badge bg-dark text-light">Port {value.port}</span>}
                    </div>
                  ))}
                </div>
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
            <h6 className="text-uppercase text-muted">Parse any IoT Payload</h6>
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
        <Row className="justify-content-center align-items-center gx-5">
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
            <div className="py-5 my-5 rounded px-5 ms-n5 bg-primary bg circuit">
              <h1>Easily configure your sensor. Parse any payload.</h1>
            </div>
          </Col>
          <Col md="6">
            <div className="py-5 my-5 rounded px-5 me-n5 bg-light text-dark">
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
