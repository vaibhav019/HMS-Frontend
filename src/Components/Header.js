//import { RotateLeftRounded } from '@mui/icons-material'
import React from 'react'
import {
 Container,  
  Navbar, 
  Nav,
  NavDropdown

} from 'react-bootstrap'


export default function Header({role}) {
  return (
    
    <div className="sticky-top">
    <Navbar bg="primary"  className="text-light" expand="lg">
  <Container  className="text-light">
    <Navbar.Brand href="/home"  className="text-light">City Hospital</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto text-light">
        <Nav.Link href="/home" className="text-light">Home</Nav.Link>
        <Nav.Link href="/contactus" className="text-light" >Contact Us</Nav.Link>
       
        <Nav.Link href="/aboutus" className="text-light">About Us</Nav.Link>
        <NavDropdown title='Profile' id="basic-nav-dropdown" className="text-light">
          <NavDropdown.Item href="/login" >Logout</NavDropdown.Item>
          
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
    
  )
}
