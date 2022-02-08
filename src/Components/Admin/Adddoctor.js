import React,{useState,useEffect} from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
import axios from 'axios';
import Select from 'react-select';
//import Multiselect from 'multiselect-dropdown-react';
export default function Adddoctor() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   // eslint-disable-next-line no-console
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const options = [
    { value: 'MONDAY', label: 'MONDAY' },
    { value: 'TUESDAY', label: 'TUIESDAY' },
    { value: 'SATURDSY', label: 'SATURDAY' }
  ];

  const postdata=(data)=>{
    axios.post("https://localhost:44314/api/doctors",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response);
        console.log("success")
        //toast.success("Patient Record added Successfully");
        console.log("doctor Record added Successfully");
      },(error)=>{
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")
      }
    );
  };
 
    const [doctor,setdoctor]=useState({});
    const handleSubmit = (e) => {
      console.log(doctor,"+++++++++++++++++++");
      
      postdata(doctor);
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
    <Container fluid className='mb-3'> <h4 >Add Doctor </h4></Container>
    

    <Container>
    <Form onSubmit={handleSubmit}>
    <Row>
    <Col sm={2}>
    <Form.Label>Doctor name:</Form.Label>
    </Col>
    <Col sm={6}>
    <Form.Group className="mb-3" controlId="Name">
     
      <Form.Control type="text" placeholder=" Enter Doctor Name" id="Name" name="Name" onChange={(e)=>{
        setdoctor({...doctor,Name:e.target.value})
      }}/>
    </Form.Group>
    </Col>
  
    
    <Col sm={4}></Col>
    
    </Row>

    <Row>
    <Col sm={2}>
    <Form.Label>Phone Number:</Form.Label>
    </Col>
    
    <Col sm={6}><Form.Group className="mb-3" controlId="PhoneNumber">
   
    <Form.Control type="number" placeholder=" Enter Phone no." id="Phonenumber" name="PhoneNumber" 
    onChange={(e)=>{
      setdoctor({...doctor,PhoneNumber:e.target.value})
    }}/>
  </Form.Group> </Col>
  <Col sm={4}></Col>
    </Row>
    <Row>
   
    <Col sm={2}>
   <Form.Label>Email:</Form.Label>
    </Col>
  
    <Col sm={6}>
    <Form.Group className="mb-3" controlId="Email">
   
      <Form.Control type="email" placeholder="Enter Email" id="Email" Name="Email" onChange={(e)=>{
        setdoctor({...doctor,Email:e.target.value})
      }}/>
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
    
    </Row>
    <Row>
    <Col sm={2}>
  <Form.Label>Days:</Form.Label>
    </Col>
    <Col sm={6}> <Form.Group className="mb-3" controlId="WorkingDays">
{/*}
    <Form.Control type="text" placeholder=" Enter Available Days" id="Days" name="WorkingDays" onChange={(e)=>{
      setdoctor({...doctor,WorkingDays:e.target.value})
    }}/>
  */}

    <Select
    isMulti
    placeholder="Select  Avaliability Days"
   // value={selectedOption} 
    options={options} // list of the data
    onChange={(e)=>{
      setdoctor({...doctor,WorkingDays:e})
    }} // assign onChange function
  />
    {/*<Form.Select  aria-label="Default select example" name="WorkingDays"  onChange={(e)=>{
    //   const WorkingDays=[];
    // let selectedOption=(e.target.selectedOptions);
    // for (let i = 0; i < selectedOption.length; i++){
    //     WorkingDays.push(selectedOption.item(i).value)
    // }
    // setdoctor({...doctor,WorkingDays:selectedOption})
    setdoctor({...doctor,WorkingDays:e.target.value})
      }}
 >
    <option>Select Available Days:</option>
    <option value="MoNDAY">MoN</option>
    <option value="TUEDAY">TUE</option>
    <option value="sATURDAY">WED</option>
  </Form.Select>
    */}
  
</Form.Group> 
  



    </Col>

    <Col sm={4}>   </Col>
    </Row>
    <Row>
    <Col sm={2}>
  <Form.Label>Speciality:</Form.Label>
    </Col>
    <Col sm={6}> <Form.Group className="mb-3" controlId="Speciality" name="Speciality">
    
    <Form.Select aria-label="Default select example" onChange={(e)=>{
      setdoctor({...doctor,Speciality:e.target.value})
    }}>
    <option>Select Speciality:</option>
    <option value="Neuro">Neuro</option>
    <option value="Siurgon">Surgon</option>
    <option value="Fever">Fever</option>
  </Form.Select>
    </Form.Group> 
    </Col>

    <Col sm={4}></Col>
    </Row>
    
    <Row>
    <Col sm={2}>
    <Form.Label>Experience(In Years):</Form.Label>
    </Col>
    
    <Col sm={6}><Form.Group className="mb-3" controlId="Experience">
   
    <Form.Control type="number" placeholder=" Enter Experience." id="experience" name="Experience" onChange={(e)=>{
      setdoctor({...doctor,Experience:e.target.value})
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
