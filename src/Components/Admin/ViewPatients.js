import React , { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function ViewPatients() {
  var heading = ['Name', 'Email', 'Address','ContactNumber','Gender','Age','Symptoms','Ward'];

const [data, setdata] = useState([

]);
const deletedata=(PateintID)=>{
  
  axios.delete(`https://localhost:44314/api/Patients/${PateintID}`).then(
    (response)=>{
      console.log(response);
      window.alert("data deleted");
      setdata(data.filter((c)=> PateintID !=c.PateintID));
    },(error)=>{
      console.log("Something went wrong",error);
      //window.alert("Something went wrong");
    }
  )
}
// const updatedata=(id)=>{
//   setdata(data.filter((c)=> c.PateintID !=id));
// };
const fetchPost = async () => {
const response = await fetch(
    "https://localhost:44314/api/Patients"       //https://api.chucknorris.io/jokes/random
  );
 const data = await response.json();
  setdata(data);
  //toast.success("data loaded successfully");
  console.log(data)
  console.table(data)
};

useEffect(() => {
  fetchPost();
}, []);
return (
  <div className="App" style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`
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
  {/*<Container fluid='sm'color='secondary'style={{width:'1000px',marginLeft:'1'}}>*/}
  <Container>
  <h4>All Patients</h4>
  </Container>
  <table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10} style={{ width: 900,marginTop:'20' }}>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody >
                    {data.map(item =>  <tr key={item.PateintID}>
                      <td>{item.FirstName+' '+item.LastName}</td>
                      <td>{item.Email}</td>
                      <td>{item.Address}</td>
                      <td>{item.ContactNumber}</td>
                      <td>{item.gender}</td>
                      <td>{item.Age}</td>
                      <td>{item.Symptoms}</td>
                      <td>{item.Ward}</td>
                      <td><Button size='small' onClick={()=>deletedata(item.PateintID)}>Delete</Button></td>
                      {/*<td><IconButton onClick={deletedata(item.PatientID)}><DeleteIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
                      {/*<td><IconButton  ><EditIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
                      <td>{item.PatientID}</td>
                      </tr>)}
                   
                </tbody>
            </table>
            {/*</Container>*/}
  </div>
);
}
