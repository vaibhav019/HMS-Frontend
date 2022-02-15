import React,{useState,useEffect} from 'react'
import {Container,Form,FormControl,Button,} from 'react-bootstrap';
import axios from 'axios'
export default function PatientDetailbymail() {
 const [data, setdata] = useState([

  ]);
  var heading = ['Name', 'Email', 'Address','ContactNumber','Gender','Age','Symptoms','Ward'];

  const fetchPost = async (search) => {
    const response = await fetch(
        `https://localhost:44314/api/Patients/getpateintbymail?search=${search}`       
      );                                              ////https://api.chucknorris.io/jokes/random
     const data = await response.json();
      setdata(data);
      //toast.success("data loaded successfully"); 
      console.log(data);       
      window.alert(data.message);
    };
    const [search,setsearch]=useState("");
  

    const handleSubmit = (e) => {
     
      console.log(search)
      fetchPost(search)
      e.preventDefault();
      
    };
    const deletedata=(PatientID)=>{
      axios.delete(`https://localhost:44314/api/Patients/${PatientID}`).then(
        (response)=>{
          console.log(response);
          window.alert("one doctor data deleted");
         setdata(data.filter((c)=> PatientID !==c.PateintID));
        },(error)=>{
          console.log("Something went wrong",error);
          window.alert("Something went wrong");
        }
      );
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
    }}>

    <Container className="mt-3">
    <Form className="d-flex" onSubmit={handleSubmit}>
    <FormControl
      type="search"
      placeholder="Enter Email"
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
  <table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10} style={{ width: 900,marginTop:'20',marginLeft:'10' }}>
  <thead>
      <tr>
          {heading.map(head => <th>{head}</th>)}
      </tr>
  </thead>
  <tbody >
      {
        data.map(item =>  <tr key={item.PateintID}>
        <td>{item.FirstName+' '+item.LastName}</td>
        <td>{item.Email}</td>
        <td>{item.Address}</td>
        <td>{item.ContactNumber}</td>
        <td>{item.gender}</td>
        <td>{item.Age}</td>
        <td>{item.Symptoms}</td>
        <td>{item.Ward}</td>
        <td><Button size='small'onClick={()=> window.location=`/update-patient/${item.PateintID}`}>Update</Button></td>
        <td><Button onClick={()=>deletedata(item.PateintID)} >Delete</Button></td>
      
        </tr>)}
     
  </tbody>
</table>:
'No data Found'
        }      
</div>
    
  )
}
