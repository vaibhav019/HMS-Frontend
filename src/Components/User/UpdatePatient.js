import React ,{useState,useEffect,Fragment}  from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from "react-router-dom";


export default function UpdatePatient() {

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const params = useParams(); 
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
  const updatedata=(data)=>{
    console.log("inside Updatedata method",params)
    console.log("params is working",params.PateintID)
     console.log(params.PateintID)
    axios.put(`https://localhost:44314/api/Patients/${params.PateintID}`, data)
    .then(response => {
      console.log("Status: ", response.status);
      console.log("Data: ", response.data);
      window.alert("patient data updated")
      window.location = "/adminuser"
    }).catch(error => {
      console.error('Something went wrong!', error);
      window.alert("Something Wrong: Doctor data not updated Please enter valid details")
    });
 }
    const [patient,setpatient]=useState({});
    const handleSubmit = (e) => {
      console.log(patient,"+++++++++++++++++++");
      //postdata(patient);
      updatedata(patient)
      e.preventDefault();
      setpatient({})
      
      //const data = new FormData(e.currentTarget);
      // eslint-disable-next-line no-console
      // console.log({
      //   email: data.get('email'),
      //   password: data.get('password'),
      // });
    };

    const [data,setdata]=useState([])
const fetchPost = async () => {
  console.log("created")
const response = await fetch(
  `https://localhost:44314/api/Patients/${params.PateintID}`       //https://api.chucknorris.io/jokes/random
);
console.log("working")
const data = await response.json();
console.log(data,"Data Entered")
setdata(data);
//toast.success("data loaded successfully");
console.log(data)


};
useEffect(() => {
fetchPost();
}, []);
 
  return (
    
    <div style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`
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
    <Container fluid className='mb-3 p-3'> <h4 >Update Patient </h4></Container>
    

    <Container fluid className="ml-3" >
    <Form onSubmit={handleSubmit}>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="FirstName">
     
      <Form.Control type="text" defaultValue={data.FirstName} placeholder=" Enter First Name" id="FirstName" name="FirstName" onChange={(e)=>{
        setpatient({...patient,FirstName:e.target.value})
      }}/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="LastName">
   
      <Form.Control type="text" defaultValue={data.LastName} placeholder="Enter Last Name" id="LastName" name="LastName"
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
   
      <Form.Control type="email" defaultValue={data.Email} placeholder="Enter Email" id="Email" name="Email" 
      onChange={(e)=>{
        setpatient({...patient,Email:e.target.value})
      }}/>
    </Form.Group>
    </Col>
    
    <Col sm={4}><Form.Group className="mb-3" controlId="ContactNumber">
   
    <Form.Control type="number" defaultValue={data.ContactNumber} placeholder=" Enter Contact no." id="ContactNumber" name="ContactNumber" 
    onChange={(e)=>{
      setpatient({...patient,ContactNumber:e.target.value})
    }}/>
  </Form.Group> </Col>
  <Col sm={4}></Col>
    </Row>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="Age">
     
      <Form.Control type="number" defaultValue={data.Age} placeholder=" Enter Age" id="Age" name="Age" 
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
    <Form.Select aria-label="Select Gender" defaultValue={data.gender} name="gender"  onChange={(e)=>{
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
    
    <Form.Control as="textarea" defaultValue={data.Address} rows={2} id="Address"  placeholder="Enter Address" name="Address" 
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
    
    <Form.Control as="textarea" defaultValue={data.Symptoms} rows={2} id="Symptoms"  placeholder="Enter Symptoms" name="Symptoms" onChange={(e)=>{
      setpatient({...patient,Symptoms:e.target.value})
    }}/>
  </Form.Group>
    </Col>
    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="Ward">
    
    <Form.Select aria-label="Select Ward" defaultValue={data.Ward} name="Ward"  onChange={(e)=>{
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