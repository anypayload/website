import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card, CardBody, CardTitle, Button, CardText, ListGroup, ListGroupItem, Form, FormGroup, Label, Input } from "reactstrap"

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

const PayloadsPage = () => (
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
    <section class="py-5 my-5">
      <Container>
        <Row>
          <Col md="3">
            <ListGroup>
              <ListGroupItem className="active">
                <Link to="/elsys">Elsys</Link>
              </ListGroupItem>
              <ListGroupItem>
                Senseo
              </ListGroupItem>
              <ListGroupItem>
                Senseo
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="9">
            <p>Description ...</p>
            {/*<p>Work in progress, please contact us.</p>*/}

            <h2>Try it out.</h2>
            <Form inline>
              <FormGroup>
                <Input type="text" name="payload" id="exampleEmail" placeholder="0100e202290400270506060308070d62" />
                <Button>Convert</Button>
              </FormGroup>
            </Form>

            <div className="bg-light p-5 mt-2">
              <p>Temperature: 10</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default PayloadsPage
