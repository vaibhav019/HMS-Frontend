import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import {  Route, Switch, Link, BrowserRouter } from "react-router-dom";

import BloodDonationPage from './BloodDonationPage';
import BloodRequestPage from './BloodRequestPage';
import BookApointmentPage from './BookApointmentPage';
import BookVaccination from './BookVaccination';
import CarouselPage from '../Admin/Carousel';
import Feedback from './Feedback';
import GetApointmentPage from './GetApointmentPage';
import AddPatient from '../User/AddPatient';
import Payment from './Payment';
import Ambulance from './Ambulance'
import PatientDetailbymail from './PatientDetailbymail'
//import Register from '../Register';
import VaccinationDetails from '../Admin/VaccinationDetails';
import GetAppointmentbymail from './GetAppointmentbymail';

export default function UserHome() {
    return (
        <div >
            <BrowserRouter>

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
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/get-appointmentbyemail">
                               Cancel Appointment 
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/payment">
                                Payment
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" variant="dark" tag="a" to="/vaccination">
                                 Vaccination
                            </Link>
                           <Link className="list-group-item list-group-item-action bg-muted"  variant="dark" tag="a" to="/blood-donation">
                                Apply for Blood Donation
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted"  variant="dark" tag="a" to="/blood-request">
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
                    
                            <Route exact path="/" component={CarouselPage} />
                            <Route path="/add-patient" component={AddPatient}  />
                            <Route path="/book-appointment" component={BookApointmentPage} />
                            <Route path="/get-appointmentbyemail" component={GetAppointmentbymail}  />
                            <Route path="/book-vaccination" component={BookVaccination} />
                            <Route path="/add-feedback" component={Feedback}  />
                            <Route path="/blood-donation" component={BloodDonationPage} />
                            <Route path="/ambulance-user" component={Ambulance}  />
                            <Route path="/payment" component={Payment} />
                            <Route path="/getpatientbymail" component={PatientDetailbymail} />
                            <Route path="/add-feedback" component={Feedback} />
                            <Route path="/blood-request" component={BloodRequestPage} />
                            <Route path="/vaccination" component={VaccinationDetails} />
                            </Switch>






                    </Col>
                </Row>



                </BrowserRouter>

        </div>
    )
}