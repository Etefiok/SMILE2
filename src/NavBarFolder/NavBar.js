import React from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar expand="lg" className="Nav">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <div className="Nav"> */}

 
            <div className="">
              <div className="image">
                <img src={require("../Images.png/lok.png")} alt="" />
                <div className="CompanyName">
                  <p>Smile Integrated Global Services</p>
                </div>
              </div>
            </div>

            <Form className="d-flex">
            <Button variant="outline-success">Search</Button>
              <Form.Control 
                type="search"
                className="me-2"
                // aria-label="Search"                
              />
              
            </Form>

            <Nav className='navbarbutton'
            //   className="me-auto my-2 my-lg-0"
            //   style={{ maxHeight: '100px', overflowY: 'auto' }}
            >
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Track Shipment</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
            </Nav>
          {/* </div> */}
        </Navbar.Collapse>
      </Container>
      </Navbar>


  );
}

export default NavBar;
