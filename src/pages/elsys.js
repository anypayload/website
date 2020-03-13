import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card, CardBody, CardTitle, Button, CardText, ListGroup, ListGroupItem, Form, FormGroup, Label, Input, CardHeader, InputGroupAddon, InputGroup, CardFooter } from "reactstrap"
import PayloadIntegration from "../components/payload-integration"

const StepCard = ({title, content}) => (
  <Card className="shadow-sm border-0" body>
    <CardTitle className="font-weight-bold h4 mt-n5">
      <span className="badge badge-pill badge-primary" style={{padding: "0.75rem"}}>
      {title}
      </span>
    </CardTitle>
    <CardText>
      {content}
    </CardText>
  </Card>
)

const ElsysPage = () => {
  const [payload, setPayload] = useState("test0100e202290400270506060308070d62");

  // const toggle = () => setDropdownOpen(prevState => !prevState);


  return (
    <Layout>
      <SEO title="Payloads" />

      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col>
              <h6 className="text-muted">Payloads</h6>
              <h1>Elsys</h1>
            </Col>
          </Row>
        </Container>
      </section>

      <section class="py-5">
        <Container>
          <Row>
            <Col md="8">
              <Card>
                <CardHeader>Elsys Payload Decoder</CardHeader>
                <CardBody>
                  <Form inline>
                    <FormGroup>
                      <InputGroup>
                        <Input 
                          type="text" 
                          name="payload" 
                          id="payload" 
                          placeholder="Your hex payload" 
                          value={payload} 
                          onChange={e => setPayload(e.target.value)} 
                        />
                        <InputGroupAddon addonType="append">
                          <Button>Convert</Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </FormGroup>
                  </Form>

                  <div className="bg-light p-5 mt-2">
                    <p>Temperature: 10</p>
                  </div>
                </CardBody>
              </Card>

              <Card className="mt-4">
                <CardHeader>How to use it</CardHeader>
                <CardBody>
                  <PayloadIntegration payload={payload} />
                </CardBody>
              </Card>
            </Col>

            <Col md="4">
              <Card>
                <CardHeader>Buy now</CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup>
                      <Label for="exampleSelectMulti">Select Language</Label>
                      <Input type="select" name="selectMulti" id="exampleSelectMulti">
                        <option>Python</option>
                        <option>JavaScript</option>
                        <option>Java</option>
                      </Input>
                    </FormGroup>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="btn-block">Buy Source Code</Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default ElsysPage
