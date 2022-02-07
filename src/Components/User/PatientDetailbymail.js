import React,{useState,useEffect} from 'react'
import {Container,Form,FormControl,Button,} from 'react-bootstrap';
export default function PatientDetailbymail() {
 const [data, setdata] = useState([

  ]);
  var heading = ['Name', 'Email', 'Address','ContactNumber','Gender','Age','Symptoms','Ward'];

  const fetchPost = async (search) => {
    const response = await fetch(
        `https://localhost:44314/api/Patients/getpateintbymail?search=${search}`       
      );                                                  ////https://api.chucknorris.io/jokes/random
     const data = await response.json();
      setdata(data);
      //toast.success("data loaded successfully");
      console.log(data)
    };
    const [search,setsearch]=useState("");
  

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
        data.map(item =>  <tr key={item.PatientID}>
        <td>{item.FirstName+' '+item.LastName}</td>
        <td>{item.Email}</td>
        <td>{item.Address}</td>
        <td>{item.ContactNumber}</td>
        <td>{item.gender}</td>
        <td>{item.Age}</td>
        <td>{item.Symptoms}</td>
        <td>{item.Ward}</td>
        <td><Button size='small' >Update</Button></td>
        {/*<td><IconButton onClick={deletedata(item.PatientID)}><DeleteIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
        {/*<td><IconButton  ><EditIcon sx={{ color: pink[500] }}/></IconButton></td>*/}
        <td>{item.PatientID}</td>
        </tr>)}
     
  </tbody>
</table>
        }      
</div>
    
  )
}
