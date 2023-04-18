import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function MenuHorizontal() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">Directorio</Nav.Link>
                <Nav.Link href="#link">Mis metas</Nav.Link>
                <Nav.Link href="#link">Noticias</Nav.Link>
                <Nav.Link href="#link">Blogs</Nav.Link>
                <NavDropdown title="Recursos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Videos</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Audios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Libros</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Otros...
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Tienda" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/4.1">Suministros</NavDropdown.Item>
                  <NavDropdown.Item href="#action/4.2">Intercambios</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="about.html">Acerca de..</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
  }
  
  export default MenuHorizontal;