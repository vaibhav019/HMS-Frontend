import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import {  Route, Switch, Link, BrowserRouter,NavLink } from "react-router-dom";
import UpdatePatient from './UpdatePatient'
import BloodDonationPage from './BloodDonationPage';
import BloodRequestPage from './BloodRequestPage';
import BookApointmentPage from './BookApointmentPage';
import BookVaccination from './BookVaccination';
import CarouselPage from '../Admin/Carousel';
import Feedback from './Feedback';
//import GetApointmentPage from './GetApointmentPage';
import AddPatient from '../User/AddPatient';
import Payment from './Payment';
import Ambulance from './Ambulance'
import PatientDetailbymail from './PatientDetailbymail'
//import Register from '../Register';
//import './userhome.css'
import VaccinationDetails from '../Admin/VaccinationDetails';
// import GetAppointmentbymail from './GetAppointmentbymail';
import CancleAppointmentPage from './CancleAppoinment';
import Donordetailbyphn from './Donordetailbyphn';
import Requesterdetailbyphn from './Requesterdetailbyphn';
import CancelVaccination from './CancelVaccination';
import BookAnotherAppointment from './BookAnotherAppointment'
export default function UserHome() {
    return (
        <BrowserRouter>
        <div  className="userhome">
        
       
                <Row >
                    <Col sm={2}>
                        <ListGroup >

                           
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark" action variant="dark" tag="a" to="/userhome/add-patient">
                                Add Patient Record
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark" action variant="dark" tag="a" to="/userhome/getpatientbymail">
                                 Patient Details
                            </NavLink>
                         
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark" action variant="dark" tag="a" to="/userhome/book-appointment">
                                Book Online Appoinment
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark" action variant="dark" tag="a" to="/userhome/cancle-appointment">
                               Cancel Appointment 
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark" action variant="dark" tag="a" to="/userhome/payment">
                                Payment
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark" variant="dark" tag="a" to="/userhome/book-vaccination">
                                 Book Vaccination
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark" variant="dark" tag="a" to="/userhome/cancel-vaccination">
                            Cancel Vaccination
                       </NavLink>
                           <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark"  variant="dark" tag="a" to="/userhome/blood-donation">
                                Apply for Blood Donation
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark"  variant="dark" tag="a" to="/userhome/blood-request">
                                Request for Blood
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark" action variant="dark" tag="a" to="/userhome/ambulance-user">
                                Ambulance
                            </NavLink>
                            <NavLink className="list-group-item list-group-item-action list-group-item-primary text-dark" action variant="dark" tag="a" to="/userhome/add-feedback">
                                Give  Feedback
                            </NavLink>
    
                            <Link className="list-group-item list-group-item-action list-group-item-primary text-dark" variant="dark" to="">
                                <div><br /></div>
                            </Link>

                        </ListGroup>
                    </Col>
                    <Col sm={10} >
                   
                        <Switch>
                    
                            <Route  exact path="/userhome" component={CarouselPage} />
                            <Route exact path="/userhome/add-patient" component={AddPatient}  />
                            <Route exact path="/userhome/book-appointment" component={BookApointmentPage} />
                          
                            <Route exact path="/userhome/book-vaccination" component={BookVaccination} />
                            <Route exact path="/userhome/add-feedback" component={Feedback}  />
                            <Route exact path="/userhome/blood-donation" component={BloodDonationPage} />
                            <Route exact path="/userhome/ambulance-user" component={Ambulance}  />
                            <Route exact path="/userhome/payment" component={Payment} />
                            <Route exact path="/userhome/getpatientbymail" component={PatientDetailbymail} />
                            <Route exact path="/userhome/add-feedback" component={Feedback} />
                            <Route exact path="/userhome/blood-request" component={BloodRequestPage} />
                            <Route exact path="/userhome/vaccination" component={VaccinationDetails} />
                            <Route exact path="/userhome/update-patient/:PateintID" component={UpdatePatient}/>
                            <Route exact path="/userhome/cancle-appointment" component={CancleAppointmentPage}  />
                            <Route exact path="/userhome/search-blood-donor" component={Donordetailbyphn} />
                            <Route exact path="/userhome/search-blood-request" component={Requesterdetailbyphn} />
                            <Route exact path="/userhome/book-vaccination" component={BookVaccination} />
                            <Route exact path="/userhome/cancel-vaccination" component={CancelVaccination} />
                            <Route exact path="/userhome/book-another-appointment" component={BookAnotherAppointment} />
    
                            </Switch>
 





                    </Col>
                </Row>



              

        </div>
        </BrowserRouter>
    )
}