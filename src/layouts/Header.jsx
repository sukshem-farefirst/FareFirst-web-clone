import React from "react";
import Logo from "../assets/logo-image.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import India from "../assets/india.png";
import "../css/header.css"; 
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar className="header-navbar" variant="dark" expand="lg">
      <Container fluid className="header-container">
        
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="Logo" className="header-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basicnavbar">

          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="navlinkclass">Flights</Nav.Link>
            <Nav.Link as={Link} to="https://www.farefirst.com/hotels" className="navlinkclass">Hotels</Nav.Link>
            <Nav.Link as={Link} to="https://www.farefirst.com/cars" className="navlinkclass">Cars</Nav.Link>
            <Nav.Link as={Link} to="https://www.farefirst.com/nomad" className="navlinkclass">Nomad</Nav.Link>
            <Nav.Link as={Link} to="https://www.farefirst.com/esim" className="navlinkclass">
              eSIM <span className="badge text-bg-danger">New</span>
            </Nav.Link>
            <Nav.Link as={Link} to="https://www.farefirst.com/visa" className="navlinkclass">Visa</Nav.Link>
            <Nav.Link as={Link} to="https://www.farefirst.com/experience" className="navlinkclass">Experience</Nav.Link>
          </Nav>

          <Nav className="header-right">
            <Nav.Link as={Link} to="https://www.farefirst.com/in/offers" className="navlinkclass">Offers</Nav.Link>
            <Nav.Link as={Link} to="https://www.farefirst.com" className="navlinkclass">
              <img src={India} alt="India Flag" className="header-flag" /> INR
            </Nav.Link>
            <Nav.Link as={Link} to="https://www.farefirst.com" className="navlinkclass">Login</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
