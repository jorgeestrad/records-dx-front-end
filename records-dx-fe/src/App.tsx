import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import HeaderPage from './components/HeaderPage';
import MenuHorizontal from './components/MenuHorizontal';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
    <Row style={{backgroundColor: '#0d6efd'}}>
       <Col><MenuHorizontal /></Col>
       <Col><HeaderPage /></Col>
    </Row>
  </Container>
  );
}

export default App;
