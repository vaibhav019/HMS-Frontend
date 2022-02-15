import React from 'react'
import { Container } from 'react-bootstrap'

export default function Aboutus() {
  return (
    <div style={{
      backgroundImage: `url(${"https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"})`
      , position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      width: '100%',
      height: '100%',
      opacity: .8,
      content: '""',
      display: 'block',
      marginTop: 0
    }}>

      <Container>
        <div className="jumbotron">
          <h1 className="display-4">City Hospital</h1>
          <p className="lead">Today’s web-based technology offers many online services in almost every field.  Every major industry is converting and establishing a digital front for all their major operations to get closer to the booming digital market. The primary objective of this project is to define, implement and build a  system that offers support for the hospital Management System. Our simple and user-friendly website will help every user out there to solve their problems. Starting from adding records, they can show available doctors' names along with specialty on their selected dates, people can donate blood receive notifications, they can request blood also so that they don’t have to face problems. Admin will update everything from time to time. Proper payment facility, Ambulance service, etc. makes our website perfect for users. Your feedback will help us to explore more. Thank You…..</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </Container>

    </div>
  )
}
