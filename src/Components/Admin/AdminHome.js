import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import CarouselPage from './Carousel'
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import AddPatient from './AddPatient';

import Adddoctor from './Adddoctor';
import BloodCamp from './BloodCamp';
import GetFeedback from './GetFeedback';
import ViewPatients from './ViewPatients';

export default function AdminHome() {
  return (
    <div >
      <Router>

        <Row>
          <Col sm={3}>

            <ListGroup >
            
              <Link className="list-group-item list-group-item-action bg-muted" variant="primary" action tag="a" to="/add-patient">
                Add Patient Records
              </Link>
              <Link className="list-group-item list-group-item-action bg-muted" variant="dark" tag="a" to="/get-patients">
               Patient Records
              </Link>
            
              <Link className="list-group-item list-group-item-action bg-muted" variant="dark" tag="a" to="/add-doctor">
                Add Doctor Details
              </Link>
              <Link className="list-group-item list-group-item-action bg-muted" variant="dark" tag="a" to="/add-doctor">
               Doctor Details
            </Link>
              <Link className="list-group-item list-group-item-action bg-muted" variant="dark" tag="a" to="/bloodcamp">
                Blood Camp
              </Link>
              <Link className="list-group-item list-group-item-action bg-muted" variant="dark" tag="a" to="/get-feedback">
                feedback recieved
              </Link>

              <Link className="list-group-item list-group-item-action bg-muted" variant="dark"  to="">
                <div><br /><br /><br /><br /><br /></div>
              </Link>

            </ListGroup>
          </Col>
          <Col sm={9}>
          
            <Routes>
              <Route exact path="/" component={CarouselPage} />
              <Route exact path="/add-patient" component={AddPatient} />
              <Route exact path="/get-patients" component={ViewPatients}/>
             
              <Route exact path="/add-doctor" component={Adddoctor} />
              <Route exact path="/bloodcamp" component={BloodCamp} />
              <Route exact path="/get-feedback" component={GetFeedback} />
            </Routes>



          </Col>
        </Row>

      </Router>
    </div>
  )
}
