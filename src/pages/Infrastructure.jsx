import React from 'react';
import { Container, Row, Col, Card, Button, Badge, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/pages/infrastructure.scss';

const Infrastructure = () => {
  // Dummy data for infrastructure sections
  const facilities = [
    {
      id: 1,
      name: "Manufacturing Plant 1",
      area: "50,000 sq ft",
      capacity: "500 units/month",
      specialization: "Heavy Machinery",
      image: "/src/assets/images/facility1.jpg",
      features: ["CNC Machining Centers", "Automated Assembly Lines", "Quality Testing Labs", "Material Storage"]
    },
    {
      id: 2,
      name: "Manufacturing Plant 2",
      area: "35,000 sq ft",
      capacity: "300 units/month",
      specialization: "Precision Components",
      image: "/src/assets/images/facility2.jpg",
      features: ["Precision Grinding", "Heat Treatment", "Surface Coating", "Inspection Systems"]
    },
    {
      id: 3,
      name: "R&D Center",
      area: "15,000 sq ft",
      capacity: "50 engineers",
      specialization: "Innovation Hub",
      image: "/src/assets/images/facility3.jpg",
      features: ["Design Studios", "Prototyping Lab", "Testing Facilities", "Simulation Center"]
    }
  ];

  const technologies = [
    {
      name: "CAD/CAM Systems",
      description: "Advanced computer-aided design and manufacturing",
      progress: 95,
      icon: "🖥️"
    },
    {
      name: "IoT Integration",
      description: "Internet of Things for smart manufacturing",
      progress: 85,
      icon: "🌐"
    },
    {
      name: "Automation",
      description: "Robotic process automation and AI",
      progress: 90,
      icon: "🤖"
    },
    {
      name: "Quality Control",
      description: "Advanced testing and inspection systems",
      progress: 98,
      icon: "🔍"
    }
  ];

  const capabilities = [
    {
      category: "Manufacturing",
      items: [
        "CNC Machining (5-axis)",
        "Welding & Fabrication",
        "Assembly & Integration",
        "Surface Treatment"
      ]
    },
    {
      category: "Engineering",
      items: [
        "Product Design",
        "Process Engineering",
        "Simulation & Analysis",
        "Prototyping"
      ]
    },
    {
      category: "Quality",
      items: [
        "ISO 9001:2015 Certified",
        "Non-Destructive Testing",
        "Dimensional Inspection",
        "Performance Testing"
      ]
    },
    {
      category: "Logistics",
      items: [
        "Supply Chain Management",
        "Inventory Control",
        "Packaging & Shipping",
        "After-sales Support"
      ]
    }
  ];

  const stats = [
    { label: "Total Area", value: "100,000", unit: "sq ft" },
    { label: "Production Capacity", value: "800", unit: "units/month" },
    { label: "Engineers", value: "75+", unit: "professionals" },
    { label: "Years Experience", value: "75+", unit: "years" }
  ];

  const certifications = [
    "ISO 9001:2015 - Quality Management",
    "ISO 14001:2015 - Environmental Management",
    "OHSAS 18001 - Occupational Health & Safety",
    "CE Marking Compliance",
    "BIS Certification",
    "Export License"
  ];

  return (
    <div className="infrastructure-page">
      {/* Hero Section */}
      <section className="infrastructure-hero">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h1 className="hero-title">World-Class Infrastructure</h1>
              <p className="hero-subtitle">
                State-of-the-art facilities, cutting-edge technology, and robust capabilities 
                that enable us to deliver excellence in engineering and manufacturing.
              </p>
              <div className="hero-stats">
                <Row>
                  {stats.map((stat, index) => (
                    <Col md={3} key={index} className="mb-3">
                      <div className="stat-item">
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-unit">{stat.unit}</div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Facilities Section */}
      <section className="facilities-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="mb-5">
              <div className="section-header text-center">
                <h2 className="section-title">Manufacturing Facilities</h2>
                <p className="section-subtitle">
                  Modern production facilities equipped with advanced machinery and technology
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {facilities.map((facility) => (
              <Col lg={4} md={6} className="mb-4" key={facility.id}>
                <Card className="facility-card h-100">
                  <div className="facility-image-wrapper">
                    <Card.Img 
                      variant="top" 
                      src={facility.image} 
                      alt={facility.name}
                      className="facility-image"
                    />
                    <div className="facility-overlay">
                      <Badge bg="primary" className="specialization-badge">
                        {facility.specialization}
                      </Badge>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title className="facility-title">{facility.name}</Card.Title>
                    <div className="facility-specs mb-3">
                      <div className="spec-item">
                        <span className="spec-label">Area:</span>
                        <span className="spec-value">{facility.area}</span>
                      </div>
                      <div className="spec-item">
                        <span className="spec-label">Capacity:</span>
                        <span className="spec-value">{facility.capacity}</span>
                      </div>
                    </div>
                    <div className="facility-features">
                      <h6>Key Features</h6>
                      <ul className="features-list">
                        {facility.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technology Section */}
      <section className="technology-section py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="mb-5">
              <div className="section-header text-center">
                <h2 className="section-title">Technology Stack</h2>
                <p className="section-subtitle">
                  Cutting-edge technologies driving innovation and efficiency
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {technologies.map((tech, index) => (
              <Col lg={6} className="mb-4" key={index}>
                <Card className="technology-card">
                  <Card.Body>
                    <div className="tech-header">
                      <div className="tech-icon">{tech.icon}</div>
                      <div className="tech-info">
                        <h5 className="tech-name">{tech.name}</h5>
                        <p className="tech-description">{tech.description}</p>
                      </div>
                    </div>
                    <div className="tech-progress">
                      <div className="progress-header">
                        <span>Implementation Progress</span>
                        <span className="progress-value">{tech.progress}%</span>
                      </div>
                      <ProgressBar 
                        now={tech.progress} 
                        variant="success" 
                        className="custom-progress"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="mb-5">
              <div className="section-header text-center">
                <h2 className="section-title">Core Capabilities</h2>
                <p className="section-subtitle">
                  Comprehensive capabilities across the entire product lifecycle
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            {capabilities.map((capability, index) => (
              <Col lg={3} md={6} className="mb-4" key={index}>
                <Card className="capability-card h-100">
                  <Card.Body>
                    <Card.Title className="capability-category">
                      {capability.category}
                    </Card.Title>
                    <ul className="capability-list">
                      {capability.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
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
      <section className="quality-section py-5 bg-dark text-white">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="quality-content">
                <h2 className="section-title text-white">Quality Assurance</h2>
                <p className="section-description">
                  Our commitment to quality is reflected in our comprehensive quality management 
                  system and international certifications. We maintain the highest standards 
                  throughout our operations.
                </p>
                <div className="quality-features">
                  <div className="quality-feature">
                    <div className="feature-icon">🏆</div>
                    <div className="feature-text">
                      <h5>Award-Winning Quality</h5>
                      <p>Recognized for excellence in manufacturing and engineering</p>
                    </div>
                  </div>
                  <div className="quality-feature">
                    <div className="feature-icon">🔬</div>
                    <div className="feature-text">
                      <h5>Advanced Testing</h5>
                      <p>State-of-the-art testing and inspection facilities</p>
                    </div>
                  </div>
                  <div className="quality-feature">
                    <div className="feature-icon">📋</div>
                    <div className="feature-text">
                      <h5>Process Control</h5>
                      <p>Rigorous quality control at every stage of production</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="certifications-content">
                <h3 className="certifications-title">Certifications & Standards</h3>
                <div className="certifications-grid">
                  {certifications.map((cert, index) => (
                    <div className="certification-item" key={index}>
                      <div className="cert-icon">✓</div>
                      <div className="cert-text">{cert}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section py-5">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className="sustainability-content text-center">
                <h2 className="section-title">Sustainable Operations</h2>
                <p className="section-description">
                  We are committed to sustainable manufacturing practices and environmental 
                  responsibility. Our green initiatives reduce our carbon footprint while 
                  maintaining operational excellence.
                </p>
                <Row className="sustainability-metrics">
                  <Col md={4} className="mb-3">
                    <div className="metric-item">
                      <div className="metric-icon">🌱</div>
                      <div className="metric-value">30%</div>
                      <div className="metric-label">Energy Reduction</div>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="metric-item">
                      <div className="metric-icon">♻️</div>
                      <div className="metric-value">85%</div>
                      <div className="metric-label">Waste Recycling</div>
                    </div>
                  </Col>
                  <Col md={4} className="mb-3">
                    <div className="metric-item">
                      <div className="metric-icon">💧</div>
                      <div className="metric-value">40%</div>
                      <div className="metric-label">Water Conservation</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5 bg-primary text-white">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h2 className="cta-title">Experience Our Infrastructure</h2>
              <p className="cta-description">
                Visit our facilities and see our world-class infrastructure in action. 
                Schedule a tour to witness our capabilities firsthand.
              </p>
              <div className="cta-buttons">
                <Button variant="light" size="lg" className="me-3">
                  Schedule Facility Tour
                </Button>
                <Button variant="outline-light" size="lg">
                  Download Brochure
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Infrastructure;