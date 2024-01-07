import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 menu">
          <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Brand href="./" className="mx-auto logo">
              <h1>LIVE EVENTS</h1>
            </Navbar.Brand>
            {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Nav.Link href="./">LIVE EVENTS</Nav.Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="./Programmation">Programmation</Nav.Link>
                  <Nav.Link href="./Concerts">Concerts</Nav.Link>
                  <Nav.Link href="./Carte">Carte</Nav.Link>
                  <Nav.Link href="./Billetterie">Billetterie</Nav.Link>
                  <Nav.Link href="./InformationsPratiques">Informations</Nav.Link>
                  <Nav.Link href="./ReseauxSociaux">Réseaux Sociaux</Nav.Link>
                  <Nav.Link href="./Partenaires">Partenaires</Nav.Link>
                  <Nav.Link href="./Faq">FAQ</Nav.Link>
                  
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action6">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action7">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action8">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;

