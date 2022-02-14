import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Pie } from 'react-chartjs-2';
import { Line } from "react-chartjs-2";
export default function BloodDashboard() {

  const [donordata, setdonordata] = useState('')
  const [reqdata, setreqdata] = useState('')
  const [bloodunit, setbloodunit] = useState('')
  const [bloodtype, setybloodtype] = useState([])
  const [data, setdata] = useState({
    labels: ["A", "B", "AB", "O+"],
    datasets: [
      {
        label: 'Blood Chart',
        data: [7, 9, 3, 6],
        backgroundColor: [
          "#0000FF",
          "#9966FF",
          "#4C4CFF",
          "#00FFFF",
        ]
      }

    ]
  }
  )


  const data1 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)"
      }
    ]
  };
  const [data4,setdata4]=useState([])
  const fetchPost4 = async () => {
    console.log("created")
  const response = await fetch(
    "https://localhost:44314/api/BloodDonor"       //https://api.chucknorris.io/jokes/random
  );
  console.log("donor")
 const data = await response.json();
 console.log(data,"Data Entered")
  setdata4(data);
  //toast.success("data loaded successfully");
  console.log(data4)


};
const [data5,setdata5]=useState([])
const fetchPost5 = async () => {
  console.log("created")
const response = await fetch(
  "https://localhost:44314/api/BloodRequest"       //https://api.chucknorris.io/jokes/random
);
console.log("requestor")
const data = await response.json();
console.log(data,"Data Entered")
 setdata5(data);
 //toast.success("data loaded successfully");
 console.log(data5)
};
  const fetchPost1 = async () => {
    const response = await fetch(
      "https://localhost:44314/api/BloodDonorAdmin"       //https://api.chucknorris.io/jokes/random
    );
    const data = await response.json();
    console.log(data)
    setdonordata(data);
    //toast.success("data loaded successfully");
    console.log(data)
  };
  const fetchPost2 = async () => {
    const response = await fetch(
      "https://localhost:44314/api/BloodRequestorAdmin"       //https://api.chucknorris.io/jokes/random
    );
    const data = await response.json();
    console.log(data)
    setreqdata(data);
    //toast.success("data loaded successfully");
    console.log(data)
  };

  const fetchPost3 = async () => {
    const response = await fetch(
      "https://localhost:44314/api/BloodTypeUnit/ShowBloodUnit"       //https://api.chucknorris.io/jokes/random
    );
    const data = await response.json();
    console.log(data)
    setbloodunit(data);
    //toast.success("data loaded successfully");
    console.log(data)
    console.log(bloodunit, "bloodunit")
  };
  useEffect(() => {
    fetchPost1();
    fetchPost2();
    fetchPost3()
  }, []);

  return (
    <div>
      <h4>Dashboard</h4>
      <Container>
        <Row>

          <Col>
            <Card style={{ width: '15rem' }} bg='warning'>
              <Card.Body>
                <Card.Title>Blood Unit</Card.Title>
                {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
                <Card.Text>
                  {bloodunit}
                </Card.Text>
               <Card.Link href="#">More Details</Card.Link>

              </Card.Body>
            </Card> </Col>
          <Col > <Card style={{ width: '15rem' }} bg='warning'>
            <Card.Body>
              <Card.Title>Total Donor</Card.Title>
              {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
              <Card.Text>
                {donordata}
              </Card.Text>
              <Card.Link href="/blood-donor-data" >All Donors</Card.Link>
            {/* <Card.Link href="#">more</Card.Link>*/}
            </Card.Body>
          </Card></Col>
          <Col ><Card style={{ width: '15rem' }} bg='warning'>
            <Card.Body>
              <Card.Title>Total request</Card.Title>
              {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
              <Card.Text>
                {reqdata}
              </Card.Text>
              <Card.Link href="/blood-request-data" >All Requester</Card.Link>
            {/*}  <Card.Link href="#">More</Card.Link>*/}
            </Card.Body>
          </Card> </Col>
        </Row>
        {/*} <Link to="/blood-request-data" tag="a" action >Blood Requests data</Link>||
  <Link to="/blood-donor-data" tag="a" action >Blood Donors data</Link>*/}
      </Container>
      <Container className='my-3 '>
<img src='https://th.bing.com/th/id/OIP.cxK4Mbn2o_ciUlz-PYmf6gHaD4?w=340&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7' alt="dashboard" width={850} height={350}/>
      
     </Container>
    </div>
  )
}
