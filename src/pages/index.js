import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card, CardBody, CardTitle, Button, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import Callto from "../components/callto"
//import map from '../components/world-map/map.svg'

const StepCard = ({title, content}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
  <Card className="shadow-sm border-0" body>
    <CardTitle className="font-weight-bold h4 mt-n5">
      <span className="badge badge-pill bg-white border border-primary text-primary badge-primary" style={{padding: "0.75rem"}}>
      {title}
      </span>
    </CardTitle>
    <CardText>
      {content}

      {/*<Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>
          Dropdown
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Elsys</DropdownItem>
          <DropdownItem>Senseo</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
  </Dropdown>*/}
    </CardText>
  </Card>
  )
}

const IndexPage = () => (
  <Layout>
    <SEO 
      title="Production-ready and tested sensor IoT payloads"
    />

    <section class="bg-primary text-white bg circuit">
      <Container>
        <Row>
          <Col md="7">
            <div class="py-5 my-5">
              <h1>Production-ready sensor payloads for your IoT platform.</h1>
              <Button to={`/about`} tag={Link} color="secondary" size="lg" className="mt-4">Get started</Button>
            </div>
          </Col>
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
