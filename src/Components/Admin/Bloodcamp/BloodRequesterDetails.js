import React , { useState, useEffect } from 'react'
import { Table,Button, Container } from 'react-bootstrap';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { pink } from '@mui/material/colors';
// import EditIcon from '@mui/icons-material/Edit';
// import { IconButton } from '@mui/material';
import emailjs from 'emailjs-com';
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
      const approve=(RequestID,isactive)=>{
        axios.patch(`https://localhost:44314/api/BloodRequest/${RequestID}`,{isapproved:true,IsActive:isactive})
       .then(response => {
         console.log("Status: ", response.status);
         console.log("Data: ", response.data);
         //alert(response)
         //alert()
         setdata(data.filter((c)=> RequestID !==c.RequestID));
        // alert(data)
        
       }).catch(error => {
         console.error('Something went wrong!', error);
         
       })
      }
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
                <td><Button onClick={()=>{
                  emailjs.send('service_b8mbf8v',
          'template_3tc327p', 
          {
            from_name:"Vaibhav Singh",
            to_name :item.DonorName,
            message:"Your request is rejected now  You can not visit in our center ",
            reply_to:'vaibhavsengarnetid@gmail.com',
            from_Email:item.Email
          }, 
          'user_IQODLOdj6sRnQAnI9S87a').then(res => {
            console.log(res);
            window.alert("email sent to donor regarding approvement")
        })
        .catch(err => {
            console.log(err);
            window.alert(err)
        })
             deletedata(item.RequestID)}} >{item.isapproved?'Cancle':'Reject'}</Button></td>
                <td><Button 
                onClick={()=>{
                  approve(item.RequestID,item.IsActive)
                  emailjs.send('service_b8mbf8v',
          'template_3tc327p', 
          {
            from_name:"Vaibhav Singh",
            to_name :item.DonorName,
            message:`Your request is approved  now  You can  visit in our center on ${item.RequestedOn+2}`,
            reply_to:'vaibhavsengarnetid@gmail.com',
            from_Email:item.Email
          }, 
          'user_IQODLOdj6sRnQAnI9S87a').then(res => {
            console.log(res);
            window.alert("email sent to donor regarding approvement")
        })
        .catch(err => {
            console.log(err);
            window.alert(err)
        })

                }}
                >
                {item.isapproved?'Approved':'Approve'}</Button></td>
              </tr>)}
            </tbody>
          </Table>
       {/*} </Container>*/}
       <Button variant="warning"> <Link to="/adminhome/bloodcamp" tag="a" action className="text-light">Back</Link></Button>
      </div>
      
 
    )
}