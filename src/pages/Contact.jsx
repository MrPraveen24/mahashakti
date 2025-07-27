import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/scss/pages/contact.scss"
const Contact = () => {
  return (
    <div className="contact-page py-5 bg-light">
      <Container>
        <h1 className="text-center mb-5 display-4 fw-medium">Contact Us</h1>
        <Row className=" rounded-3 overflow-hidden bg-white">
          <Col md={6} className="p-0">
            <div className="contact-poster h-100" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              minHeight: "500px"
            }}>
              <div className="contact-info h-100 px-4 py-5" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", color: "white" }}>
                <h3 className="mb-4">Get in Touch</h3>
                <p className="lead mb-4">We'd love to hear from you. Reach out to us for any inquiries or feedback.</p>
                
                <div className="contact-details">
                  <h5 className="mt-4 mb-3">Address</h5>
                  <p className="mb-3">Industrial Area, Phase II<br />City, State - 123456<br />India</p>
                  
                  <h5 className="mt-4 mb-3">Phone</h5>
                  <p className="mb-3">+91 1234567890</p>
                  
                  <h5 className="mt-4 mb-3">Email</h5>
                  <p className="mb-3">info@mahashaktieng.com</p>
                  
                  <h5 className="mt-4 mb-3">Business Hours</h5>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6} className="p-5">
            <Form>
              <Form.Group className="mb-4" controlId="formName">
                <Form.Label className="fw-medium">Your Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your name" 
                  className="" 
                  required 
                />
              </Form.Group>
              
              <Form.Group className="mb-4" controlId="formEmail">
                <Form.Label className="fw-medium">Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email" 
                  className=""
                  required 
                />
              </Form.Group>
              
              <Form.Group className="mb-4" controlId="formPhone">
                <Form.Label className="fw-medium">Phone Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className=""
                />
              </Form.Group>
              
              <Form.Group className="mb-4" controlId="formSubject">
                <Form.Label className="fw-medium">Subject</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter subject" 
                  className=""
                  required 
                />
              </Form.Group>
              
              <Form.Group className="mb-4" controlId="formMessage">
                <Form.Label className="fw-medium">Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={5} 
                  placeholder="Enter your message" 
                  className=""
                  required 
                />
              </Form.Group>
              
              <Button 
                variant="primary" 
                type="submit" 
                className="btn"
              >
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