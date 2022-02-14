import React , { useState, useEffect } from 'react'
import { Table,Button, Container } from 'react-bootstrap';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { pink } from '@mui/material/colors';
// import EditIcon from '@mui/icons-material/Edit';
// import { IconButton } from '@mui/material';
import axios from 'axios';
// import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'
export default function BloodRequesterDetails() {
    const [data, setdata] = useState([])
    console.log(data, "stored")
    const fetchPost = async () => {
        console.log("created")
      const response = await fetch(
        "https://localhost:44314/api/BloodRequest"       //https://api.chucknorris.io/jokes/random
      );
      console.log("requestor")
      const data = await response.json();
      console.log(data,"Data Entered")
       setdata(data);
       //toast.success("data loaded successfully");
       console.log(data)
     };
     useEffect(() => {
       fetchPost();
     }, []);
      const updatedata=(id)=>{
        setdata(data.filter((c)=> c.RequestID !=id));
     
      };
      const deletedata=(RequestID)=>{
        axios.delete(`https://localhost:44314/api/BloodRequest/${RequestID}`).then(
          (response)=>{
            console.log(response);
            window.alert("data deleted");
           //updatedata(RequestID);
           setdata(data.filter((c)=> RequestID !=c.RequestID));
          },(error)=>{
            console.log("Something went wrong",error);
            window.alert("Something went wrong");
          }
        );
      }
   
    return (
      <div  >
 
       {/*} <Container fluid='sm' color='secondary' style={{ width: '800px' }} >*/}
          <h4>Blood Requester Details</h4>
          <Table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10} width="70%">
            <thead>
 
              <tr>
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
              </tr>
            </thead>
 
            <tbody>
              {data && data.map(item => <tr key={item.RequestID}>
                <td>{item.RequestID}</td>
                <td>{item.RequestorName}</td>
                <td>{item.RequestorAge}</td>
                <td>{item.RequestorGender}</td>
                <td>{item.RequestorPhoneNumber}</td>
                <td>{item.Email}</td>
                <td>{item.RequestorAddress}</td>
                <td>{item.RequestedBloodtype}</td>
                <td>{item.RequestedOn}</td>
                <td>{(item.IsActive)?'yes':'No'}</td>
                <td><Button onClick={()=>deletedata(item.RequestID)} >Reject</Button></td>
                <td><Button >Approve</Button></td>
              </tr>)}
            </tbody>
          </Table>
       {/*} </Container>*/}
       <Button variant="warning"> <Link to="/bloodcamp" tag="a" action className="text-light">Back</Link></Button>
      </div>
      
 
    )
}