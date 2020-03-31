import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Button } from "reactstrap"
import { FaCloud, FaMicrochip } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Callto from "../components/callto"
import CardTargetGroup from "../components/card"
import illustrationProf from "../images/undraw_professor_8lrt.svg"
import anypayload from "../images/anypayload-icon.png"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Production-ready and payload parser and downlink generator for your IoT application"
    />

    <section className="text-white">
      <div className="bg-primary">
        <Container>
          <Row>
            <Col md="7">
              <div class="py-5 my-5 bg circuit">
                <h1>Production-ready sensor payloads for your IoT application.</h1>
                <Button to={`/about`} tag={Link} color="secondary" size="lg" className="mt-4">Get started</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*<svg className="mt-n7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1cb2a9" fill-opacity="1" d="M0,288L60,266.7C120,245,240,203,360,197.3C480,192,600,224,720,240C840,256,960,256,1080,240C1200,224,1320,192,1380,176L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>*/}
    </section>

    <section className="py-5">
      <Container className="py-5">
        <Row className="align-items-center">
          <Col xl="6">
            <h2 className="text-primary">Sensor payloads for humans</h2>
            <p className="lead my-4">
              Your input is any IoT sensor payload.
              Your output is the interpreted data in human-readable format.
              Integrates seamlessly into any software or platform.
            </p>
          </Col>
          <Col>
            <Row className="justify-content-center align-items-center">
              <Col xs="4" className="text-right">
                <h5 className="text-primary mt-3">Input</h5>
                <pre>
                  <code>0x0100e20229</code>
                  <small className="text-muted d-block">– Elsys Payload Sample</small>
                </pre>
              </Col>
              <Col xs={{ size: 2, offset: 1 }}>
                <img src={anypayload} alt="anypayload technology" className="img-fluid rounded-circle p-1 shadow" />
              </Col>
              <Col xs={{ size: 4, offset: 1 }}>
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

    <Callto
      top="Interested in a specific payload?"
      bottom="Get a quote now."
      btn="Request quote"
    />

    <section className="py-5">
      <Container className="py-5">
        <Row className="pb-5 align-items-center">
          <Col md="6">
            <h2 className="text-primary font-weight-bold">Industries</h2>
            <p className="lead my-4">
              We help businesses accelerate building innovative IoT solutions.
            </p>
          </Col>
          <Col md={{ size: 4, offset: 1 }} className="d-none d-md-flex">
            <img src={illustrationProf} className="img-fluid" alt="Industries Illustration" />
          </Col>
        </Row>
        <Row>
          <Col md="6" className="mt-5">
            <CardTargetGroup icon={FaCloud} title="For Organizations adopting IoT">
              <p>
                Building IoT solutions is challenging, especially if you want to execute in a faster
                than ever changing environment. Our technology helps you to focus on your core product, 
                while we boost your productivity by unburdening you from recurring and work-intensive tasks.
              </p>
              <Button tag={Link} to="/industries/organizations" color="primary" outline className="stretched-link" size="sm">Learn more</Button>
            </CardTargetGroup>
          </Col>
          {/*<Col md="4" className="mt-5">
            <CardTargetGroup icon={faCloud} title="IoT platform providers">
              When building a successful IoT platform, many integrations have to
              be implemented. We have the technology that helps you to iterate fast
              in any programming language.
            </CardTargetGroup>
          </Col>*/}
          <Col md="6" className="mt-5">
            <CardTargetGroup icon={FaMicrochip} title="For Hardware Producers">
              <p>
                You are great in manufacturing hardware, but struggle to provide and implement
                high quality and developer friendly software in multiple languages, 
                which is crucial for broad adoption of your hardware?<br />
                We are happy to support you.
              </p>
              <Button tag={Link} to="/industries/hardware-producers" color="primary" outline className="stretched-link" size="sm">Learn more</Button>
            </CardTargetGroup>
          </Col>

          {/*<Col>
          Extra Seite:
          Our solutions
          - IoT platform provider ()
          - Sensor manufacturer (sensor image)
          - Corporates

          Leistungsspektrum/Workflow:
          1. Digitalisierung der Payload Dokumentation
          2. Prüfbare Protocols und Unittests
          3. dowlink encoder whitelabed on your website
          3. in any payload language
          4. deploy to github
          5. with automated tests
          </Col>*/}
        </Row>
      </Container>
    </section>

    <Callto />

    {/*<section className="py-5 bg-light">
      <Container>
        <Row>
          <Col md="7" className="mx-auto text-center">
            <h5>
              You want to integrate your sensor into your IoT platform and you are looking for a highly qualitative payload decoder?
            </h5>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center align-items-center text-center mt-5">
          <Col>
            <StepCard title="1" content="Select your sensor model to find your payload" />
          </Col>

          <Col>
            <StepCard title="2" content="Select your programming language of choice." />
          </Col>

          <Col>
            <StepCard title="3" content="Buy, download and integrate the payload in your platform." />
          </Col>
        </Row>
      </Container>      
    </section>

    <section>
      <Container>
        <Row>
          <Col>
            <div class="my-4 py-5">
              <h2>To be filled with useful content.</h2>
              <p>We need to fill this block with useful content.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <div className="border-top border-bottom py-4 bg-light">
      <Container>
        <Row className="align-items-center justify-content-center text-center mx-auto">
          <Col md="4" className="py-3" style={{background: `url(${map}) no-repeat center`}}>
            <p className="mono m-0 small">
              We help IoT innovators adopting IoT platforms by providing production-ready and tested 
              sensor payloads in programming languages of their choice.
            </p>
          </Col>
        </Row>
      </Container>
</div>*/}

  </Layout>
)

export default IndexPage
