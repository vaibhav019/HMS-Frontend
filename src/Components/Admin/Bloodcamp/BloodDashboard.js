import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Card, Table } from 'react-bootstrap'
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
  const [data4, setdata4] = useState([])
  const fetchPost4 = async () => {
    console.log("created")
    const response = await fetch(
      "https://localhost:44314/api/BloodDonor"       //https://api.chucknorris.io/jokes/random
    );
    console.log("donor")
    const data = await response.json();
    console.log(data, "Data Entered")
    setdata4(data);
    //toast.success("data loaded successfully");
    console.log(data4)


  };
  const [data5, setdata5] = useState([])
  const fetchPost5 = async () => {
    console.log("created")
    const response = await fetch(
      "https://localhost:44314/api/BloodRequest"       //https://api.chucknorris.io/jokes/random
    );
    console.log("requestor")
    const data = await response.json();
    console.log(data, "Data Entered")
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
    fetchPost3();
    fetchPost5();

  }, []);

  return (
    <div style={{
      backgroundImage: `url(${"https://media.istockphoto.com/photos/male-nurse-taking-blood-sample-of-child-patient-n-clinic-picture-id1306247421?b=1&k=20&m=1306247421&s=170667a&w=0&h=PpxCAI3g_Qtvdb23BqI_oMfZi5b3joN9j2CKgeLyoGI="})`
      ,

      position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100%',
      height: '100%',
      opacity: 1,
      content: '""',
      display: 'block',
      marginTop: 0
    }}>
      <h4>Dashboard</h4>
      <Container>
        <Row>

          <Col>
            <Card style={{ width: '12rem' }} bg='warning'>
              <Card.Body>
                <Card.Title>Blood Unit</Card.Title>
                {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
                <Card.Text>
                  {bloodunit}
                </Card.Text>
                <Card.Link href="/adminhome/bloodunit">More Details</Card.Link>

              </Card.Body>
            </Card> </Col>
          <Col > <Card style={{ width: '12rem' }} bg='warning'>
            <Card.Body>
              <Card.Title>Total Donor</Card.Title>
              {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
              <Card.Text>
                {donordata}
              </Card.Text>
              <Card.Link href="/adminhome/blood-donor-data" >All Donors</Card.Link>
              {/* <Card.Link href="#">more</Card.Link>*/}
            </Card.Body>
          </Card></Col>
          <Col ><Card style={{ width: '12rem' }} bg='warning'>
            <Card.Body>
              <Card.Title>Total request</Card.Title>
              {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
              <Card.Text>
                {reqdata}
              </Card.Text>
              <Card.Link href="/adminhome/blood-request-data" >All Requester</Card.Link>
              {/*}  <Card.Link href="#">More</Card.Link>*/}
            </Card.Body>
          </Card> </Col>
        </Row>
        {/*} <Link to="/blood-request-data" tag="a" action >Blood Requests data</Link>||
  <Link to="/blood-donor-data" tag="a" action >Blood Donors data</Link>*/}
      </Container>
      <br /><br />
      <h4>Today Requests</h4>
      <Container className='my-3 '>

        <Table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10} width="70%">
          <thead>
            {(data4.filter((item) => {
              return item.RequestedOn == new Date().toLocaleDateString();
            }).length > 0) ? <tr>
              <th>RequestId</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Blood Type</th>
              <th>Reuested Date</th>
              <th>IsActive</th>
              <th>Action</th>
              <th></th>
            </tr> : ''}

          </thead>
          <tbody>
            {(data5.filter((item) => {
              return item.RequestedOn == new Date().toLocaleDateString();
            }).length > 0) ? data5.filter((item) => {
              return item.RequestedOn == new Date().toLocaleDateString();
            }).map((item) =>
              <tr key={item.RequestID}>
                <td>{item.RequestID}</td>
                <td>{item.RequestorName}</td>
                <td>{item.RequestorAge}</td>
                <td>{item.RequestorGender}</td>
                <td>{item.RequestorPhoneNumber}</td>
                <td>{item.Email}</td>
                <td>{item.RequestorAddress}</td>
                <td>{item.RequestedBloodtype}</td>
                <td>{item.RequestedOn}</td>
                <td>{(item.IsActive) ? 'yes' : 'No'}</td>
              </tr>)

              : <b>There is no Requests on today... </b>
            }
          </tbody>
        </Table>
        {/*<img src='https://media.istockphoto.com/photos/male-nurse-taking-blood-sample-of-child-patient-n-clinic-picture-id1306247421?b=1&k=20&m=1306247421&s=170667a&w=0&h=PpxCAI3g_Qtvdb23BqI_oMfZi5b3joN9j2CKgeLyoGI=' alt="dashboard" width={900} height={350}/>*/}

      </Container>
      <br />
      <h4>Today Donors</h4>
      <Container className='my-3 '>
        <Table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10} width="70%">
          <thead>
            {(data4.filter((item) => {
              return item.RequestedOn == new Date().toLocaleDateString();
            }).length > 0) ? <tr>
              <th>DonorId</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Address</th>
              <th>BloodType</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Weight</th>
              <th>IsHealthy</th>
              <th>Action</th>
              <th></th>
            </tr> : ''}

          </thead>
          <tbody>
            {(data4.filter((item) => {
              return item.RequestedOn == new Date().toLocaleDateString();
            }).length > 0) ? data4.filter((item) => {
              return item.RequestedOn == new Date().toLocaleDateString();
            }).map((item) =>
              <tr key={item.DonorID}>
              <td>{item.DonorID}</td>
              <td>{item.DonorName}</td>
              <td>{item.DonorAge}</td>
              <td>{item.DonorGender}</td>
              <td>{item.DonorAddress}</td>
              <td>{item.DonorBloodtype}</td>
              <td>{item.DonorPhoneNumber}</td>
              <td>{item.Email}</td>
              <td>{item.DonorWeight}</td>
              <td>{(item.Ishealthy)?'yes':'No'}</td>
              </tr>)

              : <b>There is no Donors on today... </b>
            }
          </tbody>
        </Table>

        {/*<img src='https://media.istockphoto.com/photos/male-nurse-taking-blood-sample-of-child-patient-n-clinic-picture-id1306247421?b=1&k=20&m=1306247421&s=170667a&w=0&h=PpxCAI3g_Qtvdb23BqI_oMfZi5b3joN9j2CKgeLyoGI=' alt="dashboard" width={900} height={350}/>*/}

      </Container>
    </div>
  )
}
