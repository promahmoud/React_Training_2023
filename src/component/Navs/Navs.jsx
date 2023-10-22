import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Navs.css';
import Logo from './../../assets/logo.png'

function Navs() {
return (
      <Navbar expand="lg" className=""  sticky="top">
      <Container>
            <Navbar.Brand href="#home">
                  <img src={Logo} title="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Explore Foods</Nav.Link>
            <Nav.Link href="#link">Reviews</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            </Nav>
            <Nav>
                  <Nav.Link href="#" className="navbar-right">123456789</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>
      </Navbar>
      );
}

export default Navs;
