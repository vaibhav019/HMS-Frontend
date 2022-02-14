import React ,{useState,useEffect,Fragment}  from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function BloodDonationPage() {
  const postdata=(data)=>{
    axios.post("https://localhost:44314/api/BloodDonor",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response);
        //toast.success("Details added Successfully");
        window.alert("blood Donation request sent to Admin")
        console.log("Your details added Successfully");
        window.location = "/userhome";
      },(error)=>{
        //error
        console.log(error);
        window.alert("Blood Donation Request did not sent something wrong...")
        console.log("failed +++++++++++++++++++")
      }
    );
  };
  const [Donor,setdonor]=useState({});
  const handleSubmit = (e) => {
    console.log(Donor,"+++++++++++++++++++");
    postdata(Donor);
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

    <Container fluid className='mb-3 p-3'><h4>Application Form for Blood Donation</h4>
    <Link to="/search-blood-donor" tag="a" action >Show Previous History</Link>
    </Container>
   
    <Container fluid className="ml-3" >
    <Form onSubmit={handleSubmit}>
   

  <Row>
  <Col sm={4}>
  <Form.Group className="mb-3" controlId="DonorName">
   
    <Form.Control type="text" placeholder=" Enter Name" id="Name" name="DonorName" onChange={(e)=>{
      setdonor({...Donor,DonorName:e.target.value})
    }}/>
  </Form.Group>
  </Col>

  
 
  <Col sm={4}>
  <Form.Group className="mb-3" controlId="DonorAge">
 
    <Form.Control type="number" placeholder="Enter Your Age" id="Age" name="DonorAge" 
    onChange={(e)=>{
      setdonor({...Donor,DonorAge:e.target.value})
    }}/>
  </Form.Group>
  </Col>
  <Col sm={4}></Col>
  </Row>
  <Row>
  <Col sm={4}>
 <Form.Group className="mb-3" controlId="Email">

   <Form.Control type="email" placeholder="Enter Email Id" id="Email" name="Email" 
   onChange={(e)=>{
     setdonor({...Donor,Email:e.target.value})
   }}/>
 </Form.Group>
 </Col>

 

 <Col sm={4}>
 <Form.Group className="mb-3" controlId="DonorWeight">

   <Form.Control type="number" placeholder="Enter Your weight" id="DonorWeight" name="Weight" 
   onChange={(e)=>{
     setdonor({...Donor,DonorWeight:e.target.value})
   }}/>
 </Form.Group>
 </Col>
 <Col sm={4}></Col>
  </Row>
  <Row>
  <Col sm={4}>
  <Form.Group className="mb-3" controlId="DonorGender">
  <Form.Select aria-label="Select Select" name="DonorGender"  onChange={(e)=>{
    setdonor({...Donor,DonorGender:e.target.value})
  }} >
  <option>Select Gender</option>
  <option value="1">Female</option>
  <option value="2">Male</option>
  <option value="3">Others</option>

</Form.Select>
  </Form.Group>
  </Col>

 
  <Col sm={4}>
  <Form.Group className="mb-3" controlId="DonorBloodtype">
  <Form.Select aria-label="Select BloodType" name="DonorBloodtype"  onChange={(e)=>{
    setdonor({...Donor,DonorBloodtype:e.target.value})
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

  

  
  </Row>
 

 <Row>
 <Col sm={4}><Form.Group className="mb-3" controlId="DonorAddress">
 
  <Form.Control as="textarea" rows={2} id="Address"  placeholder="Enter Address" name="DonorAddress" 
  onChange={(e)=>{
    setdonor({...Donor,DonorAddress:e.target.value})
  }}/>
  </Form.Group> </Col>

  <Col sm={4}>
  <Form.Group className="mb-3" controlId="DonorPhoneNumber">
 
    <Form.Control type="number" placeholder="Enter Phone Number" id="Phone Number" name="DonorPhoneNumber" 
    onChange={(e)=>{
      setdonor({...Donor,DonorPhoneNumber:e.target.value})
    }}/>
  </Form.Group>
  
  </Col>
  <Col sm={4}></Col>
   </Row>


   
 
 <Row>
   <Col sm={1}>
 
  <Form.Group className="mb-3" controlId="Ishealthy">
    <Form.Check type="checkbox" label="IsHealthy" value={true}
     onChange={(e)=>{
      setdonor({...Donor,Ishealthy:e.target.checked})
    }}/>
  </Form.Group>
  </Col>
   </Row>
 
  <Col sm={4}></Col>
    <Row>
    <Col>  <Button type="submit" variant="primary">Submit</Button>{' '}<Button type="reset" variant="primary">Reset</Button>{' '}</Col>
    <Col></Col>
    </Row>

  </Form>
    </Container>

    </div>
  )
}
