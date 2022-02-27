import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Container,Form,FormControl,Button,} from 'react-bootstrap';
export default function CancelVaccination() {
 const [data, setdata] = useState([]);
  var heading = ['Full Name', 'Phone Number', 'Email', 'Gender', 'Address', 'Age', 'Aadhar No.', 'Vaccine type','Dose','Date','Slot Time'];

  const fetchPost = async (search) => {
    const response = await fetch(
        `https://localhost:44314/api/vaccination/getDetailByAadharNumber?search=${search}`      
      );                                                  ////https://api.chucknorris.io/jokes/random
     const data = await response.json();
      setdata(data);
      window.alert(data.message)
      //toast.success("data loaded successfully");
      console.log(data)
    };
    const [search,setsearch]=useState("");
   

    const deletedata=(vaccine_ID)=>{
 
      axios.delete(`https://localhost:44314/api/vaccination/${vaccine_ID}`).then(
        (response)=>{
          console.log(response);
          window.alert("vaccination Cancelled Successfully....");
         
          updatedata(vaccine_ID);
        },(error)=>{
          console.log("Something went wrong",error);
          window.alert("Something went wrong");
        }
      )
    }
    const updatedata=(id)=>{
      setdata(data.filter((c)=> c.vaccine_ID !=id));
    };
   







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
      placeholder="Enter Aadhar number"
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
 
    <table  responsive striped bordered hover size="sm" variant="secondary" cellPadding={5} cellSpacing={5} style={{ width: 900, marginTop: '20', marginLeft: '10' }}>
    <thead>
        <tr>
            {data.length>0 && heading.map(head => <th>{head}</th>)}
        </tr>
    </thead>
    <tbody >
        {data.length>0 && data.map(item => <tr key={item.vaccine_ID}>
            <td>{item.fullName}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.addresss}</td>
            <td>{item.age}</td>
            <td>{item.aadharNumber}</td>
            <td>{item.vaccineType}</td>
            <td>{item.dose}</td>
            <td>{item.date}</td>
            <td>{item.slotTime}</td>
            <td><Button size='small' onClick={() => {
                deletedata(item.vaccine_ID)
                alert("vaccination appointment cancelled")
            }}>Cancel</Button></td>
           
        </tr>)}

    </tbody>
</table>
        }      
</div>
   
  )
}