import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardHeader, CardFooter, Button } from "reactstrap"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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
              Focus on your core business, we do the rest.
            </h2>
          </Col>
        </Row>
      </Container>
    </header>

    <section className="mb-5">
      <Container fluid className="w-xl-75">
        <Row className="row-cols-1 row-cols-sm-2 row-cols-xl-4">
          <Col className="mt-5">
            <PricingCard 
              plan="Starter" 
              className="border-0"
              description="Use for your personal projects"
              costs="Free"
              buttonText="Get started"
            >
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheck} fixedWidth className="text-primary mr-2" /> Online Payload Parser</li>
                <li><FontAwesomeIcon icon={faCheck} fixedWidth className="text-primary mr-2" /> News and Updates</li>
              </ul>
            </PricingCard>
          </Col>

          <Col className="mt-5">
            <PricingCard 
              plan="Basic" 
              className="border-0"
              description="Adopt our IoT payloads quickly"
              costs="€ 249"
              costsPer="/ Payload"
              buttonText="Get started"
            >
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheck} fixedWidth className="text-primary mr-2" /> Everything included in Solo</li>
                <li><FontAwesomeIcon icon={faCheck} fixedWidth className="text-primary mr-2" /> Source code for a single payload</li>
              </ul>
            </PricingCard>
          </Col>

          <Col className="mt-5">
            <PricingCard 
              plan="Pro" 
              className="shadow-lg border-primary"
              description="Simplify managing your sensors"
              costs="€ 599"
              costsPer="/ Year"
              buttonText="Get started"
            >
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheck} fixedWidth className="text-primary mr-2" /> Everything included in Basic</li>
                <li><FontAwesomeIcon icon={faCheck} fixedWidth className="text-primary mr-2" /> Online Downlink-Generator</li>
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
                <li><FontAwesomeIcon icon={faCheck} fixedWidth className="text-primary mr-2" /> Custom payload implementation</li>
                <li><FontAwesomeIcon icon={faCheck} fixedWidth className="text-primary mr-2" /> Extensive documentation</li>
                <li><FontAwesomeIcon icon={faCheck} fixedWidth className="text-primary mr-2" /> White-label solutions</li>
              </ul>
            </PricingCard>
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
      <Button color={buttonText === 'Contact us' ? "dark" : "primary"} tag={Link} to="/start" block className="font-weight-bold">
        {buttonText}
      </Button>
    </CardFooter>
  </Card>
)

export default PricingPage
