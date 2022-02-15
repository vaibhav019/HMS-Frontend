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

const[Days,setDays]=useState([]);
const [Name,setName]=useState([]);
const [Speciality,setSpeciality]=useState('');

const getdoctor= async (Speciality)=>{
  console.log(Speciality,"+======================================")
   await axios.get(`https://localhost:44314/api/appointment/getdoctors?search=${Speciality}`)
  .then((response) => {
    console.log(response,"=========================+++++++++++++")
    console.log(response.data)
 console.log(response.data,"response")
 setName(response.data);
//  for(let i;i<response.data.length;i++){
//    Name.push(response.data[i]);
//  }
 //setName(Name);
console.log(Name,"Name");
    // Code for handling the response
  })
  .catch((error) => {
   setName(["Not Available"])
   window.alert(error)
   console.log(error,)
    // Code for handling the error
  })
}

const getdays=  async(Name)=>{
  console.log(Name,"+===============''''''''''=======================")
   await axios.get(`https://localhost:44314/api/appointment/getdays?search2=${Name}`)
  .then((response) => {
    console.log(response,"getdays")
    console.log(response.data,"getdays")
 console.log(response.data,"response")
 console.log(response.data.toString(),"string value of days")
 console.log(response.data.toString().split(','),"string to array days data")
 //console.log(response.data.split(','),"days array")
 //const temp=response.data.split(',')
 //console.log(temp,"temp")
 setDays(response.data.toString().split(','));
//  for(let i;i<response.data.length;i++){
//    Name.push(response.data[i]);
//  }
//var result=response.split(',')
// console.log(response.data,"+++++++++++++++++++++++++++++++++++++++++++");
// setDays(response.data);
// console.log(Days,"==================================================");


    // Code for handling the response
  })
  .catch((error) => {
   console.log(error)
   setDays(['Not Available']);
    // Code for handling the error
  })
}
  const postdata=(data)=>{
    axios.post("https://localhost:44314/api/appointment/bookappointment",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response);
        //toast.success("Patient Record added Successfully");
        alert("appointment booked successfully ");
        console.log(" appointments booked Successfully");
        window.location="/userhome"
        
      },(error)=>{
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")
        alert("something Wrong please enter valid data ");
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
    <Container fluid className='mb-3 p-3'> <h4 >Book appointment </h4></Container>
    

    <Container>
    <Form onSubmit={handleSubmit}>
    <Row>
    <Col sm={2}>
    <Form.Label>Patient name:</Form.Label>
    </Col>
    <Col sm={6}>
    <Form.Group className="mb-3" controlId="PatientName">
     
      <Form.Control type="text" placeholder=" Enter Patient Name" id="PatientName" name="patientName" onChange={(e)=>{
        setappointment({...appointment,patientName:e.target.value})
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
   
      <Form.Control type="email" placeholder="Enter Email" id="email" name="email" 
      onChange={(e)=>{
        setappointment({...appointment,email:e.target.value})
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
      getdoctor(e.target.value)
     
    }}>
    <option>Select Speciality:</option>
    <option value="Dentist">Dentist</option>
    <option value="Gynacologist">Gynacologist</option>
    <option value="General Physician">General Physician</option>
    <option value="NeuroSurgeon">NeuroSurgeon</option>
    <option value="Surgeon">Surgeon</option>
    <option value="Eye Specialist">Eye Specialist</option>
    <option value="Orthopedics">Orthopedics</option>
    <option value="PlasticSurgeon">PlasticSurgeon</option>
    <option value="Radiologist">Radiologist</option>
    <option value="Cardiologist">Cardiologist</option>
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
      getdays(e.target.value)
    }}>
    <option>Select Doctor</option>
    {Name && Name.map((item,index) => (
      <option key={index} value={item}>
        {item}
      </option>
     ))
     //:["Dhoni","Virat"].map((item,index)=>{
    //   <option key={index} value={item}>
    //   {item}
    // </option>
    // })
  }
    
  </Form.Control>
    
    </Form.Group> 
    
    </Col>

    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={2}>
  <Form.Label>Days:</Form.Label>
    </Col>
    <Col sm={6}> <Form.Group className="mb-3" controlId="day">
    
    <Form.Select aria-label="Default select example" onChange={(e)=>{
      setappointment({...appointment,day:e.target.value})
    }}>
    <option>Select Available Days:</option>
    {Days && Days.map((item,index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ))
    // :["Mon","Tue"].map((item,index)=>{
    //   <option key={index} value={item}>
    //   {item}
    // </option>
    // })
  }
  </Form.Select>
    </Form.Group> 
    </Col>

    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={2}>
  <Form.Label>Date:</Form.Label>
    </Col>
    <Col sm={6}>  <Form.Group className="mb-3" controlId="date">
   
    <Form.Control type="Date" placeholder="Enter Date" id="date" name="date" onChange={(e)=>{
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
    <option value="9 AM to 12 PM">9 AM to 12 PM</option>
    <option value="12PM to 2PM">12PM to 2PM</option>
    <option value="3PM to 5PM">3PM to 5PM</option>
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
