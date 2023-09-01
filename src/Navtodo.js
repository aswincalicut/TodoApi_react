import React from 'react'
import { Button, Card, Container, Nav, Navbar, NavDropdown, Table } from 'react-bootstrap'
import './App.css';

function Navtodo() {
  return (
    <div >
        {/* <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><b>Student Details</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <h1 className='mainTitle'>Student Details</h1>
            <li><b>Home</b></li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    <Nav className='menu'>
      <div >
        <ul>
          <li className='std'>MY TODO</li>
          <li className='cont'>Contact</li>
          <li>Home</li>
          
        </ul>
      </div>
    </Nav>

    {/* <section className='bodycolor'>
   <h1 className='welcome'>Welcome To Our Students Details Website</h1>
   </section> */}

  
    </div>

    

  )
}

export default Navtodo