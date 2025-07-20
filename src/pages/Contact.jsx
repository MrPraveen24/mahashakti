import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => {
  return (
    <div className="contact-page py-5">
      <Container>
        <h1 className="text-center mb-5">Contact Us</h1>
        <Row>
          <Col md={6}>
            <div className="contact-info mb-5">
              <h3>Get in Touch</h3>
              <p>We'd love to hear from you. Reach out to us for any inquiries or feedback.</p>
              
              <div className="contact-details mt-4">
                <h5>Address</h5>
                <p>Industrial Area, Phase II<br />City, State - 123456<br />India</p>
                
                <h5>Phone</h5>
                <p>+91 1234567890</p>
                
                <h5>Email</h5>
                <p>info@mahashaktieng.com</p>
                
                <h5>Business Hours</h5>
                <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter your phone number" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" required />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;