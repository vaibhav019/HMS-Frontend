import React  , { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';

export default function GetApointmentPage() {
  var heading = ['Name', 'email', 'address','phone','specialty','action'];

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
  // const fetchPost = async () => {
  // const response = await fetch(
  //     "https://api.chucknorris.io/jokes/random"
  //   );
  //  const data = await response.json();
  //   setPosts(data);
  // };
  
  useEffect(() => {
    
  }, []);
  return (
     
    <div className="App">
    <Container>
    <h4>All Appoitnment</h4>
    </Container>
    <table bordered size="sm" variant="secondary" cellPadding={10} cellSpacing={10} style={{ width: 1000,marginTop:'20',marginLeft:'10' }}>
                  <thead>
                      <tr>
                          {heading.map(head => <th>{head}</th>)}
                      </tr>
                  </thead>
                  <tbody>
                      {data.map(item =>  <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                        <td>{item.phone}</td>
                        <td>{item.speciality}</td>
                        <td>edit|delete</td>
                    </tr>)}
                  </tbody>
              </table>
      
    </div>
  );
}
