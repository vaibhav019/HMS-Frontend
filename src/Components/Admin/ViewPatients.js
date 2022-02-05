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
      updatedata(PateintID);
    },(error)=>{
      console.log("Something went wrong",error);
      //window.alert("Something went wrong");
    }
  )
}
const updatedata=(id)=>{
  setdata(data.filter((c)=> c.PateintID !=id));
};
const fetchPost = async () => {
const response = await fetch(
    "https://localhost:44314/api/Patients"       //https://api.chucknorris.io/jokes/random
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
  <div className="App">
  <Container fluid='sm'color='secondary'style={{width:'1000px'}}>
  <Container>
  <h4>All Patients</h4>
  </Container>
  <table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10} style={{ width: 1000,marginTop:'20',marginLeft:'10' }}>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody >
                    {data.map(item =>  <tr key={item.PatientID}>
                      <td>{item.FirstName+' '+item.LastName}</td>
                      <td>{item.Email}</td>
                      <td>{item.Address}</td>
                      <td>{item.ContactNumber}</td>
                      <td>{item.gender}</td>
                      <td>{item.Age}</td>
                      <td>{item.Symptoms}</td>
                      <td>{item.Ward}</td>
                      <td><Button size='small'>Delete</Button></td>
                      {/*<td><IconButton onClick={deletedata(item.PatientID)}><DeleteIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
                      {/*<td><IconButton  ><EditIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
                      <td>{item.PatientID}</td>
                      </tr>)}
                   
                </tbody>
            </table>
            </Container>
  </div>
);
}
