"use client"

import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Button, Modal, Form, Badge } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/scss/pages/services.scss"

const Services = () => {
  const bannerImages = [
"/assets/images/b1.png",
    "/assets/images/b2.png",
    "/assets/images/b3.png",
    "/assets/images/b1.png",
    "/assets/images/b2.png",
]

const [currentBannerIndex, setCurrentBannerIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
  }, 3000) // Rotate every 3s

  return () => clearInterval(interval)
}, [])

  const [showModal, setShowModal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const [inquiryData, setInquiryData] = useState({
    customerName: "",
    email: "",
    phone: "",
    company: "",
    projectDetails: "",
    timeline: "",
    budget: "",
  })

  // Dummy services data
  const services = [
    {
      id: 1,
      name: "Construction Equipment Rental",
      shortDescription: "Heavy machinery rental services",
      category: "Equipment Rental",
      rating: 4.6,
      reviews: 142,
      image: "/assets/images/s1.jpg",
      fullDescription:
        "Comprehensive construction equipment rental services providing state-of-the-art machinery for all your construction needs. Our fleet includes excavators, bulldozers, cranes, and specialized equipment with experienced operators available.",
      features: [
        "Wide range of modern equipment",
        "Experienced operators available",
        "Flexible rental periods",
        "24/7 maintenance support",
        "Competitive pricing",
        "Insurance coverage included",
      ],
      benefits: [
        "Reduce capital investment",
        "Access to latest technology",
        "Professional maintenance",
        "Flexible project scaling",
      ],
      pricing: "Starting from ₹5,000/day",
      originalPricing: "₹6,000/day",
      discount: "17% off",
      duration: "Daily, Weekly, Monthly",
    },
    {
      id: 2,
      name: "Custom Machine Manufacturing",
      shortDescription: "Bespoke industrial machine design",
      category: "Manufacturing",
      rating: 4.8,
      reviews: 89,
      image: "/assets/images/s1.jpg",
      fullDescription:
        "Custom design and manufacturing of specialized industrial machines tailored to your specific requirements. Our engineering team works closely with clients to develop innovative solutions for unique manufacturing challenges.",
      features: [
        "Custom design consultation",
        "3D modeling and prototyping",
        "Quality material selection",
        "Precision manufacturing",
        "Installation and commissioning",
        "Training and documentation",
      ],
      benefits: [
        "Tailored to exact specifications",
        "Improved operational efficiency",
        "Long-term cost savings",
        "Competitive advantage",
      ],
      pricing: "Quote on request",
      originalPricing: "Custom pricing",
      discount: "Best rates",
      duration: "3-6 months delivery",
    },
    {
      id: 3,
      name: "Equipment Maintenance & Repair",
      shortDescription: "Professional maintenance services",
      category: "Maintenance",
      rating: 4.5,
      reviews: 203,
      image: "/assets/images/s1.jpg",
      fullDescription:
        "Comprehensive maintenance and repair services for all types of construction and industrial equipment. Our certified technicians ensure optimal performance and extended equipment lifespan through preventive and corrective maintenance.",
      features: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Genuine spare parts supply",
        "Equipment diagnostics",
        "Performance optimization",
        "Maintenance scheduling",
      ],
      benefits: ["Reduced downtime", "Extended equipment life", "Lower operating costs", "Improved safety"],
      pricing: "Starting from ₹2,500/visit",
      originalPricing: "₹3,000/visit",
      discount: "17% off",
      duration: "Same day service available",
    },
    {
      id: 4,
      name: "Project Engineering Consultation",
      shortDescription: "Expert engineering consultation",
      category: "Consulting",
      rating: 4.7,
      reviews: 76,
      image: "/assets/images/s1.jpg",
      fullDescription:
        "Professional engineering consultation services for construction and infrastructure projects. Our experienced engineers provide technical expertise, project planning, and optimization solutions to ensure successful project execution.",
      features: [
        "Technical feasibility studies",
        "Project planning and design",
        "Equipment selection guidance",
        "Cost optimization analysis",
        "Risk assessment",
        "Implementation support",
      ],
      benefits: [
        "Expert technical guidance",
        "Optimized project costs",
        "Risk mitigation",
        "Faster project completion",
      ],
      pricing: "₹15,000/day consultation",
      originalPricing: "₹18,000/day",
      discount: "17% off",
      duration: "Flexible engagement",
    },
    {
      id: 5,
      name: "Equipment Training Programs",
      shortDescription: "Operator training and certification",
      category: "Training",
      rating: 4.4,
      reviews: 156,
      image: "/assets/images/s1.jpg",
      fullDescription:
        "Comprehensive training programs for equipment operators and maintenance personnel. Our certified instructors provide hands-on training to ensure safe and efficient operation of construction machinery.",
      features: [
        "Certified instructor-led training",
        "Hands-on practical sessions",
        "Safety protocol training",
        "Equipment-specific modules",
        "Certification upon completion",
        "Refresher course programs",
      ],
      benefits: [
        "Improved operator safety",
        "Enhanced productivity",
        "Reduced equipment damage",
        "Compliance with regulations",
      ],
      pricing: "₹8,000/person/course",
      originalPricing: "₹10,000/person",
      discount: "20% off",
      duration: "3-5 days per course",
    },
    {
      id: 6,
      name: "Site Preparation Services",
      shortDescription: "Complete site preparation solutions",
      category: "Site Services",
      rating: 4.3,
      reviews: 98,
      image: "/assets/images/s1.jpg",
      fullDescription:
        "Complete site preparation services including land clearing, excavation, grading, and foundation preparation. Our experienced team ensures your construction site is ready for building with proper drainage and access roads.",
      features: [
        "Land clearing and demolition",
        "Excavation and earthmoving",
        "Site grading and leveling",
        "Drainage system installation",
        "Access road construction",
        "Utility line preparation",
      ],
      benefits: [
        "Professional site preparation",
        "Proper drainage solutions",
        "Time-efficient execution",
        "Quality foundation work",
      ],
      pricing: "₹500/sq meter",
      originalPricing: "₹600/sq meter",
      discount: "17% off",
      duration: "1-4 weeks depending on size",
    },
  ]

  const handleShowModal = (service) => {
    setSelectedService(service)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedService(null)
    setInquiryData({
      customerName: "",
      email: "",
      phone: "",
      company: "",
      projectDetails: "",
      timeline: "",
      budget: "",
    })
  }

  const handleInquiryChange = (e) => {
    const { name, value } = e.target
    setInquiryData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleInquireNow = (service) => {
    alert(`Redirecting to inquiry for ${service.name}...`)
  }

  const handleSubmitInquiry = () => {
    alert(
      `Inquiry submitted for ${selectedService.name}!\nCustomer: ${inquiryData.customerName}\nProject: ${inquiryData.projectDetails}`,
    )
    handleCloseModal()
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="services-star services-star-filled">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="services-star services-star-half">
          ★
        </span>,
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="services-star services-star-empty">
          ★
        </span>,
      )
    }

    return stars
  }

  return (
    <div className="services-page">
      {/* Hero Section */}
     <div
  className="services-hero-banner"
  style={{
    backgroundImage: `url(${bannerImages[currentBannerIndex]})`,
    maxHeight: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out",
  }}
>
  <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: "50vh" }}>
    <h6 className="text-white m-0">Trusted Engineering Solutions. Nationwide Service Coverage.</h6>
  </Container>
</div>

{/* Hero Section */}
<section className="services-hero-section py-5 bg-light text-center">
  <Container>
    <Row>
      <Col lg={12}>
        <h1 className="services-hero-title">Our Services</h1>
        <p className="services-hero-subtitle text-secondary fs-5">
          Comprehensive engineering and construction services designed to support your projects from conception to completion with excellence and reliability.
        </p>
      </Col>
    </Row>
  </Container>
</section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="services-header">
                <h2 className="services-section-title">Engineering & Construction Services</h2>
                <Badge className="services-count-badge">{services.length} Services Available</Badge>
              </div>
            </Col>
          </Row>
          <Row>
            {services.map((service) => (
              <Col lg={4} md={6} className="mb-4" key={service.id}>
                <Card className="services-card">
                  <div className="services-image-wrapper">
                    <Card.Img variant="top" src={service.image} alt={service.name} className="services-image" />
                    <div className="services-discount-badge">{service.discount}</div>
                  </div>
                  <Card.Body className="services-card-body">
                    <div className="services-category-badge">
                      <Badge className="services-category">{service.category}</Badge>
                    </div>
                    <Card.Title className="services-title">{service.name}</Card.Title>
                    <Card.Text className="services-description">{service.shortDescription}</Card.Text>

                    <div className="services-rating">
                      <div className="services-stars">{renderStars(service.rating)}</div>
                      <span className="services-rating-text">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>

                    <div className="services-price-section">
                      <div className="services-current-price">{service.pricing}</div>
                      <div className="services-original-price">{service.originalPricing}</div>
                    </div>

                    <div className="services-actions">
                      <Button className="services-btn-primary" onClick={() => handleInquireNow(service)}>
                        Inquire Now
                      </Button>
                      <Button className="services-btn-secondary" onClick={() => handleShowModal(service)}>
                        View Details
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
      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered className="services-modal">
  {selectedService && (
    <>
      <Modal.Header closeButton className="services-modal-header">
        <Modal.Title className="services-modal-title">{selectedService.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="services-modal-body">
        <Row className="g-3">
          <Col lg={5} className="d-flex flex-column">
            <div className="services-image-container">
              <img
                className="services-modal-image"
                src={selectedService.image || "/placeholder.svg"}
                alt={selectedService.name}
              />
            </div>
            <div className="services-features mt-3">
              <h5 className="services-features-title">Service Features</h5>
              <ul className="services-features-list">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="services-feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="services-benefits mt-3">
              <h5 className="services-benefits-title">Key Benefits</h5>
              <ul className="services-benefits-list">
                {selectedService.benefits.map((benefit, index) => (
                  <li key={index} className="services-benefit-item">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg={7} className="d-flex flex-column justify-content-between">
            <div className="services-details flex-grow-1">
              <Badge className="services-modal-category">{selectedService.category}</Badge>
              <h3 className="services-modal-service-title">{selectedService.name}</h3>
              <p className="services-full-description">{selectedService.fullDescription}</p>
              <div className="services-modal-price">
                <span className="services-modal-current-price">{selectedService.pricing}</span>
                <span className="services-modal-original-price">{selectedService.originalPricing}</span>
                <span className="services-modal-discount">{selectedService.discount}</span>
                <div className="services-duration-info">
                  <small>{selectedService.duration}</small>
                </div>
              </div>
              <div className="services-inquiry-form">
                <h5 className="services-form-title">Request Service Inquiry</h5>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="services-form-group">
                        <Form.Label className="services-form-label">Customer Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="customerName"
                          value={inquiryData.customerName}
                          onChange={handleInquiryChange}
                          placeholder="Enter your name"
                          className="services-form-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="services-form-group">
                        <Form.Label className="services-form-label">Company</Form.Label>
                        <Form.Control
                          type="text"
                          name="company"
                          value={inquiryData.company}
                          onChange={handleInquiryChange}
                          placeholder="Company name"
                          className="services-form-control"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="services-form-group">
                        <Form.Label className="services-form-label">Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={inquiryData.email}
                          onChange={handleInquiryChange}
                          placeholder="Enter your email"
                          className="services-form-control"
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="services-form-group">
                        <Form.Label className="services-form-label">Phone</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={inquiryData.phone}
                          onChange={handleInquiryChange}
                          placeholder="Enter your phone"
                          className="services-form-control"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="services-form-group">
                        <Form.Label className="services-form-label">Project Timeline</Form.Label>
                        <Form.Select
                          name="timeline"
                          value={inquiryData.timeline}
                          onChange={handleInquiryChange}
                          className="services-form-control"
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
                      <Form.Group className="services-form-group">
                        <Form.Label className="services-form-label">Budget Range</Form.Label>
                        <Form.Select
                          name="budget"
                          value={inquiryData.budget}
                          onChange={handleInquiryChange}
                          className="services-form-control"
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
                  <Form.Group className="services-form-group">
                    <Form.Label className="services-form-label">Project Details</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="projectDetails"
                      value={inquiryData.projectDetails}
                      onChange={handleInquiryChange}
                      placeholder="Please describe your project requirements, scope, and any specific needs..."
                      className="services-form-control"
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer className="services-modal-footer">
        <Button className="services-modal-btn-secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button
          className="services-modal-btn-success"
          onClick={handleSubmitInquiry}
          disabled={!inquiryData.customerName || !inquiryData.email || !inquiryData.projectDetails}
        >
          Submit Inquiry
        </Button>
        <Button className="services-modal-btn-primary" onClick={() => handleInquireNow(selectedService)}>
          Get Quote
        </Button>
      </Modal.Footer>
    </>
  )}
</Modal>

    </div>
  )
}

export default Services
