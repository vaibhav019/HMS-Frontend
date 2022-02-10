import React, { useState, useEffect } from 'react'
import { Table, Container,Button } from 'react-bootstrap';
import axios from 'axios';
export default function Ambulance1() {
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

  const deletedata=(RequestID)=>{
    axios.delete(`https://localhost:44314/api/doctors/${RequestID}`).then(
      (response)=>{
        console.log(response);
        window.alert("one ambulance data deleted");
       setdata(data.filter((c)=> RequestID !== c.AmbulanceNo));
      },(error)=>{
        console.log("Something went wrong",error);
        window.alert("Something went wrong");
      }
    );
  }
  return (
    <div  >

      <Container fluid='sm' color='secondary' style={{ width: '800px' }} >
        <h5>Ambulance Details</h5>
        <Table bordered size="sm"  variant="secondary" cellPadding={10} cellSpacing={10} >
          <thead>

            <tr classname="text-center">
              <th>Ambulance No.</th>
              <th>Owner Name</th>
              <th> Call For Details</th>
              <th> Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map(item => <tr   key={item.AmbulanceNo}>
              <td>{item.AmbulanceNo}</td>
              <td>{item.OwnerName}</td>
              <td>{item.CallForDetails}</td>
              <td><Button onClick={()=>deletedata(item.AmbulanceNo)} >Delete</Button></td>
            </tr>)}
          </tbody>
        </Table>

      </Container>
    </div>

  )
}