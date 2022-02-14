import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Container,Form,FormControl,Button,} from 'react-bootstrap';
export default function CancleAppointmentPage() {
 const [data, setdata] = useState([

  ]);
  var heading = ['Patient Name', 'Email', 'Speciality','Doctor Name','Day','Date','Time'];

  const fetchPost = async (search) => {
    const response = await fetch(
        `https://localhost:44314/api/appointments/searchappointmentdetails?search=${search}`      
      );                                                  ////https://api.chucknorris.io/jokes/random
     const data = await response.json();
      setdata(data);
      //toast.success("data loaded successfully");
      console.log(data)
    };
    const [search,setsearch]=useState("");
   

    const deletedata=(appointment_ID)=>{
 
      axios.delete(`https://localhost:44314/api/appointments/cancel/${appointment_ID}`).then(
        (response)=>{
          console.log(response);
          window.alert("Appointment cancelled Successfully....");
          window.location="/book-another-Appointment"
          updatedata(appointment_ID);
        },(error)=>{
          console.log("Something went wrong",error);
          //window.alert("Something went wrong");
        }
      )
    }
    const updatedata=(id)=>{
      setdata(data.filter((c)=> c.PateintID !=id));
    };
   







    const handleSubmit = (e) => {
     
      console.log(search)
      fetchPost(search)
      e.preventDefault();
     
    };


  return (
    <div>

    <Container className="mt-3">
    <Form className="d-flex" onSubmit={handleSubmit}>
    <FormControl
      type="search"
      placeholder="Search"
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
 
  <table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10} style={{ width: 1000,marginTop:'20',marginLeft:'10' }}>
  <thead>
      <tr>
          {heading.map(head => <th>{head}</th>)}
      </tr>
  </thead>
  <tbody >
      {
        data.map(item =>  <tr key={item.appointment_ID}>
        <td>{item.patientName}</td>
        <td>{item.email}</td>
        <td>{item.Speciality}</td>
        <td>{item.doctorName}</td>
        <td>{item.day}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
        <td><Button size='small' onClick={()=>deletedata(item.appointment_ID)} >Cancle</Button></td>
        <td><Button onClick={()=> window.location = `/reschedule-appointment/${item.appointment_ID}`} >Reschedule</Button></td>
        {/*<td><IconButton onClick={deletedata(item.PatientID)}><DeleteIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
        {/*<td><IconButton  ><EditIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
       
        </tr>)}
     
  </tbody>
</table>
        }      
</div>
   
  )
}