import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link for navigation
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export const AppNavbar = () => {
  return (
    <>
     

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          < Link to="/" >Shopping-cart</Link>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Products</Nav.Link> {/* ✅ Use Nav.Link with Link */}
            <Nav.Link as={Link} to="/cart">Cart</Nav.Link> {/* ✅ Fixed closing tag */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar; // ✅ Ensure it's exported correctly