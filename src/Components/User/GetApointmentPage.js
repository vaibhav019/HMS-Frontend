import React  , { useState, useEffect } from 'react'
import { Container,Button } from 'react-bootstrap';
import axios from 'axios';
import emailjs from 'emailjs-com';
export default function GetApointmentPage() {
  var heading = ['Name', 'email','Specialty','DoctorName','Day','date','time'];

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
  //const [isapproved,setisapproved] = useState(false)
  const deletedata=(appointmentID)=>{
   axios.delete(`https://localhost:44314/api/appointment/remove/${appointmentID}`).then(
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
 const approve=(appointment_ID)=>{
   axios.patch(`https://localhost:44314/api/appointment/${appointment_ID}`,{isapproved:true})
  .then(response => {
    console.log("Status: ", response.status);
    console.log("Data: ", response.data);
    //alert(response)
    //alert()
    setdata(data.filter((c)=> appointment_ID !==c.appointmentID));
   // alert(data)
   
  }).catch(error => {
    console.error('Something went wrong!', error);
    
  })
 }

  const fetchPost = async () => {
   const response = await fetch(
       "https://localhost:44314/api/appointment/getdata"
     );
    const data = await response.json();
    console.log(data,"data aa rha hai")
     setdata(data);
   };
   
  
  useEffect(() => {
     console.log(data,"outside fetch data update ho rha hai")
    fetchPost()
    
  }, [data]);
  return (
     
    <div className="App" >
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
                        <td><Button onClick={ ()=>{
                         approve(item.appointment_ID)
                        alert("appointment is approved.")
                        emailjs.send('service_b8mbf8v',
          'template_3tc327p', 
          {
            from_name:"City hospital",
            to_name :item.patientName,
            message:"Your request is approved now  You can visit in our center  on your time",
            reply_to:'vaibhavsengarnetid@gmail.com',
            from_Email:item.email
          }, 
          'user_IQODLOdj6sRnQAnI9S87a').then(res => {
            console.log(res);
            window.alert("email sent to donor regarding approvement")
        })
        .catch(err => {
            console.log(err);
            window.alert(err)
        })
     
                        }}  disabled={item.isapproved?true:false}>{item.isapproved?'Accepted':'Accept'}</Button></td>
                        <td><Button onClick={()=>{
                          emailjs.send('service_b8mbf8v',
          'template_3tc327p', 
          {
            from_name:"City Hospital",
            to_name :item.patientName,
            message:"Your request s rejected  now  You can not visit in our center ",
            reply_to:'vaibhavsengarnetid@gmail.com',
            from_Email:item.email
          }, 
          'user_IQODLOdj6sRnQAnI9S87a').then(res => {
            console.log(res);
            window.alert("email sent to donor regarding approvement")
        })
        .catch(err => {
            console.log(err);
            window.alert(err)
        })
          deletedata(item.appointment_ID)}}>{item.isapproved?'Cancle':'Reject'}</Button></td>
                      
                    </tr>)}
                  </tbody>
              </table>
      
    </div>
  );
}
