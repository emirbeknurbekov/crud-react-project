import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";

const Header = ({ handleShow }) => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Button onClick={handleShow} variant="outline-success">
          Add
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
