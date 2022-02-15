import React,{useState,useEffect} from 'react'
  import { Container ,Row,Col,Form,Button} from 'react-bootstrap'
import axios from 'axios';
export default function Feedback() {



  const postdata=(data)=>{
    axios.post("https://localhost:44314/api/Feedbacks/InsertFeedback",data).then(   //${base_url}\api\Registers
      (response)=>{
        //success
        console.log(response);
        //toast.success("Patient Record added Successfully");
        alert("feedback added");
        console.log("feedback added Successfully");
        window.location = "/userhome";
      },(error)=>{
        //error
        console.log(error);
        console.log("failed +++++++++++++++++++")
      }
    );
  };
    const [feedback,setfeedback]=useState({});
    const handleSubmit = (e) => {
      console.log(feedback,"+++++++++++++++++++");
      postdata(feedback);
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
      <h4>Feedback form</h4>
      <Container>
      <Form  onSubmit={handleSubmit}>
      <Row>
      <Col sm={8}>
    
      <Form.Group className="mb-3" controlId="Name">
      <b>Name</b>
      <Form.Control  type="text" id="Name"  placeholder="Enter Name" name="Name" onChange={(e)=>{
        setfeedback({...feedback,Name:e.target.value})
      }}/>
    </Form.Group>
      </Col>
      <Col sm={4}></Col>
      </Row>
      <Row>
      <Col sm={8}>
    
      <Form.Group className="mb-3" controlId="Name">
      <b>Phone Number</b>
      <Form.Control  type="number" id="PhoneNumber"  placeholder="Enter Phone Number" name="PhoneNumber"  onChange={(e)=>{
        setfeedback({...feedback,PhoneNumber:e.target.value})
      }}/>
    </Form.Group>
      </Col>
      <Col sm={4}></Col>
      </Row>
      <Row>
      <Col sm={8}>
    
      <Form.Group className="mb-3" controlId="feedback">
      <b>Feedback</b>
      <Form.Control as="textarea" rows={3} id="feedback"  placeholder="Enter feedback" name="Comment"  onChange={(e)=>{
        setfeedback({...feedback,Comment:e.target.value})
      }}/>
    </Form.Group>
      </Col>
      <Col sm={4}></Col>
      </Row>
      <Row>
      <Col sm={8}>
    
      <Form.Group className="mb-3" controlId="rating">
      <b>Rating</b>
      <Form.Select aria-label="Select BloodType" name="RequestedBloodtype"   onChange={(e)=>{
        setfeedback({...feedback,Rating:e.target.value})
      }} >
      <option>Select Rating</option>
      <option value="1">⭐</option>
      <option value="2">⭐⭐</option>
      <option value="3">⭐⭐⭐</option>
      <option value="4">⭐⭐⭐⭐</option>
      <option value="5">⭐⭐⭐⭐⭐</option>
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
