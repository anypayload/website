import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const PayloadIntegration = ({ payload }) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '1' }}
            onClick={() => { toggle('1'); }}
          >
            Python
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={{ active: activeTab === '2' }}
            onClick={() => { toggle('2'); }}
          >
            JavaScript
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col>
              <pre className="w-100 p-3">
                <code className="">
                  from anypayload.elsys import decode<br /><br />

                  # Provide your input here ...<br />
                  hex = "{payload}"<br /><br />
                  # ... decode ...<br />
                  decoded = decode(hex)<br /><br />
                  # ... and use the data:<br />
                  assert(decoded['Temperature'] == 22.6)<br />
                  assert(decoded['Humidity'] == 41)
                </code>
              </pre>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>
                <pre className="w-100 p-3">
                <code className="">
                  //new Decoder.Elsys()<br /><br />

                  // Provide your input here ...<br />
                  hex = "{payload}"<br /><br />
                  // ... decode ...<br />
                  let decoded = decode(hex)<br /><br />
                  // ... and use the data:<br />
                  console.log(decoded['Temperature'] == 22.6<br />
                  console.log(decoded['Humidity'] == 41)
                </code>
              </pre>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default PayloadIntegration;
