import React from "react"
import { Card, CardTitle, CardBody, CardText } from 'reactstrap'

export default ({ title, icon, children, className }) => (
  <Card className={`${className} border-0 h-100 bg-transparent`}>
    <CardBody className="px-0">
      {/*<FontAwesomeIcon icon={icon} size="2x" className="text-primary" />*/}
      <CardTitle className="my-4">
        <h5 className="text-primary text-uppercase">{title}</h5>
      </CardTitle>
      <CardText>
        {children}
      </CardText>
    </CardBody>
  </Card>
)