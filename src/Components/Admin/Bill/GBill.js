import React,{useState} from 'react'
import { Container, Form,Row,Col,Button } from 'react-bootstrap';
export default function GenerateBill() {
  const handleSubmit = (event) => {
  event.preventDefault();
   const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
   /* console.log({
      email: data.get('email'),
      password: data.get('password'),
    });*/
  };
  const [Name,setName]=useState();
  const [Email,setEmail]=useState();
  const [PhoneNumber,setPhoneNumber]=useState();
  const [DocCharge,setDocCharge]=useState();
  const [WardCharge,setWardCharge]=useState();
  const [Days,setDays]=useState(1);

  const [BillAmount,setBillAmount]=useState();

function showBillAmount(){
  BillAmount= setBillAmount((DocCharge+WardCharge)*Days);

}
function save(){
    console.warn({Name,Email,PhoneNumber,DocCharge,WardCharge,Days,BillAmount});
    window.alert("Bill Generated have sent to user")
    console.log("Your details added Successfully");
            window.location = "/userhome";
    let data={Name,Email,PhoneNumber,DocCharge,WardCharge,Days,BillAmount}
    fetch("https://localhost:44310/api/Bills",{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)

    }).then((result)=>{
        result.json().then((resp)=>{
            console.warn("resp",resp)
            window.alert("Bill Generated have sent to user")
            console.log("Your details added Successfully");
                    window.location = "/userhome";
        })
    })
}

  return (
   
    <div>
    <Container fluid className='mb-3 p-3'><h2 >Bill Generation </h2></Container>
   

    <Container>
    <Form onSubmit={handleSubmit}>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="Name">
      <b>Patient Name</b>
      <Form.Control type="text" placeholder=" Enter Name" id="Name" value={Name}
          onChange={e => setName(e.target.value)}/>
    </Form.Group>
    </Col>
 
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="Email">
      <b>Patient Email</b>
      <Form.Control type="email" placeholder="Enter Email" id="Email" value={Email}
         onChange={e => setEmail(e.target.value)} />
    </Form.Group>
    </Col>
    <Col sm={4}></Col>
   
    </Row>

    <Row>
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="PhoneNumber">
    <b>Patient Phone Number</b>
      <Form.Control type="number" placeholder="Enter Phone Number" id="phno" value={PhoneNumber}
          onChange={e => setPhoneNumber(+e.target.value)}/>
    </Form.Group>
    </Col>
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="Days">
      <b>Patient Admitted Days</b>
      <Form.Control type="number" placeholder="Enter Number of  Days" id="Days" value={Days}
          onChange={e => setDays(+e.target.value)}/>
    </Form.Group>
    </Col>
   
   
    </Row>
    <Row>
   
    <Col sm={4}>
    <Form.Group className="mb-3" controlId="WardCharge">
     <b>Ward Charge</b>
      <Form.Control type="number" placeholder=" Enter Ward Charge" id="WardCharge"value={WardCharge}
            onChange={e => setWardCharge(+e.target.value)}/>
    </Form.Group>
    </Col>
    <Col sm={4}><Form.Group className="mb-3" controlId="DocCharge">
   <b>Doctor Charge</b>
    <Form.Control type="number" placeholder=" Enter Doctor Charge" id="DocCharge" value={DocCharge}
            onChange={e => setDocCharge(+e.target.value)}/>
  </Form.Group> </Col>
  <Col sm={4}></Col>
 
   
   

   
   
    </Row>
   
    <button onClick={showBillAmount}>Generate Total Amount</button><h2> {BillAmount}</h2>

    <Row>
    <Col>  <Button type="submit" onClick={save} variant="primary">Submit</Button>{' '}</Col>
    <Col>  </Col>
    </Row>

  </Form>
    </Container>
   
   
    </div>
  )
}