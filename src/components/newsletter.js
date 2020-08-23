import React from 'react'
import { Container, Row, Col, Input, Form, FormGroup, FormText, Button, Alert } from 'reactstrap'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { FaCheck, FaTimes } from 'react-icons/fa'

export default class Newsletter extends React.Component {

  state = {
    email: null,
    isLoading: false,
    result: null
  }

  _handleChange = e => {
      this.setState({
          [`${e.target.name}`]: e.target.value,
      })
  }

  _handleSubmit = async (e) => {
    e.preventDefault();
    const listFields = []
    const result = await addToMailchimp(this.state.email, listFields)
    console.log(result)
    this.setState({ result: result })
  }

  render() {
    const isLoading = this.state.isLoading;
    const result = this.state.result;

    return (
      <Container className="bg-white p-3 p-md-5 rounded shadow">
        <Row className="align-items-centers">
          <Col>
            <h3>We have got more coming...</h3>
            <p className="mt-4 mb-0">
              Want to hear from us when we add new payload decoders? 
              Sign up for free to our newsletter, and we will notify you upon new releases.
            </p>
          </Col>
          <Col lg="6" xl={{ size: 5, offset: 1 }} className="align-self-center mt-4 mt-lg-0">
            {result && result.result === "error" && 
            <Alert color="danger">
              <FaTimes className="mr-2" /> <span dangerouslySetInnerHTML={{__html: result.msg }}></span>
            </Alert>}

            {result && result.result === "success" && 
            <Alert color="success">
              <FaCheck className="mr-2" /> {result.msg}
            </Alert>}

            <Form inline onSubmit={this._handleSubmit} disabled={isLoading}>
              <FormGroup>
                <Input type="text" bsSize="lg" placeholder="Enter your email" name="email" onChange={this._handleChange} />
              </FormGroup>
              <Button size="lg" color="primary" className="ml-2" disabled={isLoading}>Subscribe</Button>
              <FormText color="muted">
                On submitting the form, you agree that we are allowed to store your data on our server for the purposes of contacting you.
              </FormText>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
