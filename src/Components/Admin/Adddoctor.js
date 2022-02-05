import React from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
export default function Adddoctor() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    
    <div>
    <Container fluid className='mb-3'> <h4 >Add Doctor </h4></Container>
    

    <Container>
    <Form onSubmit={handleSubmit}>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="firstName">
     
      <Form.Control type="text" placeholder=" Enter First Name" id="firstName"/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="lastName">
   
      <Form.Control type="email" placeholder="Enter Last Name" id="lastName"/>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>

    <Row>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="email">
   
      <Form.Control type="email" placeholder="Enter Email" id="lastName"/>
    </Form.Group>
    </Col>
    
    
  <Col sm={4}></Col>
    </Row>
    <Row>
    <Row>
    <Col sm={4}><Form.Group className="mb-3" controlId="phno">
   
    <Form.Control type="number" placeholder=" Enter Phone no." id="phno"/>
  </Form.Group> </Col>
  <Col sm={4}>
  <Form.Group className="mb-3" controlId="phno">
   
    <Form.Control type="number" placeholder=" Enter Phone no." id="phno"/>
  </Form.Group>
  </Col>
  <Col sm={4}></Col>
    </Row>
   
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="availibility">
     
      <Form.Control type="Date" placeholder=" Enter Availabilities" id="availability"/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    
    </Col>
    
    
    </Row>
    
    
    <Row>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="speciality">
    
      <Form.Control type="text" placeholder="Enter Speciality" id="speciality"/>
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
