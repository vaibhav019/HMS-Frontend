import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import CarouselPage from './Carousel'
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
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

export default function AdminHome() {
  return (
    <div >
      <Router>

        <Row>
          <Col sm={2}>

            <ListGroup role="tablist" >
            
              {/*<Link className="list-group-item list-group-item-action bg-muted" variant="primary" action tag="a" to="/add-patient">
                Add Patient Records
  </Link>*/}
              <Link    className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"   tag="a" to="/get-patients">
               Patient Records
              </Link>
              <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/add-doctor">
                Add Doctor Details
              </Link>
              <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark" tag="a" to="/get-doctor">
               Doctor Details
            </Link>
              <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/bloodcamp">
                Blood Camp
              </Link>
              <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/add-ambulance">
                Add Ambulance
              </Link>
              <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/get-ambulance">
                View Ambulance
              </Link>
              <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/get-feedback">
                feedback recieved
              </Link>
              <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/get-appointment">
             All Appoitments
            </Link>
            <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  tag="a" to="/get-vaccination">
             All Vacccination Booking Details
            </Link>
            <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"   tag="a" to="/generate-bill">
           Generate Bill
           </Link>

              <Link className="list-group-item list-group-item-action  list-group-item-primary text-dark text-dark"  to="">
                <div><br /><br /><br /><br /><br /></div>
              </Link>

            </ListGroup>
          </Col>
          <Col sm={10}>
          
            <Switch>
              <Route exact path="/adminhome" component={CarouselPage} />
  {/*} <Route exact path="/add-patient" component={AddPatient} */}
              <Route exact path="/get-patients" component={ViewPatients}/>
             
              <Route exact path="/add-doctor" component={Adddoctor} />
              <Route exact path="/bloodcamp" component={BloodDashboard} />
              <Route exact path="/get-feedback" component={GetFeedback} />
              
              <Route exact path="/get-doctor" component={ViewDoctors} />
              <Route exact path="/add-ambulance" component={AddAmbulance} />
              <Route exact path="/get-ambulance" component={Ambulance1} />
              <Route exact path="/blood-request-data" component={BloodRequesterDetails} />
              <Route exact path="/blood-donor-data" component={BloodDonorDetails} />
              <Route exact path="/get-appointment" component={GetApointmentPage} />
              <Route exact path="/get-vaccination" component={GetVaccinationRequests} />
              <Route exact path="/update-doctor/:DoctorID" component={UpdateDoctor} />
              <Route exact path="/generate-bill" component={GenerateBill} />
             {/*} <Route exact path="/update-patient/:PateintID" component={UpdatePatient}/>*/}
             
            </Switch>



          </Col>
        </Row>

      </Router>
    </div>
  )
}
