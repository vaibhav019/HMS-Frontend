import React from 'react'
import { Row,Col, ListGroup, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddPatient from './AddPatient'
import PatientDetailbymail from './PatientDetailbymail'
import BookAppointmentPage from './BookApointmentPage'
import GetApointmentPage from './GetApointmentPage'
import Ambulance from './Ambulance'
import BloodDonationPage from './BloodDonationPage'
import BloodRequestPage from './BloodRequestPage'
export default function UserHome() {
  return (
    <div>
    
      <Row>
      <Col sm={3}>
      <ListGroup>
      <Link className="list-group-item list-group-item-action bg-muted " variant="dark">Add Patient</Link>
      <Link className="list-group-item list-group-item-action bg-muted " variant="dark">Patient History By Mail</Link>
      <Link className="list-group-item list-group-item-action bg-muted " variant="dark">book Online Appointment</Link>
      <Link className="list-group-item list-group-item-action bg-muted " variant="dark">Cancel appointment</Link>
      <Link className="list-group-item list-group-item-action bg-muted " variant="dark">Apply for Blood Donation</Link>
      <Link className="list-group-item list-group-item-action bg-muted " variant="dark">Apply Blood request</Link>
      <Link className="list-group-item list-group-item-action bg-muted " variant="dark">Ambulances</Link>
      <Link className="list-group-item list-group-item-action bg-muted " variant="dark">Give Feedback </Link>
      <Link className="list-group-item list-group-item-action bg-muted" variant="dark"  >
                <div><br /><br /><br /><br /><br /></div>
              </Link>
      </ListGroup>
      </Col>
      <Col sm={9}>
      <AddPatient/>
      <br/><br/>
      <hr/>
      <PatientDetailbymail/>
      <br/><br/>
      <hr/>
      <Ambulance/>
      <br/><br/>
      <hr/>
      <BookAppointmentPage/>
      <br/><br/>
      <hr/>
      <GetApointmentPage/>
      <br/><br/>
      <hr/>
      <BloodDonationPage/>
     
      </Col>
      </Row>
     
    </div>
  )
}
