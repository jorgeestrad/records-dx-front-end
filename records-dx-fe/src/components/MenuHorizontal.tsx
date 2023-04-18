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
                <Nav.Link href="/directory">Directorio</Nav.Link>
                <Nav.Link href="/mygoals">Mis metas</Nav.Link>
                <Nav.Link href="/news">Noticias</Nav.Link>
                <Nav.Link href="/blog">Blogs</Nav.Link>
                <NavDropdown title="Recursos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/video">Videos</NavDropdown.Item>
                  <NavDropdown.Item href="/audio">Audios</NavDropdown.Item>
                  <NavDropdown.Item href="/books">Libros</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/others">Otros...</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Tienda" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/supplies">Suministros</NavDropdown.Item>
                  <NavDropdown.Item href="/exchanges">Intercambios</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">Acerca de..</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
  }
  
  export default MenuHorizontal;