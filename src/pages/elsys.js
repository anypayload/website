import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input, CardHeader, InputGroupAddon, InputGroup, CardFooter } from "reactstrap"

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
