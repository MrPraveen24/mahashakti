"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, ProgressBar, Modal, Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/scss/pages/gallery.scss"

const Gallery = () => {
  const [showGalleryModal, setShowGalleryModal] = useState(false)
  const [selectedGallery, setSelectedGallery] = useState(null)

  // gallery facilities data
  const facilities = [
    {
      id: 1,
      name: "Manufacturing Plant 1",
      area: "50,000 sq ft",
      capacity: "500 units/month",
      specialization: "Heavy Machinery",
      image: "/assets/images/inf1.jpg",
      rating: 4.8,
      established: "1995",
      features: ["CNC Machining Centers", "Automated Assembly Lines", "Quality Testing Labs", "Material Storage"],
      gallery: [
        "/assets/images/inf1.jpg",
        "/assets/images/inf1.jpg",
        "/assets/images/inf1.jpg",
        "/assets/images/inf1.jpg",
      ],
    },
    {
      id: 2,
      name: "Manufacturing Plant 2",
      area: "35,000 sq ft",
      capacity: "300 units/month",
      specialization: "Precision Components",
      image: "/assets/images/inf1.jpg",
      rating: 4.6,
      established: "2005",
      features: ["Precision Grinding", "Heat Treatment", "Surface Coating", "Inspection Systems"],
      gallery: [
        "/assets/images/inf1.jpg",
        "/assets/images/inf1.jpg",
        "/assets/images/inf1.jpg",
        "/assets/images/inf1.jpg",
      ],
    },
    {
      id: 3,
      name: "R&D Innovation Center",
      area: "15,000 sq ft",
      capacity: "50 engineers",
      specialization: "Research & Development",
      image: "/assets/images/inf1.jpg",
      rating: 4.9,
      established: "2015",
      features: ["Design Studios", "Prototyping Lab", "Testing Facilities", "Simulation Center"],
      gallery: [
        "/assets/images/inf1.jpg",
        "/assets/images/inf1.jpg",
        "/assets/images/inf1.jpg",
        "/assets/images/inf1.jpg",
      ],
    },
  ]

  // Technology capabilities
  const technologies = [
    {
      name: "CAD/CAM Systems",
      description: "Advanced computer-aided design and manufacturing",
      progress: 95,
      icon: "🖥️",
      details: "Latest SolidWorks, AutoCAD, and Mastercam software",
    },
    {
      name: "IoT Integration",
      description: "Internet of Things for smart manufacturing",
      progress: 85,
      icon: "🌐",
      details: "Real-time monitoring and predictive maintenance",
    },
    {
      name: "Automation Systems",
      description: "Robotic process automation and AI",
      progress: 90,
      icon: "🤖",
      details: "Industrial robots and automated quality control",
    },
    {
      name: "Quality Control",
      description: "Advanced testing and inspection systems",
      progress: 98,
      icon: "🔍",
      details: "CMM machines and non-destructive testing",
    },
  ]

  // Core capabilities
  const capabilities = [
    {
      category: "Manufacturing",
      items: ["CNC Machining (5-axis)", "Welding & Fabrication", "Assembly & Integration", "Surface Treatment"],
    },
    {
      category: "Engineering",
      items: ["Product Design", "Process Engineering", "Simulation & Analysis", "Prototyping"],
    },
    {
      category: "Quality Assurance",
      items: ["ISO 9001:2015 Certified", "Non-Destructive Testing", "Dimensional Inspection", "Performance Testing"],
    },
    {
      category: "Support Services",
      items: ["Technical Support", "Training Programs", "Maintenance Services", "Spare Parts Supply"],
    },
  ]

  // gallery statistics
  const stats = [
    { label: "Total Area", value: "100,000", unit: "sq ft" },
    { label: "Production Capacity", value: "800", unit: "units/month" },
    { label: "Engineers", value: "75+", unit: "professionals" },
    { label: "Experience", value: "75+", unit: "years" },
  ]

  // Certifications
  const certifications = [
    "ISO 9001:2015 - Quality Management",
    "ISO 14001:2015 - Environmental Management",
    "OHSAS 18001 - Health & Safety",
    "CE Marking Compliance",
    "BIS Certification",
    "Export License Authorization",
  ]

  const handleShowGallery = (facility) => {
    setSelectedGallery(facility)
    setShowGalleryModal(true)
  }

  const handleCloseGallery = () => {
    setShowGalleryModal(false)
    setSelectedGallery(null)
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="gallery-star gallery-star-filled">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="gallery-star gallery-star-half">
          ★
        </span>,
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="gallery-star gallery-star-empty">
          ★
        </span>,
      )
    }

    return stars
  }

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h1 className="gallery-hero-title">World-Class gallery</h1>
              <p className="gallery-hero-subtitle">
                State-of-the-art facilities, cutting-edge technology, and robust capabilities that enable us to deliver
                excellence in engineering and manufacturing.
              </p>
            </Col>
          </Row>
          <Row className="gallery-stats-row">
            {stats.map((stat, index) => (
              <Col md={3} key={index} className="mb-3">
                <div className="gallery-stat-item">
                  <div className="gallery-stat-value">{stat.value}</div>
                  <div className="gallery-stat-unit">{stat.unit}</div>
                  <div className="gallery-stat-label">{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Facilities Section */}
      <section className="gallery-facilities-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="gallery-section-header">
                <h2 className="gallery-section-title">Manufacturing Facilities</h2>
                <p className="gallery-section-subtitle">
                  Modern production facilities equipped with advanced machinery and technology
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {facilities.map((facility) => (
              <Col lg={4} md={6} className="mb-4" key={facility.id}>
                <Card className="gallery-facility-card">
                  <div className="gallery-facility-image-wrapper">
                    <Card.Img
                      variant="top"
                      src={facility.image}
                      alt={facility.name}
                      className="gallery-facility-image"
                    />
                    <div className="gallery-facility-badge">{facility.specialization}</div>
                  </div>
                  <Card.Body className="gallery-facility-body">
                    <div className="gallery-facility-header">
                      <Card.Title className="gallery-facility-title">{facility.name}</Card.Title>
                      <div className="gallery-facility-rating">
                        <div className="gallery-stars">{renderStars(facility.rating)}</div>
                        <span className="gallery-rating-text">{facility.rating}</span>
                      </div>
                    </div>

                    <div className="gallery-facility-specs">
                      <div className="gallery-spec-item">
                        <span className="gallery-spec-label">Area:</span>
                        <span className="gallery-spec-value">{facility.area}</span>
                      </div>
                      <div className="gallery-spec-item">
                        <span className="gallery-spec-label">Capacity:</span>
                        <span className="gallery-spec-value">{facility.capacity}</span>
                      </div>
                      <div className="gallery-spec-item">
                        <span className="gallery-spec-label">Established:</span>
                        <span className="gallery-spec-value">{facility.established}</span>
                      </div>
                    </div>

                    <div className="gallery-facility-features">
                      <h6 className="gallery-features-title">Key Features</h6>
                      <ul className="gallery-features-list">
                        {facility.features.map((feature, index) => (
                          <li key={index} className="gallery-feature-item">
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="gallery-facility-actions">
                      <Button className="gallery-btn-primary" onClick={() => handleShowGallery(facility)}>
                        View Gallery
                      </Button>
                      <Button className="gallery-btn-secondary">Learn More</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="gallery-technology-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="gallery-section-header">
                <h2 className="gallery-section-title">Technology Stack</h2>
                <p className="gallery-section-subtitle">
                  Cutting-edge technologies driving innovation and efficiency
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {technologies.map((tech, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <Card className="gallery-technology-card">
                  <Card.Body className="gallery-technology-body">
                    <div className="gallery-tech-header">
                      <div className="gallery-tech-icon">{tech.icon}</div>
                      <div className="gallery-tech-info">
                        <h5 className="gallery-tech-name">{tech.name}</h5>
                        <p className="gallery-tech-description">{tech.description}</p>
                        <small className="gallery-tech-details">{tech.details}</small>
                      </div>
                    </div>
                    <div className="gallery-tech-progress">
                      <div className="gallery-progress-header">
                        <span className="gallery-progress-label">Implementation Progress</span>
                        <span className="gallery-progress-value">{tech.progress}%</span>
                      </div>
                      <ProgressBar now={tech.progress} className="gallery-progress-bar" />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Capabilities Section */}
      <section className="gallery-capabilities-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="gallery-section-header">
                <h2 className="gallery-section-title">Core Capabilities</h2>
                <p className="gallery-section-subtitle">
                  Comprehensive capabilities across the entire product lifecycle
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {capabilities.map((capability, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="gallery-capability-card">
                  <Card.Body className="gallery-capability-body">
                    <Card.Title className="gallery-capability-category">{capability.category}</Card.Title>
                    <ul className="gallery-capability-list">
                      {capability.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="gallery-capability-item">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Quality & Certifications Section */}
      <section className="gallery-quality-section">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="gallery-quality-content">
                <h2 className="gallery-quality-title">Quality Assurance</h2>
                <p className="gallery-quality-description">
                  Our commitment to quality is reflected in our comprehensive quality management system and
                  international certifications. We maintain the highest standards throughout our operations.
                </p>
                <div className="gallery-quality-features">
                  <div className="gallery-quality-feature">
                    <div className="gallery-feature-icon">🏆</div>
                    <div className="gallery-feature-text">
                      <h5 className="gallery-feature-title">Award-Winning Quality</h5>
                      <p className="gallery-feature-desc">
                        Recognized for excellence in manufacturing and engineering
                      </p>
                    </div>
                  </div>
                  <div className="gallery-quality-feature">
                    <div className="gallery-feature-icon">🔬</div>
                    <div className="gallery-feature-text">
                      <h5 className="gallery-feature-title">Advanced Testing</h5>
                      <p className="gallery-feature-desc">State-of-the-art testing and inspection facilities</p>
                    </div>
                  </div>
                  <div className="gallery-quality-feature">
                    <div className="gallery-feature-icon">📋</div>
                    <div className="gallery-feature-text">
                      <h5 className="gallery-feature-title">Process Control</h5>
                      <p className="gallery-feature-desc">
                        Rigorous quality control at every stage of production
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="gallery-certifications-content">
                <h3 className="gallery-certifications-title">Certifications & Standards</h3>
                <div className="gallery-certifications-grid">
                  {certifications.map((cert, index) => (
                    <div className="gallery-certification-item" key={index}>
                      <div className="gallery-cert-icon">✓</div>
                      <div className="gallery-cert-text">{cert}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="gallery-cta-section">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="gallery-cta-title">Experience Our gallery</h2>
              <p className="gallery-cta-description">
                Visit our facilities and see our world-class gallery in action. Schedule a tour to witness our
                capabilities firsthand.
              </p>
              <div className="gallery-cta-buttons">
                <Button className="gallery-cta-btn-primary">Schedule Facility Tour</Button>
                <Button className="gallery-cta-btn-secondary">Download Brochure</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Modal */}
      <Modal show={showGalleryModal} onHide={handleCloseGallery} size="xl" centered className="gallery-modal">
        {selectedGallery && (
          <>
            <Modal.Header closeButton className="gallery-modal-header">
              <Modal.Title className="gallery-modal-title">{selectedGallery.name} - Gallery</Modal.Title>
            </Modal.Header>
            <Modal.Body className="gallery-modal-body">
              <div className="gallery-gallery">
                <Carousel className="gallery-carousel">
                  {selectedGallery.gallery.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        className="gallery-gallery-image"
                        src={image || "/placeholder.svg"}
                        alt={`${selectedGallery.name} - View ${index + 1}`}
                      />
                      <Carousel.Caption className="gallery-carousel-caption">
                        <h5>{selectedGallery.features[index]}</h5>
                        <p>Advanced {selectedGallery.specialization.toLowerCase()} facility</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
              <div className="gallery-gallery-info">
                <Row>
                  <Col md={6}>
                    <h5 className="gallery-info-title">Facility Details</h5>
                    <div className="gallery-info-specs">
                      <div className="gallery-info-spec">
                        <strong>Area:</strong> {selectedGallery.area}
                      </div>
                      <div className="gallery-info-spec">
                        <strong>Capacity:</strong> {selectedGallery.capacity}
                      </div>
                      <div className="gallery-info-spec">
                        <strong>Established:</strong> {selectedGallery.established}
                      </div>
                      <div className="gallery-info-spec">
                        <strong>Rating:</strong> {selectedGallery.rating}/5.0
                      </div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <h5 className="gallery-info-title">Key Features</h5>
                    <ul className="gallery-info-features">
                      {selectedGallery.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </Col>
                </Row>
              </div>
            </Modal.Body>
            <Modal.Footer className="gallery-modal-footer">
              <Button className="gallery-modal-btn-secondary" onClick={handleCloseGallery}>
                Close
              </Button>
              <Button className="gallery-modal-btn-primary">Schedule Visit</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  )
}

export default Gallery
