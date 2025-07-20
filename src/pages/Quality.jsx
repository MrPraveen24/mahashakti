import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Quality = () => {
  return (
    <div className="quality-page py-5">
      <Container>
        <h1 className="text-center mb-5">Quality Assurance</h1>
        <Row>
          <Col md={6}>
            <h2>Our Quality Standards</h2>
            <p>At Mahashakti Engineering, quality is at the core of everything we do. We adhere to international quality standards and implement rigorous quality control measures at every stage of production.</p>
            
            <h3 className="mt-4">Certifications</h3>
            <ListGroup>
              <ListGroup.Item>ISO 9001:2015 Certified</ListGroup.Item>
              <ListGroup.Item>ISO 14001:2015 Certified</ListGroup.Item>
              <ListGroup.Item>Industry-specific certifications</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={6}>
            <img src="/assets/images/quality.jpg" alt="Quality Assurance" className="img-fluid rounded" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Quality;