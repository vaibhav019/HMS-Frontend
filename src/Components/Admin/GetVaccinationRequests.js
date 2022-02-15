import React , { useState, useEffect } from 'react'
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';
export default function GetVaccinationRequests() {



    var heading = ['Full Name', 'Phone Number', 'Email', 'Gender', 'Address', 'Age', 'Aadhar No.', 'Vaccine type','Dose','Date','Slot Time'];

    const [data, setdata] = useState([

    ]);
    const deletedata = (vaccine_ID) => {

        axios.delete(`https://localhost:44314/api/vaccination/${vaccine_ID}`).then(
            (response) => {
                console.log(response);
                window.alert("data deleted");
                setdata(data.filter((c) => vaccine_ID != c.vaccine_ID));
            }, (error) => {
                console.log("Something went wrong", error);
                //window.alert("Something went wrong");
            }
        )
    }
    // const updatedata=(id)=>{
    //   setdata(data.filter((c)=> c.PateintID !=id));
    // };
    const fetchPost = async () => {
        const response = await fetch(
            "https://localhost:44314/api/vaccination"       //https://api.chucknorris.io/jokes/random
        );
        const data = await response.json();
        setdata(data);
        //toast.success("data loaded successfully");
        console.log(data)
    };

    useEffect(() => {
        fetchPost();
    }, []);
    return (


        <div className="App" style={{
            backgroundImage: `url(${"https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`
            , position: 'absolute',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '100%',
            height: '100%',
            opacity: 1,
            content: '""',
            display: 'block',
            marginTop: 0
        }}>
            <Container fluid='sm' color='secondary' style={{ width: '800px',marginLeft:'1px' }}>
                <Container>
                    <h4>All Vaccination requests</h4>
                </Container>
                <table  responsive striped bordered hover size="sm" variant="secondary" cellPadding={5} cellSpacing={5} style={{ width: 900, marginTop: '20', marginLeft: '10' }}>
                    <thead>
                        <tr>
                            {heading && heading.map(head => <th>{head}</th>)}
                        </tr>
                    </thead>
                    <tbody >
                        {data && data.map(item => <tr key={item.vaccine_ID}>
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
                            <td><Button size='small' onClick={() => deletedata(item.vaccine_ID)}>Delete</Button></td>
                            <td>{item.vaccine_ID}</td>
                        </tr>)}

                    </tbody>
                </table>
            </Container>
        </div>


    )
}
