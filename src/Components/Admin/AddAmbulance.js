import React ,{useState,useEffect,Fragment}  from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import axios from 'axios';

export default function AddAmbulance() {

    const postdata=(data)=>{
        axios.post("https://localhost:44314/api/Ambulance/InsertAmbulance",data).then(   //${base_url}\api\Registers
          (response)=>{
            //success
            console.log(response);
            //toast.success("Patient Record added Successfully");
            alert("ambulance data added");
            console.log("Patient Record added Successfully");
          },(error)=>{
            //error
            console.log(error);
            console.log("failed +++++++++++++++++++")
          }
        );
      };
        const [ambulance,setambulance]=useState({});
        const handleSubmit = (e) => {
          console.log(ambulance,"+++++++++++++++++++");
          postdata(ambulance);
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
    opacity: .8,
    content: '""',
    display: 'block',
    marginTop:0
    }}>
    <Container fluid className='mb-3 p-3'> <h4>Add Ambulance</h4></Container>
    

    <Container fluid className="ml-3" >
    <Form onSubmit={handleSubmit}>
    <Row>
   
    <Col sm={2}>
    <Form.Label>Owner Name:</Form.Label>
    </Col>
  
    <Col sm={6}>
    <Form.Group className="mb-3" controlId="OwnerName">
   
      <Form.Control type="text" placeholder="Enter Owner Name" id="OwnerName" name="OwnerName"
      onChange={(e)=>{
        setambulance({...ambulance,OwnerName:e.target.value})
      }}/>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>

    <Row>
    <Col sm={2}>
    
    </Col>
    
    <Col sm={6}><Form.Group className="mb-3" controlId="CallForDetails">
   
    <Form.Control type="number" placeholder=" Enter Contact no." id="CallForDetails" name="CallForDetails" 
    onChange={(e)=>{
      setambulance({...ambulance,CallForDetails:e.target.value})
    }}/>
  </Form.Group> </Col>
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
