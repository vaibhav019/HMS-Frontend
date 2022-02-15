import React,{useState,useEffect} from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import axios from 'axios'
export default function BookVaccination() {
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
    axios.post("https://localhost:44314/api/vaccination",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response);
        console.log("success")
        //toast.success("Patient Record added Successfully");
        alert("vaccination booked successsfully")
        window.location="/userhome"
        console.log(" vaccination added Successfully");
      },(error)=>{
        //error
        alert(error)
        console.log(error);
        console.log("failed +++++++++++++++++++")
      }
    );
  };
 
    const [vaccination,setvaccination]=useState({});
    const handleSubmit = (e) => {
      console.log(vaccination,"+++++++++++++++++++");  
      postdata(vaccination);
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
    <Container fluid className='mb-3 p-3'> <h4 >Book Vaccination </h4></Container>
    

    <Container>
    <Form onSubmit={handleSubmit}>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="fullName">
     
      <Form.Control type="text" placeholder=" Enter Full Name" id="fullName" name="fullName"  onChange={(e)=>{
        setvaccination({...vaccination,fullName:e.target.value})
      }}/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="phoneNumber">
   
      <Form.Control type="number" placeholder="Enter Phone Number" id="phoneNumber" name="phoneNumber"  onChange={(e)=>{
        setvaccination({...vaccination,phoneNumber:e.target.value})
      }}/>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>

    <Row>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="email">
   
      <Form.Control type="email" placeholder="Enter Email" id="email" name="email" onChange={(e)=>{
        setvaccination({...vaccination,email:e.target.value})
      }}/>
    </Form.Group>
    </Col>
    
    
  <Col sm={4}></Col>
    </Row>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="age">
     
      <Form.Control type="number" placeholder=" Enter Age" id="age" name="age" onChange={(e)=>{
        setvaccination({...vaccination,age:e.target.value})
      }}/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="gender">
   
    <Form.Select aria-label="Gender" name="gender" onChange={(e)=>{
      setvaccination({...vaccination,gender:e.target.value})
    }}>
    <option>Select Gender</option>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Other">Other</option>
  </Form.Select>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>
    <Row>
    <Col sm={8}>
  
    <Form.Group className="mb-3" controlId="addresss">
    
    <Form.Control as="textarea" rows={1} id="addresss"  placeholder="Enter Address" name="addresss" onChange={(e)=>{
      setvaccination({...vaccination,addresss:e.target.value})
    }}/>
  </Form.Group>
    </Col>
    <Col sm={4}></Col>
    </Row>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="aadharNumber">
     
      <Form.Control type="number" placeholder=" Enter Adhar No." id="aadharNumber" name="aadharNumber" onChange={(e)=>{
        setvaccination({...vaccination,aadharNumber:e.target.value})
      }}/>
    </Form.Group>
    </Col>
  
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="vaccineType">
   
    <Form.Select aria-label="Select Slot" name="vaccineType" onChange={(e)=>{
      setvaccination({...vaccination,vaccineType:e.target.value})
    }}>
    <option>Select Vaccine Type</option>
    <option value="Covaxin">Covaxin</option>
    <option value="Covishield">Covishield</option>
    
  </Form.Select>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>
    <Row>
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="dose">
    
    <Form.Select aria-label="Select Dose" name="dose" onChange={(e)=>{
      setvaccination({...vaccination,dose:e.target.value})
    }}>
    <option>Select Dose</option>
    <option value="Dose 1">Dose 1</option>
    <option value="Dose 2">Dose 2</option>
  
  </Form.Select>
    </Form.Group>
    </Col>
    <Col sm={4}><Form.Group className="mb-3" controlId="date">
    
    <Form.Control type="date" placeholder=" Enter Date" id="date" name="date" onChange={(e)=>{
      setvaccination({...vaccination,date:e.target.value})
    }}/>
    </Form.Group></Col>
    <Col sm={4}></Col>
    </Row>
    <Row>
    <Col sm={8}>
    <Form.Group className="mb-3" controlId="slotTime">
    <Form.Select aria-label="Select Dose" name="slotTime " onChange={(e)=>{
      setvaccination({...vaccination,slotTime:e.target.value})
    }}>
    <option>Select Slot</option>
    <option value="9AM to 1PM">9AM to 1PM</option>
    <option value="2pm to 6PM">9AM to 1PM</option>
  
  </Form.Select>
    </Form.Group>
    </Col>
    
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
