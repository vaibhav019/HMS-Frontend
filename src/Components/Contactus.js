import React,{useState,useEffect} from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function Contactus() {
  return (
    <div style={{ backgroundImage: `url(${"https://media.istockphoto.com/photos/male-nurse-taking-blood-sample-of-child-patient-n-clinic-picture-id1306247421?b=1&k=20&m=1306247421&s=170667a&w=0&h=PpxCAI3g_Qtvdb23BqI_oMfZi5b3joN9j2CKgeLyoGI="})`
    , 
    
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    width: '100%',
     height: '100%',
    opacity: .8,
    content: '""',
    display: 'block',
    marginTop:0
    }}>
      <h4>Dashboard</h4>
      <Container>
        <Row>

          <Col>
            <Card style={{ width: '100rem' }} bg='warning'>
              <Card.Body>
                <Card.Title>Address</Card.Title>
                {/*<Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>*/}
                <Card.Text>
                 City Hospital Hamirpur Uttar Pradesh,India
                 Email: cityhospital@gmail.com
                 Phone No: 7355742029
                </Card.Text>
               <Card.Link href="">Find Location</Card.Link>

              </Card.Body>
            </Card> </Col>
            <Row>

            <Col>
              <Card style={{ width: '100rem' }} bg='warning'>
                <Card.Body>
                 <Card.Link href="">Facebook</Card.Link>
                </Card.Body>
              </Card> </Col>
              <Col>
              <Card style={{ width: '100rem' }} bg='warning'>
                <Card.Body>
                 <Card.Link href="">Instagram</Card.Link>
                </Card.Body>
              </Card> </Col>
              <Col>
              <Card style={{ width: '100rem' }} bg='warning'>
                <Card.Body>
                 <Card.Link href="">Twitter</Card.Link>
                </Card.Body>
              </Card> </Col>
              <Col>
              <Card style={{ width: '100rem' }} bg='warning'>
                <Card.Body>
                 <Card.Link href="">Linkedin</Card.Link>
                </Card.Body>
              </Card> </Col>
              <Col>
              <Card style={{ width: '100rem' }} bg='warning'>
                <Card.Body>
                 <Card.Link href="">Kuku</Card.Link>
                </Card.Body>
              </Card> </Col>
          </Row>
        </Row>
      
      </Container>
      <Container className='my-3 '>
     
      
     </Container>
    </div>
  )
}
