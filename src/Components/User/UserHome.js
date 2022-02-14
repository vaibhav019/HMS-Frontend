import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import {  Route, Switch, Link, BrowserRouter } from "react-router-dom";
import UpdatePatient from './UpdatePatient'
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
//import './userhome.css'
import VaccinationDetails from '../Admin/VaccinationDetails';
import GetAppointmentbymail from './GetAppointmentbymail';
import CancleAppointmentPage from './CancleAppoinment';
import Donordetailbyphn from './Donordetailbyphn';
import Requesterdetailbyphn from './Requesterdetailbyphn';
export default function UserHome() {
    return (
        <div  className="userhome">
            <BrowserRouter>
       
                <Row >
                    <Col sm={3}>
                        <ListGroup >

                           
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/add-patient">
                                Add Patient Record
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/getpatientbymail">
                                 Patient Details
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/book-appointment">
                                Book Online Appoinment
                            </Link>
                            <Link className="list-group-item list-group-item-action bg-muted" action variant="dark" tag="a" to="/cancle-appointment">
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
                    
                            <Route  exact path="/" component={CarouselPage} />
                            <Route exact path="/add-patient" component={AddPatient}  />
                            <Route exact path="/book-appointment" component={BookApointmentPage} />
                            <Route exact path="/get-appointmentbyemail" component={GetAppointmentbymail}  />
                            <Route exact path="/book-vaccination" component={BookVaccination} />
                            <Route exact path="/add-feedback" component={Feedback}  />
                            <Route exact path="/blood-donation" component={BloodDonationPage} />
                            <Route exact path="/ambulance-user" component={Ambulance}  />
                            <Route exact path="/payment" component={Payment} />
                            <Route exact path="/getpatientbymail" component={PatientDetailbymail} />
                            <Route exact path="/add-feedback" component={Feedback} />
                            <Route exact path="/blood-request" component={BloodRequestPage} />
                            <Route exact path="/vaccination" component={VaccinationDetails} />
                           <Route exact path="/update-patient/:PateintID" component={UpdatePatient}/>
                           <Route exact path="/cancle-appointment" component={CancleAppointmentPage}  />
                           <Route  exact path="/search-blood-donor" component={Donordetailbyphn} />
                           <Route exact path="/search-blood-request" component={Requesterdetailbyphn} />
                            </Switch>






                    </Col>
                </Row>



                </BrowserRouter>

        </div>
    )
}