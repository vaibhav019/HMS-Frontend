import React , { useState, useEffect } from 'react'
import { Table,Button, Container } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
export default function BloodDonorDetails() {
  //const [isapproved,setisapproved]=useState(false)
  
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
  const templateParams={
    from_name:"Vaibhav Singh",
    to_name :'',
    message:'Hi',
    reply_to:''
  }

    // const sendemauil=()=>{
    //   emailjs.send('service_b8mbf8v','template_3tc327p', templateParams, 'user_IQODLOdj6sRnQAnI9S87a');
    // }
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
 
      {/*} <Container  color='secondary' style={{ width: '600px',ml:0 }} className="m-1">*/}
          <h5>Blood Donor Details</h5>
          <Table striped bordered hover size="sm" variant="secondary" cellPadding={10} cellSpacing={10} style={{ width: '700px',ml:0 }}>
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
                <th></th>
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
                <td><Button onClick={()=>{
                  emailjs.send('service_b8mbf8v',
                  'template_3tc327p', 
                  {
                    from_name:"Vaibhav Singh",
                    to_name :item.DonorName,
                    message:'Your request is rejected  now  You can not visit in our center',
                    reply_to:'vaibhavsengarnetid@gmail.com',
                    from_Email:item.Email
                  }, 
                  'user_IQODLOdj6sRnQAnI9S87a').then(res => {
                    console.log(res);
                    deletedata(item.DonorID)
                    window.alert("email sent to donor regarding approvement")
                })
                .catch(err => {
                    console.log(err);
                    window.alert(err)
                })
                }} >Reject</Button></td>
                <td><Button 
                onClick={()=>{
                
                  emailjs.send('service_b8mbf8v',
                  'template_3tc327p', 
                  {
                    from_name:"Vaibhav Singh",
                    to_name :item.DonorName,
                    message:'Your request is approved  now  You can visit in our center',
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
                >Approve</Button></td>
              </tr>)}
            </tbody>
          </Table>
 
        {/*</Container>*/}
        <Button variant="warning"> <Link to="/bloodcamp" tag="a" action >Back</Link></Button>
      </div>
      
 
    )
  }