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
    }} >

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