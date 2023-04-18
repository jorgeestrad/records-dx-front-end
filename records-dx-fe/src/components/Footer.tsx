import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <Container>
    <Row style={{backgroundColor: '#212429'}}>
       <Col></Col>
       <Col> <p>Copyright 2022©</p></Col>
       <Col></Col>
    </Row>
  </Container>
  );
}

export default Footer;
