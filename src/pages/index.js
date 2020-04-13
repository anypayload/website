import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import { FaPlay } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Callto from "../components/callto"
import illustrationProf from "../images/undraw_professor_8lrt.svg"
import illustrationCircuit from "../images/undraw_circuit_sdmr.svg"
import illustrationWorld from "../images/undraw_connected_world_wuay.svg"
import Industries from "../components/industries"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Production-ready payload decoder and downlink generator for your IoT application"
    />

    <section className="text-white">
      <div className="bg-primary">
        <Container>
          <Row>
            <Col md="7">
              <div class="py-5 mt-5 bg circuit">
                <h1>Production-ready sensor payloads for your IoT business.</h1>
                <Button to={`/products`} tag={Link} color="secondary" size="lg" className="mt-4">Get started</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <svg className="mt-n75" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1cb2a9" fill-opacity="1" d="M0,224L120,240C240,256,480,288,720,298.7C960,309,1200,299,1320,293.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
    </section>

    <section className="py-5 border-bottom">
      <Container className="py-5">
        <Row>
          <Col md="7">
            <h2 className="text-primary font-weight-bold">We help you accelerate your IoT business</h2>
            <p className="lead my-4">
              Adopt any sensor and focus on your core business.
              We take care of providing tested uplink sensor decoders for your IoT platform.
            </p>
          </Col>
          <Col>
            <img src={illustrationCircuit} className="img-fluid position-md-absolute my-4 my-md-0" alt="IoT Illustration" />
          </Col>
        </Row>
        <Row>
          <Col md="8" lg="7">
            <p>Many companies recognize great potential in the digital 
              transformation of their processes and procedures. The 
              Internet of Things allows one to collect data 
              from “things” that were not possible until now. Novel 
              transmission technologies such as {' '}
              <abbr title="Long Range Wide Area Network">LoRaWAN</abbr> and 
              {' '}<abbr title="Narrowband Internet of Things">NB-IoT</abbr> enable data 
              from different devices, meters, levels or even air parameters 
              to be recorded inexpensively and continuously.
            </p>
            <p>
              A major difference to existing wireless technologies is the 
              extensive and energy-saving data transmission from LoRaWAN and 
              NB-IoT. To ensure these properties, communication must rely on 
              data packets that are as small as possible. So-called payloads 
              have established themselves here, i.e. information packets in 
              the form of hexadecimal strings. These hexadecimal strings are 
              not easy to decipher by humans and must therefore be translated 
              both into human-friendlier information, as well as into other 
              machine-readable formats for further processing.
            </p>
            <p className="font-weight-bold">
              We have tackled the problem and developed a solution to 
              offer an inexpensive way to decode sensor information. Since we are 
              aware of the plethora of IoT platforms and programming languages, we 
              offer ready-to-use scripts in multiple programming languages targeting 
              several IoT platforms. 
            </p>
            <p className="mt-4">
              <Button to={`/products`} tag={Link} color="primary" size="lg">
                <FaPlay className="mr-3 fa-spin" />
                Get started
              </Button>
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <Container className="d-none">
      <Row>
        <Col sm="5">
          <img src={illustrationWorld} className="img-fluid" alt="Illustration World" />
        </Col>
      </Row>
    </Container>

    <section className="py-5">
      <Container className="py-5">
        <Row className="pb-5 align-items-center">
          <Col md="6">
            <h2 className="text-primary font-weight-bold">Industries</h2>
            <p className="lead my-4">
              For startups, established organizations, hardware manufacturers or municipal utilities.
              We are happy to support you adopting IoT technology. 
            </p>
          </Col>
          <Col md={{ size: 4, offset: 1 }} className="d-none d-md-flex">
            <img src={illustrationProf} className="img-fluid" alt="Industries Illustration" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Industries />
          </Col>
        </Row>
      </Container>
    </section>
        
    <Callto
      top="Interested in a specific payload?"
      bottom="Get a quote now."
      btn="Request quote"
    />

  </Layout>
)

export default IndexPage
