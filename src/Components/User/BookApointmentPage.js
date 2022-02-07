import React,{useState,useEffect} from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import axios from 'axios';
export default function BookApointmentPage() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };


const [Name,setName]=useState(["Sachin","Dhoni"]);
const [Speciality,setSpeciality]=useState("Eye Specialist");

const getdoctor=(Speciality)=>{
  console.log(Speciality,"+======================================")
  axios.get(`https://localhost:44314/api/appointments/getdoctors?search=${Speciality}`)
  .then((response) => {
    console.log(response)
    console.log(response.data)
 console.log(response.data,"response")
 setName(response.data);
 for(let i;i<response.data.length;i++){
   Name.push(response.data[i]);
 }
console.log(Name,"Name");
    // Code for handling the response
  })
  .catch((error) => {
   console.log(error)
    // Code for handling the error
  })
}
  const postdata=(data)=>{
    axios.post("https://localhost:44314/api/appointments",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response);
        //toast.success("Patient Record added Successfully");
        alert("patient data added");
        console.log("Patient Record added Successfully");
      },(error)=>{
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")
      }
    );
  };
    const [appointment,setappointment]=useState({});
    const handleSubmit = (e) => {
      console.log(appointment,"+++++++++++++++++++");
      postdata(appointment);
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
    <Container fluid className='mb-3 p-3'> <h4 >Book appointment </h4></Container>
    

    <Container>
    <Form onSubmit={handleSubmit}>
    <Row>
    <Col sm={2}>
    <Form.Label>Patient name:</Form.Label>
    </Col>
    <Col sm={6}>
    <Form.Group className="mb-3" controlId="PatientName">
     
      <Form.Control type="text" placeholder=" Enter Patient Name" id="PatientName" name="PatientName" onChange={(e)=>{
        setappointment({...appointment,PatientName:e.target.value})
      }}/>
    </Form.Group>
    </Col>
  
    
    <Col sm={4}></Col>
    
    </Row>

   
    <Row>
   
    <Col sm={2}>
   <Form.Label>Email:</Form.Label>
    </Col>
  
    <Col sm={6}>
    <Form.Group className="mb-3" controlId="Email">
   
      <Form.Control type="email" placeholder="Enter Email" id="Email" name="Email" 
      onChange={(e)=>{
        setappointment({...appointment,Email:e.target.value})
      }}/>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>
    <Row>
    <Col sm={2}>
  <Form.Label>Speciality</Form.Label>
    </Col>
    <Col sm={6}> <Form.Group className="mb-3" controlId="ward" >
    
    <Form.Select aria-label="Default select example" onChange={(e)=>{
      setappointment({...appointment,Speciality:e.target.value})
      setSpeciality(e.target.value)
      getdoctor(Speciality)
     
    }}>
    <option>Select Speciality:</option>
    <option value="Neuro">Neuro</option>
    <option value="Surgon">Surgon</option>
    <option value="Eye Specialist">Eye Specialist</option>
  </Form.Select>
    </Form.Group> 
    </Col>

    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={2}>
  <Form.Label>Doctor name:</Form.Label>
    </Col>
    
    <Col sm={6}> <Form.Group className="mb-3" controlId="Name">
    
    <Form.Control as="select"  onChange={(e)=>{
      setappointment({...appointment,doctorName:e.target.value})
    }}>
    <option>Select Doctor</option>
    {Name.map((item,index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ))}
    
  </Form.Control>
    
    </Form.Group> 
    
    </Col>

    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={2}>
  <Form.Label>Days:</Form.Label>
    </Col>
    <Col sm={6}> <Form.Group className="mb-3" controlId="ward">
    
    <Form.Select aria-label="Default select example" onChange={(e)=>{
      setappointment({...appointment,workingDays:e.target.value})
    }}>
    <option>Select Available Days:</option>
    <option value="1">MoN</option>
    <option value="2">TUE</option>
    <option value="3">WED</option>
  </Form.Select>
    </Form.Group> 
    </Col>

    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={2}>
  <Form.Label>Date:</Form.Label>
    </Col>
    <Col sm={6}>  <Form.Group className="mb-3" controlId="Date">
   
    <Form.Control type="Date" placeholder="Enter Date" id="Date" name="date" onChange={(e)=>{
      setappointment({...appointment,date:e.target.value})
    }}/>
  </Form.Group>
    </Col>

    <Col sm={4}></Col>

    </Row>
    <Row>
    <Col sm={2}>
  <Form.Label>Time Slots::</Form.Label>
    </Col>
    <Col sm={6}> <Form.Group className="mb-3" controlId="Slot">
    
    <Form.Select aria-label="Default select example" onChange={(e)=>{
      setappointment({...appointment,time:e.target.value})
    }}>
    <option>Select Available slots:</option>
    <option value="1">9 to 10</option>
    <option value="2">10 to 11</option>
    <option value="3">11 to 12</option>
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
