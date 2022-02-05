import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import { BrowserRouter, Route, Routes, Link,Switch } from "react-router-dom";
import Ambulance from './Ambulance';
import BloodDonationPage from './BloodDonationPage';
import BookApointmentPage from './BookApointmentPage';
import BookVaccination from './BookVaccination';
import CarouselPage from '../Admin/Carousel';
import Feedback from './Feedback';
import GetApointmentPage from './GetApointmentPage';
//import AddPatient from '../Admin/AddPatient';
import Payment from './Payment';
//import Register from '../Register';


export default function UserHome() {
    return (
        <div >
            

                <Row>
                    <Col sm={3}>

                        <ListGroup >

                            {/* <Link  className="list-group-item list-group-item-action bg-muted"  action variant="dark" tag="a" to="">
                            Add Patient
                        </Link>
                        <Link  className="list-group-item list-group-item-action bg-muted"  action variant="dark" tag="a" to="">
                            Get All Patient Hystory
    </Link>*/}
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                Add Patient Record
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                Full History Of Patient
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                Book Online Appoinment
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                Appointment Details
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                Payment
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                 Vaccination
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                 Vaccination Details
                            </Link>
                            
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                Apply for Blood Donation
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                Request for Blood
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                Ambulance
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="">
                                Give  Feedback
                            </Link>

                            <Link className="list-group-item list-group-item-action bg-muted" variant="dark" to="">
                                <div><br /><br /><br /></div>
                            </Link>

                        </ListGroup>
                    </Col>
                    <Col sm={9}>
                    <CarouselPage/>
                        <Routes>
                    
                            <Route path="/" component={CarouselPage} />
                            {/*<Route path="/add-patient" component={AddPatient} exact />*/}
                            <Route path="/Book-Appoinment" component={BookApointmentPage} exact />
                            <Route path="/Get-Appointment" component={GetApointmentPage} exact />
                            <Route path="/Book-Vaccination" component={BookVaccination} exact />
                            <Route path="/Feedback" component={Feedback} exact />
                            <Route path="/Blood-Donation" component={BloodDonationPage} exact />
                            <Route path="/Ambulance" component={Ambulance} exact />
                            <Route path="/Payment" component={Payment} exact />
                            </Routes>






                    </Col>
                </Row>



          

        </div>
    )
}
