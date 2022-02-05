import React from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';




export default function AddPatient() {

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
    <Container fluid className='mb-3 p-3'> <h4 >Add Patient </h4></Container>
    

    <Container>
    <Form onSubmit={handleSubmit}>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="FirstName">
     
      <Form.Control type="text" placeholder=" Enter First Name" id="FirstName" name="FirstName"/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="LastName">
   
      <Form.Control type="email" placeholder="Enter Last Name" id="LastName"/>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>

    <Row>
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="email">
   
      <Form.Control type="email" placeholder="Enter Email" id="lastName"/>
    </Form.Group>
    </Col>
    
    <Col sm={4}><Form.Group className="mb-3" controlId="phno">
   
    <Form.Control type="number" placeholder=" Enter Phone no." id="phno"/>
  </Form.Group> </Col>
  <Col sm={4}></Col>
    </Row>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="age">
     
      <Form.Control type="number" placeholder=" Enter Age" id="age"/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="gender">
   
      <Form.Control type="text" placeholder="Enter Gender" id="lastName"/>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>
    <Row>
    <Col sm={8}>
  
    <Form.Group className="mb-3" controlId="address">
    
    <Form.Control as="textarea" rows={2} id="address"  placeholder="Enter Address"/>
  </Form.Group>
    </Col>
    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="symptoms">
    
    <Form.Control as="textarea" rows={2} id="symptoms"  placeholder="Enter Symptoms"/>
  </Form.Group>
    </Col>
    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="ward">
    
      <Form.Control type="text" placeholder="Enter Ward" id="ward"/>
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
