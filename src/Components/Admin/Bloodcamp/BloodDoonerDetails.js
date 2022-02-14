import React , { useState, useEffect } from 'react'
import { Table,Button, Container } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
export default function BloodDonorDetails() {
    const [data, setdata] = useState([])
    console.log(data, "stored")
    const fetchPost = async () => {
        console.log("created")
      const response = await fetch(
        "https://localhost:44314/api/BloodDonor"       //https://api.chucknorris.io/jokes/random
      );
      console.log("donor")
     const data = await response.json();
     console.log(data,"Data Entered")
      setdata(data);
      //toast.success("data loaded successfully");
      console.log(data)
 
 
    };
    useEffect(() => {
      fetchPost();
    }, []);

    const deletedata=(RequestID)=>{
      console.log(RequestID,"ggggggggggfff+++++++++++++++++++++++")
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
 
       {/*} <Container fluid='sm' color='secondary' style={{ width: '800px',ml:0 }} >*/}
          <h5>Blood Donor Details</h5>
          <Table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10}>
            <thead>
 
              <tr>
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
              </tr>
            </thead>
 
            <tbody>
              {data.map(item => <tr key={item.DonorID}>
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
                <td><Button onClick={()=>deletedata(item.DonorID)} >Reject</Button></td>
                <td><Button >Approve</Button></td>
              </tr>)}
            </tbody>
          </Table>
 
        {/*</Container>*/}
        <Button variant="warning"> <Link to="/bloodcamp" tag="a" action >Back</Link></Button>
      </div>
      
 
    )
  }