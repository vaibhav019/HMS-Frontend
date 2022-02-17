import React , { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';
export default function ViewDoctors() {
  var heading = ['Name', 'email','phone','specialty','Working Days','Experience','action'];

const [data, setdata] = useState([
//   {
//     "id":1,
//     "name":"Leanne Graham",
//     "username":"Bret",
//     "email":"Sincere@april.biz",
//     "address":{
//        "street":"Kulas Light",
//        "suite":"Apt. 556",
//        "city":"Gwenborough",
//        "zipcode":"92998-3874",
//        "geo":{
//           "lat":"-37.3159",
//           "lng":"81.1496"
//        }
//     },
//     "phone":"1-770-736-8031 x56442",
//     "website":"hildegard.org",
//     "speciality":"neuro"
//  },
//  {
//     "id":2,
//     "name":"Ervin Howell",
//     "username":"Antonette",
//     "email":"Shanna@melissa.tv",
//     "address":{
//        "street":"Victor Plains",
//        "suite":"Suite 879",
//        "city":"Wisokyburgh",
//        "zipcode":"90566-7771",
//        "geo":{
//           "lat":"-43.9509",
//           "lng":"-34.4618"
//        }
//     },
//     "phone":"010-692-6593 x09125",
//     "website":"anastasia.net",
//     "speciality":"surgon"
//  }
]);
const fetchPost = async () => {
const response = await fetch(
    "https://localhost:44314/api/Doctors/ShowDoctor"
  );
 const data = await response.json();
  setdata(data);
};

useEffect(() => {
  fetchPost();
}, []);

const deletedata=(RequestID)=>{
  axios.delete(`https://localhost:44314/api/doctors/${RequestID}`).then(
    (response)=>{
      console.log(response);
      window.alert("one doctor data deleted");
     setdata(data.filter((c)=> RequestID !==c.DoctorID));
    },(error)=>{
      console.log("Something went wrong",error);
      window.alert("Something went wrong");
    }
  );
}

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
  <Container>
  <h4>All Doctors</h4>
  </Container>
  <Container color="secondary">
  <table bordered size="sm" variant="secondary"  cellPadding={10} cellSpacing={10} width='850'>
                <thead>
                    <tr>
                        {heading.map(head => <th>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>  <tr>
                      <td>{item.Name}</td>
                      <td>{item.Email}</td>
                      <td>{item.PhoneNumber}</td>
                      <td>{item.Speciality}</td>
                      <td>{item.WorkingDays}</td>
                      <td>{item.Experience}</td>
                      <td><Button onClick={()=>deletedata(item.DoctorID)} >Delete</Button></td>
                      <td><Button onClick={()=> window.location = `/update-doctor/${item.DoctorID}`} >Update</Button></td>
                  </tr>)}
                </tbody>
            </table>
            </Container>
  </div>
);

}
