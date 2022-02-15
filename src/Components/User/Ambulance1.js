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
    }} >

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