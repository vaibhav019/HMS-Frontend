import React from 'react'
  import { Container ,Row,Col,Form,Button} from 'react-bootstrap'

export default function Feedback() {
  return (
    <div>
      <h4>Feedback form</h4>
      <Container>
      <Form>
      <Row>
      <Col sm={8}>
    
      <Form.Group className="mb-3" controlId="feedback">
      
      <Form.Control as="textarea" rows={3} id="feedback"  placeholder="Enter feedback"/>
    </Form.Group>
      </Col>
      <Col sm={4}></Col>
      </Row>
      <Row>
      <Col sm={8}>
    
      <Form.Group className="mb-3" controlId="rating">
   
    <Form.Control type="number" placeholder=" Enter Rating Out of 5." id="rating"/>
  </Form.Group>
      </Col>
      <Col sm={4}></Col>
      </Row>
      <Row>
    <Col>  <Button type="submit" variant="primary">Submit</Button>{' '}<Button type="reset" variant="primary">Reset</Button>{' '}</Col>
    <Col></Col>
    </Row>
      </Form>
      </Container>
    </div>
  )
}
