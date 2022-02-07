import React, { useState, useEffect } from 'react'
import { Table, Container } from 'react-bootstrap';
export default function Ambulance() {
  const [data, setdata] = useState([])
  const fetchPost = async () => {
    const response = await fetch(
      "https://localhost:44314/api/Ambulance/ShowAmbulance"       //https://api.chucknorris.io/jokes/random
    );
   const data = await response.json();
    setdata(data);
    //toast.success("data loaded successfully");
    console.log(data)


  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div  >

      <Container fluid='sm' color='secondary' style={{ width: '800px' }} >
        <h5>Ambulance Details</h5>
        <Table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10}>
          <thead>

            <tr>
              <th>Ambulance No.</th>
              <th>Owner Name</th>
              <th> Call For Details</th>
            </tr>
          </thead>

          <tbody>
            {data.map(item => <tr key={item.AmbulanceNo}>
              <td>{item.AmbulanceNo}</td>
              <td>{item.OwnerName}</td>
              <td>{item.CallForDetails}</td>
            </tr>)}
          </tbody>
        </Table>

      </Container>
    </div>

  )
}