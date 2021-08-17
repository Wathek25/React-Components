import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import logo from "../Navbar/logo.png";

const NavbarC = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} width="210px" height="90px" alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Features">Features</Nav.Link>
          <Nav.Link href="#Services">Services</Nav.Link>
          <Nav.Link href="#Our_Work">Work</Nav.Link>
          <Nav.Link href="#Our_Partners">Partners</Nav.Link>
          <Nav.Link href="#Contact_us">Contact us</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default NavbarC;
