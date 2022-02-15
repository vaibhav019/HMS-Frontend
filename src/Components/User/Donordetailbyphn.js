import React,{useState,useEffect} from 'react'
import {Container,Form,FormControl,Button,} from 'react-bootstrap';
import axios from 'axios'
import emailjs from 'emailjs-com';
export default function Donordetailbyphn() {
 const [data, setdata] = useState([
 
  ]);

  const deletedata = (id) => {
  
    axios.delete(`https://localhost:44314/api/vaccination/${id}`).then(
        (response) => {
            console.log(response);
            window.alert("data deleted");
            setdata(data.filter((c) => id != c.DonorID));
        }, (error) => {
            console.log("Something went wrong", error);
            //window.alert("Something went wrong");
        }
    )
}
  var heading = ['Name','Age','Gender', 'Address', 'BloodType','PhoneNumber', 'Email','Weight', 'IsHealthy'];
 
  const fetchPost = async (search) => {
    const response = await fetch(
        `https://localhost:44314/api/BloodDonor/Searchdata?search=${search}`       
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
      placeholder="Enter Phone Number"
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
          {heading && heading.map(head => <th>{head}</th>)}
      </tr>
  </thead>
  <tbody>
              {data && data.map(item => <tr key={item.DonorID}>
                <td>{item.DonorName}</td>
                <td>{item.DonorAge}</td>
                <td>{item.DonorGender}</td>
                <td>{item.DonorAddress}</td>
                <td>{item.DonorBloodtype}</td>
                <td>{item.DonorPhoneNumber}</td>
                <td>{item.Email}</td>
                <td>{item.DonorWeight}</td>
                <td>{(item.Ishealthy && item.DonorWeight>50)?'yes':'No'}</td>
        <td>
        {(!item.Ishealthy && item.DonorWeight<=50)?<Button size='small' onClick={()=>{
          emailjs.send('service_b8mbf8v',
          'template_3tc327p', 
          {
            from_name:"Vaibhav Singh",
            to_name :item.DonorName,
            message:'Your request is rejected  now  You can not visit in our center',
            reply_to:'vaibhavsengarnetid@gmail.com',
            from_Email:item.Email
          }, 
          'user_IQODLOdj6sRnQAnI9S87a').then(res => {
            console.log(res);
            deletedata(item.DonorID)
            window.alert("email sent to donor regarding approvement")
        })
        .catch(err => {
            console.log(err);
            window.alert(err)
        })
          deletedata(item.DonorID)
        }} >Reject</Button>:''}

        </td>
       
        
        </tr>)}
     
  </tbody>
</table>:
''
        }      
</div>
    
  )
}