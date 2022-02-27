import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import CarouselPage from './Carousel'
import { BrowserRouter as Router, Route, Switch,Link,NavLink } from "react-router-dom";
//import AddPatient from '../User/AddPatient';
import ViewDoctors from '../User/ViewDoctors'
import Adddoctor from './Adddoctor';
import UpdateDoctor from './UpdateDoctor';
import BloodCamp from './BloodCamp';
import GetFeedback from './GetFeedback';
import ViewPatients from './ViewPatients';
import AddAmbulance from './AddAmbulance'
import Ambulance1 from '../User/Ambulance1'
import BloodDashboard from './Bloodcamp/BloodDashboard';
import BloodDonorDetails from './Bloodcamp/BloodDoonerDetails';
import BloodRequesterDetails from './Bloodcamp/BloodRequesterDetails';
import GetApointmentPage from '../User/GetApointmentPage';
import VaccinationDetails from './VaccinationDetails';

import GenerateBill from './Bill/GBill';
import UpdatePatient from '../User/UpdatePatient';
import GetVaccinationRequests from './GetVaccinationRequests';
import BloodUnit from './Bloodcamp/BloodUnit'
export default function AdminHome() {
  return (
    <Router>
    <div >
 

        <Row>
          <Col sm={2}>

            <ListGroup role="tablist" >
            
              {/*<Link className="list-group-item list-group-item-action bg-muted" variant="primary" action tag="a" to="/add-patient">
                Add Patient Records
  </Link>*/}
              <NavLink    className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"   tag="a" to="/adminhome/get-patients">
               Patient Records
              </NavLink>
              <NavLink className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/adminhome/add-doctor">
                Add Doctor Details
              </NavLink>
              
              <NavLink className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark" tag="a" to="/adminhome/get-doctor">
               Doctor Details
            </NavLink>
              <NavLink className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/adminhome/bloodcamp">
                Blood Camp
              </NavLink>
              <NavLink className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/adminhome/add-ambulance">
                Add Ambulance
              </NavLink>
              <NavLink className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/adminhome/get-ambulance">
                View Ambulance
              </NavLink>
              <NavLink className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/adminhome/get-feedback">
                feedback recieved
              </NavLink>
              <NavLink className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/adminhome/get-appointment">
             All Appoitments
            </NavLink>
            <NavLink className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/adminhome/get-vaccination">
             All Vacccination Booking Details
            </NavLink>
            <NavLink className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"   tag="a" to="/adminhome/generate-bill">
           Generate Bill
           </NavLink>

              <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  to="">
                <div><br /><br /><br /><br /><br /></div>
              </Link>

            </ListGroup>
          </Col>
          <Col sm={10}>
          
            <Switch>
              <Route exact path="/adminhome" component={CarouselPage} />
  {/*} <Route exact path="/add-patient" component={AddPatient} */}
              <Route exact path="/adminhome/get-patients" component={ViewPatients}/>
             
              <Route exact path="/adminhome/add-doctor" component={Adddoctor} />
              
              <Route exact path="/adminhome/bloodcamp" component={BloodDashboard} />
              <Route exact path="/adminhome/get-feedback" component={GetFeedback} />
              
              <Route exact path="/adminhome/get-doctor" component={ViewDoctors} />
              <Route exact path="/adminhome/add-ambulance" component={AddAmbulance} />
              <Route exact path="/adminhome/get-ambulance" component={Ambulance1} />
              <Route exact path="/adminhome/blood-request-data" component={BloodRequesterDetails} />
              <Route exact path="/adminhome/blood-donor-data" component={BloodDonorDetails} />
              <Route exact path="/adminhome/get-appointment" component={GetApointmentPage} />
              <Route exact path="/adminhome/get-vaccination" component={GetVaccinationRequests} />
              <Route exact path="/adminhome/update-doctor/:DoctorID" component={UpdateDoctor} />
              <Route exact path="/adminhome/generate-bill" component={GenerateBill} />
              <Route exact path="/adminhome/bloodunit" component={BloodUnit} />
             <Route exact path="/adminhome/update-patient/:PateintID" component={UpdatePatient}/>

            </Switch>



          </Col>
        </Row>

     
    </div>
    </Router>
  )
}
