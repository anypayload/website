import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { Container, Row, Col, Button, Card } from "reactstrap"
import { FaPlay } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Callto from "../components/callto"
import illustrationProf from "../images/undraw_professor_8lrt.svg"
import illustrationCircuit from "../images/undraw_circuit_sdmr.svg"
import Industries from "../components/industries"
import Newsletter from "../components/newsletter"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Production-ready payload decoder for your IoT application"
    />

    <section className="bg circuit">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md="10">
            <div className="py-5 mt-5 px-lg-7">
              <h1>Production-ready sensor payloads for your <span className="text-primary">IoT business</span></h1>
              <p className="lead mt-4">We help you to make adoption of IoT technology simple.</p>
              <Button to={`/products`} tag={Link} color="primary" size="lg" className="mt-4 text-white">
                <FaPlay className="me-3 mt-n1 fa-spin" />
                Get started
              </Button>
              <Button to={`/contact`} tag={Link} color="dark" size="lg" className="mt-4 ms-4">Contact us</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-5">
      <Container className="py-5">
        <Row>
          <Col md="7">
            <h2 className="text-primary fw-bold">We help you accelerate your IoT business</h2>
            <p className="lead my-4">
              Adopt any sensor and focus on your core business.
              We take care of providing tested uplink sensor decoders for your IoT platform.
            </p>
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
            <p className="fw-bold">
              We have tackled the problem and developed a solution to
              offer an inexpensive way to decode sensor information. Since we are
              aware of the plethora of IoT platforms and programming languages, we
              offer ready-to-use scripts in multiple programming languages targeting
              several IoT platforms.
            </p>
            <p className="mt-4">
              <Button to={`/products`} tag={Link} color="primary" className="text-white" size="lg">
                <FaPlay className="me-3 mt-n1 fa-spin" />
                Get started
              </Button>
            </p>
          </Col>
          <Col>
            <img src={illustrationCircuit} className="img-fluid my-4 my-md-0" alt="IoT Illustration" />
          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-5 position-relative">
      <div className="position-absolute bg dotted-white w-25 h-25 top-0 start-0" style={{ zIndex: -1 }}>
      </div>

      <Container className="py-5">
        <Row className="align-items-center">
          <Col lg="5" className="mb-5 mb-lg-0">
            <h2 className="text-primary fw-bold text-dark">Some of our <span className="text-primary">customers</span> who are successfully building upon our services</h2>
          </Col>

          <Col lg={{ size: 6, offset: 1 }}>
            <Row className="row-cols-2 g-5 align-items-center">
              <Col>
                <Card className="h-100 border-0">
                  <a href="https://www.wienenergie.at">
                    <GatsbyImage
                      image={data.wienEnergie.childImageSharp.gatsbyImageData}
                      className="border-0"
                      alt="WIEN ENERGIE GmbH"
                    />
                  </a>
                </Card>
              </Col>

              <Col>
                <Card className="h-100 border-0">
                  <a href="https://www.linzag.at">
                    <GatsbyImage
                      image={data.linzAG.childImageSharp.gatsbyImageData}
                      className="border-0"
                      alt="Linz AG"
                    />
                  </a>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-5">
      <Container className="py-5">
        <Row className="pb-5 align-items-center">
          <Col md="6">
            <h2 className="text-primary fw-bold">Industries</h2>
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

    <div className="bg-primary py-5">
      <Newsletter />
    </div>

    <Callto
      top="Interested in a specific payload?"
      bottom="Get a quote now."
      btn="Request quote"
    />

  </Layout >
)

export default IndexPage

export const query = graphql`
  query {
    wienEnergie: file(relativePath: { eq: "customers/wien_energie.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    linzAG: file(relativePath: { eq: "customers/linz_ag.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`