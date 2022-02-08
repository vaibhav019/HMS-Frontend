import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import {  Route, Switch, Link } from "react-router-dom";

import BloodDonationPage from './BloodDonationPage';
import BookApointmentPage from './BookApointmentPage';
import BookVaccination from './BookVaccination';
import CarouselPage from '../Admin/Carousel';
import Feedback from './Feedback';
import GetApointmentPage from './GetApointmentPage';
import AddPatient from '../User/AddPatient';
import Payment from './Payment';
import Ambulance1 from './Ambulance1'
import PatientDetailbymail from './PatientDetailbymail'
//import Register from '../Register';


export default function UserHome() {
    return (
        <div >
            

                <Row>
                    <Col sm={3}>
                        <ListGroup >

                           
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/add-patient">
                                Add Patient Record
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/getpatientbymail">
                                 Patient hystory bu mail
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/book-appointment">
                                Book Online Appoinment
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/user">
                               Cancel Appointment 
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/payment">
                                Payment
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" variant="dark" tag="a" to="/user">
                                 Vaccination
                            </Link>
                           <Link className="list-group-item list-group-item-action bg-muted"  variant="dark" tag="a" to="/user">
                                Apply for Blood Donation
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted"  variant="dark" tag="a" to="/user">
                                Request for Blood
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/ambulance-user">
                                Ambulance
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/add-feedback">
                                Give  Feedback
                            </Link>

                            <Link className="list-group-item list-group-item-action bg-muted" variant="dark" to="">
                                <div><br /><br /><br /></div>
                            </Link>

                        </ListGroup>
                    </Col>
                    <Col sm={9}>
                   
                        <Switch>
                    
                            <Route exact path="/user" component={CarouselPage} />
                            <Route path="/add-patient" component={AddPatient}  />
                            <Route path="/book-appointment" component={BookApointmentPage} />
                            <Route path="/get-appointmentbyemail" component={GetApointmentPage}  />
                            <Route path="/book-vaccination" component={BookVaccination} />
                            <Route path="/add-feedback" component={Feedback}  />
                            <Route path="/blood-donation" component={BloodDonationPage} />
                            <Route path="/ambulance-user" component={Ambulance1}  />
                            <Route path="/payment" component={Payment} />
                            <Route path="/getpatientbymail" component={PatientDetailbymail} />
                            <Route path="/add-feedback" component={Feedback} />
 
                            </Switch>






                    </Col>
                </Row>



          

        </div>
    )
}
