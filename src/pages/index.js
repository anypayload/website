import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card, CardBody, CardTitle, Button, CardText, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap"
import Particles from 'react-particles-js'
import map from '../components/world-map/map.svg'

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

const particles = {
  "particles": {
      "number": {
          "value": 227,
          "density": {
              "enable": true,
              "value_area": 1025.908125981517
          }
      },
      "color": {
          "value": "#e91c63"
      },
      "shape": {
          "type": "circle",
          "stroke": {
              "width": 0,
              "color": "#000000"
          },
          "polygon": {
              "nb_sides": 5
          },
      },
      "opacity": {
          "value": 0.2,
          "random": false,
          "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
          }
      },
      "size": {
          "value": 3,
          "random": true,
          "anim": {
              "enable": false,
              "speed": 40,
              "size_min": 0.1,
              "sync": false
          }
      },
      "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#e91c63",
          "opacity": 0.2,
          "width": 1
      },
      "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
          }
      }
  },
  "interactivity": {
      "detect_on": "canvas",
      "events": {
          "onhover": {
              "enable": false,
              "mode": "repulse"
          },
          "onclick": {
              "enable": true,
              "mode": "push"
          },
          "resize": true
      },
      "modes": {
          "grab": {
              "distance": 400,
              "line_linked": {
                  "opacity": 1
              }
          },
          "bubble": {
              "distance": 400,
              "size": 40,
              "duration": 2,
              "opacity": 8,
              "speed": 3
          },
          "repulse": {
              "distance": 200,
              "duration": 0.4
          },
          "push": {
              "particles_nb": 4
          },
          "remove": {
              "particles_nb": 2
          }
      }
  },
  "retina_detect": true
};


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="pb-5 mb-5 position-relative h-100 w-100">
      <Particles 
        params={particles}
        className="position-absolute d-inline h-100 w-100"
      />

      <Container>
        <Row className="my-5 py-5">
          <Col md="7">
            <h1 class="h2 mt-5 pt-5">Production-ready sensor payloads for your IoT platform.</h1>
            <Button color="primary" size="lg" className="mt-3" outline>Get started</Button>
          </Col>
        </Row>
      </Container>
    </section>

    <section className="py-5 bg-light">
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
    </div>

  </Layout>
)

export default IndexPage
