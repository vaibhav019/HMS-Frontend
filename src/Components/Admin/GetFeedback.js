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
    <div>
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
