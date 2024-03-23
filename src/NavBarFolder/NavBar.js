import React from 'react';
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

function NavBar() {



  const [showInput, setShowInput] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
  setShowInput(true);
};

const handleSearch = () => {
  // Implement your search logic here
  console.log('Searching for:', searchQuery);
  setShowInput(false); // Hide the input after search
};




  return (
    <Navbar expand="lg" className="Nav">
      <Container fluid>
      <Form className="d-flex">
            <div className="search-container">
      {showInput ? (
        <div className="search-input-container">
          <input
            type="text"
            placeholder=""
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="search-button" onClick={handleSearch} />
        </div>
      ) : (
        <button className="search-button" onClick={handleSearchClick}>
          <FaSearch />
        </button>
      )}
    </div>
              
            </Form>
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
