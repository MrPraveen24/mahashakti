import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Careers = () => {
  const openings = [
    { position: "Production Engineer", location: "Factory", type: "Full-time" },
    { position: "Quality Inspector", location: "Factory", type: "Full-time" },
    { position: "Sales Executive", location: "Office", type: "Full-time" },
    { position: "CNC Operator", location: "Factory", type: "Shift-based" }
  ];

  return (
    <div className="careers-page py-5">
      <Container>
        <h1 className="text-center mb-5">Careers at Mahashakti</h1>
        <Row>
          <Col md={6}>
            <h2>Current Openings</h2>
            {openings.map((job, index) => (
              <Card key={index} className="mb-3 shadow-sm">
                <Card.Body>
                  <Card.Title>{job.position}</Card.Title>
                  <Card.Text>
                    <span className="me-3"><strong>Location:</strong> {job.location}</span>
                    <span><strong>Type:</strong> {job.type}</span>
                  </Card.Text>
                  <Button variant="primary">Apply Now</Button>
                </Card.Body>
              </Card>
            ))}
          </Col>

          <Col md={6}>
            <h2>Why Join Us?</h2>
            <ListGroup variant="flush">
              <ListGroup.Item>Competitive salaries and benefits</ListGroup.Item>
              <ListGroup.Item>Opportunities for growth and advancement</ListGroup.Item>
              <ListGroup.Item>Positive and inclusive work environment</ListGroup.Item>
              <ListGroup.Item>Training and skill development programs</ListGroup.Item>
              <ListGroup.Item>Employee recognition programs</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Careers;
