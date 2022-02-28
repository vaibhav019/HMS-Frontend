import React,{useState,useEffect} from 'react'
import {Container,Form,FormControl,Button, Badge,} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios'
export default function Requesterdetailbyphn() {
    const params = useParams(); 
 const [data, setdata] = useState([
 
  ]);
  var heading = ['Name','Age','Gender','PhoneNumber', 'Email', 'Address', 'Requested BloodType','Requested On','Active','Action'];
 
  const fetchPost = async (search) => {
    const response = await fetch(
        `https://localhost:44314/api/BloodRequest/searchdata?search=${search}`       
      );                                              ////https://api.chucknorris.io/jokes/random
     const data = await response.json();
      setdata(data);
      //toast.success("data loaded successfully"); 
      console.log(data);       
      window.alert(data.message);
    };
    const updatedata=(data)=>{
        console.log("inside Updatedata method",params)
        console.log("params is working",params.DoctorID)
         console.log(params.DoctorID)
        axios.put(`https://localhost:44314/api/doctors/${params.DoctorID}`, data)
        .then(response => {
          console.log("Status: ", response.status);
          console.log("Data: ", response.data);
          window.alert("Doctor data updated")
          window.location = "/adminhome/get-doctor"
        }).catch(error => {
          console.error('Something went wrong!', error);
          window.alert("Something Wrong: Doctor data not updated Please enter valid details")
        });
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
    const [search,setsearch]=useState("");
  
    // useEffect(() => {
    //   fetchPost();
    // }, []);
    const handleSubmit = (e) => {
     
      console.log(search)
      fetchPost(search)
      e.preventDefault();
      
    };
 
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
    }}>
 
    <Container className="mt-3">
    <Form className="d-flex" onSubmit={handleSubmit}>
    <FormControl
      type="search"
      placeholder="Enter phone Number"
      className="me-2 "
      aria-label="Search"
      size="sm"
      style={{ width:270, padding: 3 }}
      name="search"
      onChange={(e)=>{
        setsearch(e.target.value);
      }}
    />
    <Button type="submit"  variant="outline-success">Search</Button>
  </Form>
    </Container>
 
{
 
}
 
    {/*<div className="form-group">
    <input type="text"
        placeholder="Search Patient by choosing any parameter"
        name="searchByName"
        className="form-control"
        onChange={this.onChangeSearchByName} />
</div>
<Button></Button>
<hr />
  */}
{
 (data.length>0)?
  <table bordered size="sm" variant="secondary" cellPadding={6} cellSpacing={10} style={{ width: 1000,marginTop:'20',marginLeft:'10' }}>
  <thead>
      <tr>
          {heading.map(head => <th>{head}</th>)}
      </tr>
  </thead>
  <tbody>
              {data.length>0 && data.map(item => <tr key={item.RequestID}>
                <td>{item.RequestorName}</td>
                <td>{item.RequestorAge}</td>
                <td>{item.RequestorGender}</td>
                <td>{item.RequestorPhoneNumber}</td>
                <td>{item.Email}</td>
                <td>{item.RequestorAddress}</td>
                <td>{item.RequestedBloodtype}</td>
                <td>{item.RequestedOn}</td>
                <td>{(item.IsActive)?'yes':'No'}</td>
        <td><Button size='small' style={{width:'130px'}}
        onClick={()=>{axios.patch(`https://localhost:44314/api/BloodRequest/${item.RequestID}`, {IsActive:!item.IsActive,isapproved:item.isapproved})
        .then(response => {
          console.log("Status: ", response.status);
          console.log("Data: ", response.data);
          setdata(data.filter((c)=> item.RequestID !==c.RequestID));
          //window.location="/search-blood-request"
         
        }).catch(error => {
          console.error('Something went wrong!', error);
          
        })}}
        >change status</Button></td>
        {/*<td><IconButton onClick={deletedata(item.PatientID)}><DeleteIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
        {/*<td><IconButton  ><EditIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
        <td><Badge bg="warning" text="dark">
        {item.isapproved?'Approved':'Not Approved'}
      </Badge>{' '}</td>
      
        </tr>)}
     
  </tbody>
</table>:
''
        }      
</div>
    
  )
}