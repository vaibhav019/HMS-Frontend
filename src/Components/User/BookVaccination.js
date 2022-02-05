import React from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
export default function BookVaccination() {
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
    <Container fluid className='mb-3 p-3'> <h4 >Book Vaccination </h4></Container>
    

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
    
    <Form.Control as="textarea" rows={1} id="address"  placeholder="Enter Address"/>
  </Form.Group>
    </Col>
    <Col sm={4}></Col>
    </Row>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="adharno">
     
      <Form.Control type="text" placeholder=" Enter Adhar No." id="adharno"/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="dob">
   
      <Form.Control type="Date" placeholder="Enter Date Of Birth" id="dob"/>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>
    <Row>
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="slot">
    
    <Form.Select aria-label="Select Slot">
    <option>Select Slot</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
    </Form.Group>
    </Col>
    <Col sm={4}><Form.Group className="mb-3" controlId="slot">
    
    <Form.Select aria-label="Select Camp Location">
    <option>Select Location</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </Form.Select>
    </Form.Group></Col>
    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col>  <Button type="submit" variant="primary">Submit</Button>{' '} <Button type="reset" variant="primary">Reset</Button>{' '}</Col>
    <Col>  </Col>
    </Row>

  </Form>
    </Container>
    
    
    </div>
  )
}
