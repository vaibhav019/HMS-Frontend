import React  , { useState, useEffect } from 'react'
import { Container,Button } from 'react-bootstrap';
import axios from 'axios';
import emailjs from 'emailjs-com';
export default function GetApointmentPage() {
  var heading = ['Name', 'email','Specialty','DoctorName','Day','date','time'];

  const [data, setdata] = useState([
    {
      "id":1,
      "name":"Leanne Graham",
      "username":"Bret",
      "email":"Sincere@april.biz",
      "address":{
         "street":"Kulas Light",
         "suite":"Apt. 556",
         "city":"Gwenborough",
         "zipcode":"92998-3874",
         "geo":{
            "lat":"-37.3159",
            "lng":"81.1496"
         }
      },
      "phone":"1-770-736-8031 x56442",
      "website":"hildegard.org",
      "speciality":"neuro"
   },
   {
      "id":2,
      "name":"Ervin Howell",
      "username":"Antonette",
      "email":"Shanna@melissa.tv",
      "address":{
         "street":"Victor Plains",
         "suite":"Suite 879",
         "city":"Wisokyburgh",
         "zipcode":"90566-7771",
         "geo":{
            "lat":"-43.9509",
            "lng":"-34.4618"
         }
      },
      "phone":"010-692-6593 x09125",
      "website":"anastasia.net",
      "speciality":"surgon"
   }
  ]);
  const [isapproved,setisapproved] = useState(false)
  const deletedata=(appointmentID)=>{
   axios.delete(`https://localhost:44314/api/appointments/remove/${appointmentID}`).then(
     (response)=>{
       console.log(response);
       window.alert("one appointment rejected");
      setdata(data.filter((c)=> appointmentID !==c.appointmentID));
     },(error)=>{
       console.log("Something went wrong",error);
       window.alert("Something went wrong");
     }
   );
 }
 

  const fetchPost = async () => {
   const response = await fetch(
       "https://localhost:44314/api/appointments/getdata"
     );
    const data = await response.json();
    console.log(data,"data aa rha hai")
     setdata(data);
   };
   
  
  useEffect(() => {
     console.log(data,"outside fetch data update ho rha hai")
    fetchPost()
  }, []);
  return (
     
    <div className="App" style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`
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
    <Container>
    <h4>All Appoitnment</h4>
    </Container>
    <table bordered size="sm" variant="secondary" cellPadding={7} cellSpacing={7} style={{ width: 920,marginTop:'20',marginLeft:'10' }}>
                  <thead>
                      <tr>
                          {heading && heading.map(head => <th>{head}</th>)}
                      </tr>
                  </thead>
                  <tbody>
                      { data && data.map(item =>  <tr key={item.appointment_ID}>
                        <td>{item.patientName}</td>
                        <td>{item.email}</td>
                        <td>{item.Speciality}</td>
                        <td>{item.doctorName}</td>
                        <td>{item.day}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td> 
                        <td><Button onClick={()=>{setisapproved(true)
                        alert("appointment is approved.")
                        emailjs.send('service_b8mbf8v',
          'template_3tc327p', 
          {
            from_name:"Vaibhav Singh",
            to_name :item.DonorName,
            message:"Your request is approved now  You can visit in our center  on your time",
            reply_to:'vaibhavsengarnetid@gmail.com',
            from_Email:item.Email
          }, 
          'user_IQODLOdj6sRnQAnI9S87a').then(res => {
            console.log(res);
            window.alert("email sent to donor regarding approvement")
        })
        .catch(err => {
            console.log(err);
            window.alert(err)
        })

                        }}>Accept</Button></td>
                        <td><Button onClick={()=>{
                          emailjs.send('service_b8mbf8v',
          'template_3tc327p', 
          {
            from_name:"Vaibhav Singh",
            to_name :item.DonorName,
            message:"Your request is rejected  now  You can not visit in our center ",
            reply_to:'vaibhavsengarnetid@gmail.com',
            from_Email:item.Email
          }, 
          'user_IQODLOdj6sRnQAnI9S87a').then(res => {
            console.log(res);
            window.alert("email sent to donor regarding approvement")
        })
        .catch(err => {
            console.log(err);
            window.alert(err)
        })
                          deletedata(item.appointment_ID)}}>Reject</Button></td>
                       
                    </tr>)}
                  </tbody>
              </table>
      
    </div>
  );
}
