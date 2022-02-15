import React, { useEffect, useState } from 'react'
import { Table, Container } from 'react-bootstrap';
export default function GetFeedback() {

  const [data,setdata]=useState([])
  const fetchPost = async () => {
    console.log("created")
  const response = await fetch(
    "https://localhost:44314/api/Feedbacks/ShowFeedback"       //https://api.chucknorris.io/jokes/random
  );
  console.log("feedback")
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
    opacity: 1,
    content: '""',
    display: 'block',
    marginTop:0
    }}>
    <Container fluid='sm' color='secondary' style={{ width: '800px' }} >
    <h5>All Feedbacks</h5>
    <Table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10}>
      <thead>

        <tr>
          <th>Name</th>
          <th>Phone NUmber</th>
          <th>Comment</th>
          <th>Rating</th>
        </tr>
      </thead>

      <tbody>
        {data.map(item => <tr key={item.FeedbackId}>
          <td>{item.Name}</td>
          <td>{item.PhoneNumber}</td>
          <td>{item.Comment}</td>
          <td>{item.Rating}</td>
        </tr>)}
      </tbody>
    </Table>

  </Container>
    
    </div>
  )
}
