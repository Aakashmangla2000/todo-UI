import React from "react";
import { Navbar, Container } from "react-bootstrap";

function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">TODO List UI</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
