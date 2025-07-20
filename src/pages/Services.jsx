import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/scss/pages/services.scss"

const Services = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [inquiryData, setInquiryData] = useState({
    customerName: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
    timeline: '',
    budget: ''
  });

  // Dummy services data
  const services = [
    {
      id: 1,
      name: "Construction Equipment Rental",
      shortDescription: "Heavy machinery rental services",
      category: "Equipment Rental",
      image: "/src/assets/images/service1.jpg",
      fullDescription: "Comprehensive construction equipment rental services providing state-of-the-art machinery for all your construction needs. Our fleet includes excavators, bulldozers, cranes, and specialized equipment with experienced operators available.",
      features: [
        "Wide range of modern equipment",
        "Experienced operators available",
        "Flexible rental periods",
        "24/7 maintenance support",
        "Competitive pricing",
        "Insurance coverage included"
      ],
      benefits: [
        "Reduce capital investment",
        "Access to latest technology",
        "Professional maintenance",
        "Flexible project scaling"
      ],
      pricing: "Starting from ₹5,000/day",
      duration: "Daily, Weekly, Monthly"
    },
    {
      id: 2,
      name: "Custom Machine Manufacturing",
      shortDescription: "Bespoke industrial machine design",
      category: "Manufacturing",
      image: "/src/assets/images/service2.jpg",
      fullDescription: "Custom design and manufacturing of specialized industrial machines tailored to your specific requirements. Our engineering team works closely with clients to develop innovative solutions for unique manufacturing challenges.",
      features: [
        "Custom design consultation",
        "3D modeling and prototyping",
        "Quality material selection",
        "Precision manufacturing",
        "Installation and commissioning",
        "Training and documentation"
      ],
      benefits: [
        "Tailored to exact specifications",
        "Improved operational efficiency",
        "Long-term cost savings",
        "Competitive advantage"
      ],
      pricing: "Quote on request",
      duration: "3-6 months delivery"
    },
    {
      id: 3,
      name: "Equipment Maintenance & Repair",
      shortDescription: "Professional maintenance services",
      category: "Maintenance",
      image: "/src/assets/images/service3.jpg",
      fullDescription: "Comprehensive maintenance and repair services for all types of construction and industrial equipment. Our certified technicians ensure optimal performance and extended equipment lifespan through preventive and corrective maintenance.",
      features: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Genuine spare parts supply",
        "Equipment diagnostics",
        "Performance optimization",
        "Maintenance scheduling"
      ],
      benefits: [
        "Reduced downtime",
        "Extended equipment life",
        "Lower operating costs",
        "Improved safety"
      ],
      pricing: "Starting from ₹2,500/visit",
      duration: "Same day service available"
    },
    {
      id: 4,
      name: "Project Engineering Consultation",
      shortDescription: "Expert engineering consultation",
      category: "Consulting",
      image: "/src/assets/images/service4.jpg",
      fullDescription: "Professional engineering consultation services for construction and infrastructure projects. Our experienced engineers provide technical expertise, project planning, and optimization solutions to ensure successful project execution.",
      features: [
        "Technical feasibility studies",
        "Project planning and design",
        "Equipment selection guidance",
        "Cost optimization analysis",
        "Risk assessment",
        "Implementation support"
      ],
      benefits: [
        "Expert technical guidance",
        "Optimized project costs",
        "Risk mitigation",
        "Faster project completion"
      ],
      pricing: "₹15,000/day consultation",
      duration: "Flexible engagement"
    },
    {
      id: 5,
      name: "Equipment Training Programs",
      shortDescription: "Operator training and certification",
      category: "Training",
      image: "/src/assets/images/service5.jpg",
      fullDescription: "Comprehensive training programs for equipment operators and maintenance personnel. Our certified instructors provide hands-on training to ensure safe and efficient operation of construction machinery.",
      features: [
        "Certified instructor-led training",
        "Hands-on practical sessions",
        "Safety protocol training",
        "Equipment-specific modules",
        "Certification upon completion",
        "Refresher course programs"
      ],
      benefits: [
        "Improved operator safety",
        "Enhanced productivity",
        "Reduced equipment damage",
        "Compliance with regulations"
      ],
      pricing: "₹8,000/person/course",
      duration: "3-5 days per course"
    },
    {
      id: 6,
      name: "Site Preparation Services",
      shortDescription: "Complete site preparation solutions",
      category: "Site Services",
      image: "/src/assets/images/service6.jpg",
      fullDescription: "Complete site preparation services including land clearing, excavation, grading, and foundation preparation. Our experienced team ensures your construction site is ready for building with proper drainage and access roads.",
      features: [
        "Land clearing and demolition",
        "Excavation and earthmoving",
        "Site grading and leveling",
        "Drainage system installation",
        "Access road construction",
        "Utility line preparation"
      ],
      benefits: [
        "Professional site preparation",
        "Proper drainage solutions",
        "Time-efficient execution",
        "Quality foundation work"
      ],
      pricing: "₹500/sq meter",
      duration: "1-4 weeks depending on size"
    }
  ];

  const handleShowModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
    setInquiryData({
      customerName: '',
      email: '',
      phone: '',
      company: '',
      projectDetails: '',
      timeline: '',
      budget: ''
    });
  };

  const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiryData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInquireNow = (service) => {
    alert(`Redirecting to inquiry for ${service.name}...`);
  };

  const handleSubmitInquiry = () => {
    alert(`Inquiry submitted for ${selectedService.name}!\nCustomer: ${inquiryData.customerName}\nProject: ${inquiryData.projectDetails}`);
    handleCloseModal();
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="hero-title">Our Services</h1>
              <p className="hero-subtitle">
                Comprehensive engineering and construction services designed to support your projects 
                from conception to completion with excellence and reliability.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="services-grid py-5">
        <Container>
          <Row>
            <Col lg={12} className="mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="section-title">Engineering & Construction Services</h2>
                <Badge bg="primary" className="services-count">
                  {services.length} Services Available
                </Badge>
              </div>
            </Col>
          </Row>
          <Row>
            {services.map((service) => (
              <Col lg={4} md={6} className="mb-4" key={service.id}>
                <Card className="service-card h-100">
                  <div className="service-image-wrapper">
                    <Card.Img 
                      variant="top" 
                      src={service.image} 
                      alt={service.name}
                      className="service-image"
                    />
                    <div className="service-overlay">
                      <Badge bg="success" className="category-badge">
                        {service.category}
                      </Badge>
                    </div>
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="service-title">{service.name}</Card.Title>
                    <Card.Text className="service-description">
                      {service.shortDescription}
                    </Card.Text>
                    <div className="service-pricing mb-3">
                      <span className="pricing-label">Pricing</span>
                      <span className="pricing-value">{service.pricing}</span>
                    </div>
                    <div className="service-actions mt-auto">
                      <Button 
                        variant="primary" 
                        className="me-2 flex-fill"
                        onClick={() => handleInquireNow(service)}
                      >
                        Inquire Now
                      </Button>
                      <Button 
                        variant="outline-primary" 
                        className="flex-fill"
                        onClick={() => handleShowModal(service)}
                      >
                        Details
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Service Detail Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="xl" 
        centered
        className="service-modal"
      >
        {selectedService && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedService.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                {/* Service Image */}
                <Col lg={6}>
                  <div className="service-image-container">
                    <img
                      className="service-modal-image"
                      src={selectedService.image}
                      alt={selectedService.name}
                    />
                  </div>
                </Col>

                {/* Service Details */}
                <Col lg={6}>
                  <div className="service-details">
                    <div className="service-info mb-4">
                      <Badge bg="success" className="mb-2">{selectedService.category}</Badge>
                      <h3 className="service-modal-title">{selectedService.name}</h3>
                      <p className="service-full-description">
                        {selectedService.fullDescription}
                      </p>
                      <div className="service-modal-pricing">
                        <span className="pricing-label">Pricing</span>
                        <span className="pricing-value">{selectedService.pricing}</span>
                        <div className="duration-info">
                          <small className="text-muted">{selectedService.duration}</small>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="features mb-4">
                      <h5>Service Features</h5>
                      <ul className="features-list">
                        {selectedService.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="benefits mb-4">
                      <h5>Key Benefits</h5>
                      <ul className="benefits-list">
                        {selectedService.benefits.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Inquiry Form */}
                    <div className="inquiry-form">
                      <h5>Request Service Inquiry</h5>
                      <Form>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Customer Name</Form.Label>
                              <Form.Control
                                type="text"
                                name="customerName"
                                value={inquiryData.customerName}
                                onChange={handleInquiryChange}
                                placeholder="Enter your name"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Company</Form.Label>
                              <Form.Control
                                type="text"
                                name="company"
                                value={inquiryData.company}
                                onChange={handleInquiryChange}
                                placeholder="Company name"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                name="email"
                                value={inquiryData.email}
                                onChange={handleInquiryChange}
                                placeholder="Enter your email"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Phone</Form.Label>
                              <Form.Control
                                type="tel"
                                name="phone"
                                value={inquiryData.phone}
                                onChange={handleInquiryChange}
                                placeholder="Enter your phone"
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Project Timeline</Form.Label>
                              <Form.Select
                                name="timeline"
                                value={inquiryData.timeline}
                                onChange={handleInquiryChange}
                              >
                                <option value="">Select timeline</option>
                                <option value="immediate">Immediate (Within 1 week)</option>
                                <option value="short">Short term (1-4 weeks)</option>
                                <option value="medium">Medium term (1-3 months)</option>
                                <option value="long">Long term (3+ months)</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="mb-3">
                              <Form.Label>Budget Range</Form.Label>
                              <Form.Select
                                name="budget"
                                value={inquiryData.budget}
                                onChange={handleInquiryChange}
                              >
                                <option value="">Select budget range</option>
                                <option value="under-1l">Under ₹1 Lakh</option>
                                <option value="1l-5l">₹1-5 Lakhs</option>
                                <option value="5l-10l">₹5-10 Lakhs</option>
                                <option value="10l-25l">₹10-25 Lakhs</option>
                                <option value="25l-50l">₹25-50 Lakhs</option>
                                <option value="above-50l">Above ₹50 Lakhs</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                        </Row>
                        <Form.Group className="mb-3">
                          <Form.Label>Project Details</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            name="projectDetails"
                            value={inquiryData.projectDetails}
                            onChange={handleInquiryChange}
                            placeholder="Please describe your project requirements, scope, and any specific needs..."
                          />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button 
                variant="success" 
                onClick={handleSubmitInquiry}
                disabled={!inquiryData.customerName || !inquiryData.email || !inquiryData.projectDetails}
              >
                Submit Inquiry
              </Button>
              <Button 
                variant="primary" 
                onClick={() => handleInquireNow(selectedService)}
              >
                Get Quote
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Services;
