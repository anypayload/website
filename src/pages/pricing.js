import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardHeader, CardFooter, Button } from "reactstrap"
import { FaCheck } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PricingPage = () => (
  <Layout className="bg-light">
    <SEO
      title="Pricing"
    />

    <header className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md="6" className="text-center">
            <h1>Pricing</h1>
            <h2 className="text-muted lead mt-4">
              Focus on your core business. We take care of your payloads.
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="mb-5 bg dotted">
      <Container fluid className="w-xl-75">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
          <Col className="mt-5 d-none">
            <PricingCard
              plan="Starter"
              className="border-0"
              description="Use for your personal projects"
              costs="Free"
              buttonText="Get started"
            >
              <ul className="list-unstyled">
                <li><FaCheck className="text-primary mr-2" /> Online Payload Parser</li>
                <li><FaCheck className="text-primary mr-2" /> Product News</li>
              </ul>
            </PricingCard>
          </Col>

          <Col className="mt-5">
            <PricingCard
              plan="Single"
              className="border-0"
              description="Single sensor payload decoder"
              costs="€ 395"
              costsPer="excl. VAT"
              buttonText="Get started"
            >
              <ul className="list-unstyled">
                <li><FaCheck className="text-primary mr-2" /> Source code for a single sensor payload decoder in a programming language of your choice</li>
              </ul>
            </PricingCard>
          </Col>

          <Col className="mt-5">
            <PricingCard
              plan="Bundle"
              className="shadow-lg border-primary"
              description="Five sensor payload decoders"
              costs="€ 1495"
              costsPer="excl. VAT"
              buttonText="Get started"
            >
              <ul className="list-unstyled">
                <li><FaCheck className="text-primary mr-2" /> Source code for five sensor payload decoders in a programming language of your choice</li>
              </ul>
            </PricingCard>
          </Col>

          <Col className="mt-5">
            <PricingCard
              plan="Enterprise"
              className="border-0"
              description="Boost productivity and iterate fast"
              costs="Contact us"
              buttonText="Contact us"
            >
              <ul className="list-unstyled">
                <li><FaCheck fixedWidth className="text-primary mr-2" /> Custom payload implementation</li>
                <li><FaCheck fixedWidth className="text-primary mr-2" /> Extensive documentation</li>
                <li><FaCheck fixedWidth className="text-primary mr-2" /> White-label solutions</li>
                <li><FaCheck fixedWidth className="text-primary mr-2" /> Consulting services</li>
              </ul>
            </PricingCard>
          </Col>
        </Row>

        <Row className="py-5">
          <Col className="mx-auto text-center" md="7">
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

const PricingCard = ({ className, plan, description, costs, costsPer, children, buttonText }) => (
  <Card className={`${className} shadow-sm h-100`}>
    <CardHeader className="bg-transparent border-0">
      <CardTitle className="text-center mt-2">
        <h4 className="font-weight-light">{plan}</h4>
        <h6 className="font-weight-normal text-muted mt-3 mb-4">{description}</h6>
      </CardTitle>
      <CardSubtitle className="border-top border-bottom lead text-center py-4 my-0">
        <h4>
          {costs}
          {costsPer && <small className="text-muted ml-2">{costsPer}</small>}
        </h4>
      </CardSubtitle>
    </CardHeader>
    <CardBody className="py-5">
      {children}
    </CardBody>
    <CardFooter className="bg-transparent border-0 mt-0 pt-0">
      <Button color={buttonText === 'Contact us' ? "dark" : "primary"} tag={Link} to="/contact/" block className="font-weight-bold">
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
)

export default PricingPage
