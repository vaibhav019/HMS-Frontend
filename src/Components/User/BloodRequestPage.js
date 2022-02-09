import React ,{useState,useEffect,Fragment}  from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

export default function BloodRequestPage() {
  const postdata=(data)=>{
    axios.post("https://localhost:44314/api/BloodRequest",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response);
       // toast.success("Details added Successfully");
       window.alert("Blood request have sent to admin")
        console.log("Your details added Successfully");
        window.location = "/userhome";
      },(error)=>{
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")
        window.alert("Data not sent something wrong")
      }
    );
  };
  const [Request,setRequestor]=useState({});
  const handleSubmit = (e) => {
    console.log(Request,"+++++++++++++++++++");
    postdata(Request);
    e.preventDefault();
    //const data = new FormData(e.currentTarget);
    // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };


  return (

    <div>
    <Container fluid className='mb-3 p-3'><h4>Application Form for Blood Receiver</h4></Container>
   
    <Container fluid className="ml-3" >
    <Form onSubmit={handleSubmit}>
   

  <Row>
  <Col sm={4}>
  <Form.Group className="mb-3" controlId="RequestorName">
   
    <Form.Control type="text" placeholder=" Enter Your Name" id="Name" name="RequestorName" onChange={(e)=>{
      setRequestor({...Request,RequestorName:e.target.value})
    }}/>
  </Form.Group>
  </Col>

  <Col sm={2}></Col>
 
  <Col sm={4}>
  <Form.Group className="mb-3" controlId="RequestorAge">
 
    <Form.Control type="number" placeholder="Enter Your Age" id="Age" name="RequestorAge" 
    onChange={(e)=>{
        setRequestor({...Request,RequestorAge:e.target.value})
    }}/>
  </Form.Group>
  </Col>
  </Row>
 
  <Row>
 <Col sm={4}>
  <Form.Group className="mb-3" controlId="RequestorGender">
  <Form.Select aria-label="Select Select" name="RequestorGender"  onChange={(e)=>{
    setRequestor({...Request,RequestorGender:e.target.value})
  }} >
  <option>Select Gender</option>
  <option value="1">Female</option>
  <option value="2">Male</option>
  <option value="3">Others</option>

</Form.Select>
  </Form.Group>
  </Col>


<Col sm={2}></Col>
 
<Col sm={4}>
  <Form.Group className="mb-3" controlId="RequestorPhoneNumber">
 
    <Form.Control type="number" placeholder="Enter Phone Number" id="Phone Number" name="RequestorPhoneNumber" 
    onChange={(e)=>{
        setRequestor({...Request,RequestorPhoneNumber:e.target.value})
    }}/>
  </Form.Group>
  </Col>
  </Row>

  <Row>
   <Col sm={4}>
  <Form.Group className="mb-3" controlId="Email">
 
    <Form.Control type="email" placeholder="Enter Email Id" id="Email" name="Email" 
    onChange={(e)=>{
        setRequestor({...Request,Email:e.target.value})
    }}/>
  </Form.Group>
  </Col>

  <Col sm={2}></Col>

<Col sm={4}><Form.Group className="mb-3" controlId="RequestorAddress">
 
  <Form.Control as="textarea" rows={2} id="Address"  placeholder="Enter Address" name="RequestorAddress" 
  onChange={(e)=>{
    setRequestor({...Request,RequestorAddress:e.target.value})
  }}/>
  </Form.Group> </Col>
  </Row>
 

 <Row>
 <Col sm={4}>
  <Form.Group className="mb-3" controlId="RequestedBloodtype">
  <Form.Select aria-label="Select BloodType" name="RequestedBloodtype"  onChange={(e)=>{
    setRequestor({...Request,RequestedBloodtype:e.target.value})
  }} >
  <option>Select BloodType</option>
  <option value="1">O+</option>
  <option value="2">O-</option>
  <option value="3">A+</option>
  <option value="4">A-</option>
  <option value="5">B+</option>
  <option value="6">B-</option>
  <option value="7">AB+</option>
  <option value="8">AB-</option>
</Form.Select>
  </Form.Group>
  </Col>

  <Col sm={2}></Col> 

  <Col sm={4}><Form.Group className="mb-3" controlId="RequestedOn">
  <Form.Control type='date' rows={2} id="Date"  placeholder="Enter Date" name="RequestedOn" 
  onChange={(e)=>{
    setRequestor({...Request,RequestedOn:e.target.value})
  }}/>
  </Form.Group> </Col>
  </Row>

<Row>
  <Col sm={1}>
  <Form.Group className="mb-3" controlId="IsActive">
    <Form.Check type="checkbox" label="IsActive"
     onChange={(e)=>{
        setRequestor({...Request,IsActive:e.target.checked})
    }}/>
  </Form.Group>
  </Col>
   </Row>
 
  <Col sm={8}></Col>
    <Row>
    <Col><Button type="submit" variant="primary">Submit</Button>{' '}<Button type="reset" variant="primary">Reset</Button>{' '}</Col>
    <Col></Col>
    </Row>

  </Form>
    </Container>

    </div>
  )
}

