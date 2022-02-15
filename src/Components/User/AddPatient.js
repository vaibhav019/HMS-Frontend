import React ,{useState,useEffect,Fragment}  from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';



export default function AddPatient() {

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const postdata=(data)=>{
    axios.post("https://localhost:44314/api/Patients",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response);
        //toast.success("Patient Record added Successfully");
        alert("patient data added");
        console.log("Patient Record added Successfully");
        window.location = "/userhome";
      },(error)=>{
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")
      }
    );
  };
    const [patient,setpatient]=useState({});
    const handleSubmit = (e) => {
      console.log(patient,"+++++++++++++++++++");
      postdata(patient);
      e.preventDefault();
      setpatient({})
      
      //const data = new FormData(e.currentTarget);
      // eslint-disable-next-line no-console
      // console.log({
      //   email: data.get('email'),
      //   password: data.get('password'),
      // });
    };


  return (
    
    <div style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80"})`
    , position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
     height: '100%',
    opacity: 1,
    content: '""',
    display: 'block',
    marginTop:0
    }}>
    <Container fluid className='mb-3 p-3'> <h4 >Add Patient </h4></Container>
    

    <Container fluid className="ml-3" >
    <Form onSubmit={handleSubmit}>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="FirstName">
     
      <Form.Control type="text" placeholder=" Enter First Name" id="FirstName" name="FirstName" onChange={(e)=>{
        setpatient({...patient,FirstName:e.target.value})
      }}/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="LastName">
   
      <Form.Control type="text" placeholder="Enter Last Name" id="LastName" name="LastName"
      onChange={(e)=>{
        setpatient({...patient,LastName:e.target.value})
      }}/>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>

    <Row>
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="Email">
   
      <Form.Control type="email" placeholder="Enter Email" id="Email" name="Email" 
      onChange={(e)=>{
        setpatient({...patient,Email:e.target.value})
      }}/>
    </Form.Group>
    </Col>
    
    <Col sm={4}><Form.Group className="mb-3" controlId="ContactNumber">
   
    <Form.Control type="number" placeholder=" Enter Contact no." id="ContactNumber" name="ContactNumber" 
    onChange={(e)=>{
      setpatient({...patient,ContactNumber:e.target.value})
    }}/>
  </Form.Group> </Col>
  <Col sm={4}></Col>
    </Row>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="Age">
     
      <Form.Control type="number" placeholder=" Enter Age" id="Age" name="Age" 
      onChange={(e)=>{
        setpatient({...patient,Age:e.target.value})
      }}/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="gender">
   {/*
      <Form.Control type="text" placeholder="Enter Gender" id="Gender" name="gender" 
      onChange={(e)=>{
        setpatient({...patient,gender:e.target.value})
      }}/>
    */}
    <Form.Select aria-label="Select Gender" name="gender"  onChange={(e)=>{
      setpatient({...patient,gender:e.target.value})
    }} >
    <option>Select gender</option>
    <option value="Male">Male</option>
    <option value="Female ">Female</option>
    
  </Form.Select>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>
    <Row>
    <Col sm={8}>
  
    <Form.Group className="mb-3" controlId="Address">
    
    <Form.Control as="textarea" rows={2} id="Address"  placeholder="Enter Address" name="Address" 
    onChange={(e)=>{
      setpatient({...patient,Address:e.target.value})
    }}/>
  </Form.Group>
    </Col>
    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="Symptoms">
    
    <Form.Control as="textarea" rows={2} id="Symptoms"  placeholder="Enter Symptoms" name="Symptoms" onChange={(e)=>{
      setpatient({...patient,Symptoms:e.target.value})
    }}/>
  </Form.Group>
    </Col>
    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="Ward">
    
    <Form.Select aria-label="Select Ward" name="Ward"  onChange={(e)=>{
      setpatient({...patient,Ward:e.target.value})
    }} >
    <option>Select Ward</option>
    <option value="General">General</option>
    <option value="Special">Special</option>
    <option value="ICCU">ICCU</option>
  </Form.Select>
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
