import React , { useState, useEffect } from 'react'
import { Table,Button, Container } from 'react-bootstrap';
import axios from 'axios';
// import { toast } from 'react-toastify';
import {Link} from 'react-router-dom'
export default function BloodUnit() {
    const [data, setdata] = useState([])
    console.log(data, "stored")
    const fetchPost = async () => {
        console.log("created")
      const response = await fetch(
        "https://localhost:44314/api/BloodTypeUnit"       //https://api.chucknorris.io/jokes/random
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
          <h4>Blood Unit Details</h4>
          <Table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10} width="70%">
            <thead>
 
              <tr>
                <th>Blood Id</th>
                <th>Blood Type</th>
                <th>Blood Unit</th>
                
               
              </tr>
            </thead>
 
            <tbody>
              {data && data.map(item => <tr key={item.BloodId}>
                <td>{item.BloodId}</td>
                <td>{item.BloodTypes}</td>
                <td>{item.BloodUnit}</td>
              </tr>)}
            </tbody>
          </Table>
       {/*} </Container>*/}
       <Button variant="warning"> <Link to="/adminhome/bloodcamp" tag="a" action className="text-light">Back</Link></Button>
      </div>
      
 
    )
}