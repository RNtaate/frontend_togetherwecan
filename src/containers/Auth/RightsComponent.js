import React from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const RightsComponent = () => {
  return (
    <div>
      <Card>
        <Card.Header as="h4" className="text-secondary" >Member's rights</Card.Header>
        <Card.Body>
          <Card.Text className="text-secondary">
          1. TOGETHER WE CAN will ensure the protection of the interests of the taxpayer in order to help him achieve his vision
          </Card.Text>

          <Card.Text className="text-secondary">
          2. TOGETHER WE CAN will develop tools to ensure the financial security of its resources.
          </Card.Text>

          <Card.Text className="text-secondary">
          3. TOGETHER WE CAN is committed to promoting the socio-economic development of its members.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default RightsComponent;
