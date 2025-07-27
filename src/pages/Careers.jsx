"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Form, Badge, Alert } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/scss/pages/careers.scss"

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    cv: null,
    message: "",
  })
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState("success")

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.position) {
      setAlertMessage("Please fill in all required fields.")
      setAlertType("danger")
      setShowAlert(true)
      return
    }

    // Simulate form submission
    setAlertMessage("Application submitted successfully! We will contact you soon.")
    setAlertType("success")
    setShowAlert(true)

    // Reset form
    setFormData({
      name: "",
      email: "",
      position: "",
      cv: null,
      message: "",
    })

    setTimeout(() => setShowAlert(false), 5000)
  }

  const benefits = [
    {
      icon: "$",
      title: "Competitive Salary",
      description: "We pride ourselves on rewarding great work with great compensation.",
    },
    {
      icon: "🏠",
      title: "Work From Home Options",
      description: "Flexible work arrangements to maintain work-life balance.",
    },
    {
      icon: "📅",
      title: "Flexible Hours",
      description: "Flexible hours and vacations. Work-life balance is our priority.",
    },
    {
      icon: "❤️",
      title: "Inclusive Culture",
      description: "Meet new cultures and enjoy our diverse crew from all over the world.",
    },
    {
      icon: "🎓",
      title: "Skill Development",
      description: "Learn and develop your skills with industry-leading training programs.",
    },
    {
      icon: "💬",
      title: "Strong Communication",
      description: "Strong teams are built on strong bonds. Create yours through daily communication.",
    },
  ]

  const jobOpenings = [
    {
      title: "Mechanical Engineer",
      type: "Full-time",
      location: "On-site",
    },
    {
      title: "Production Supervisor",
      type: "Full-time",
      location: "On-site",
    },
    {
      title: "Quality Control Inspector",
      type: "Full-time",
      location: "On-site",
    },
    {
      title: "Sales Executive",
      type: "Full-time",
      location: "Hybrid",
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      position: "Senior Mechanical Engineer",
      message:
        "Working at Mahashakti Engineering has been an incredible journey. The company values innovation and provides excellent growth opportunities.",
      image: "/assets/images/ow1.jpg",
    },
    {
      name: "Priya Sharma",
      position: "Production Manager",
      message:
        "The work environment is collaborative and supportive. Management truly cares about employee development and well-being.",
      image: "/assets/images/ow1.jpg",
    },
  ]

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="careers-hero-content">
                <h1 className="careers-hero-title">Build Your Career with Mahashakti Engineering</h1>
                <p className="careers-hero-description">
                  Join our team of dedicated professionals in manufacturing high-quality building machines. We
                  specialize in precision engineering and excellence in every project.
                </p>
                <Button className="careers-hero-button" size="lg">
                  View Open Positions
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="careers-hero-image">
                <img
                  src="/assets/images/1.jpg"
                  alt="Mahashakti Engineering Facility"
                  className="careers-hero-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Work With Us Section */}
      <section className="careers-benefits-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="careers-section-header">
                <h2 className="careers-section-title">Why work with us?</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {benefits.map((benefit, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="careers-benefit-card">
                  <Card.Body className="careers-benefit-card-body">
                    <div className="careers-benefit-icon">
                      <span className="careers-benefit-icon-text">{benefit.icon}</span>
                    </div>
                    <h5 className="careers-benefit-title">{benefit.title}</h5>
                    <p className="careers-benefit-description">{benefit.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Work With Us Section */}
      <section className="careers-work-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="careers-work-content">
                <h2 className="careers-work-title">Work with us</h2>
                <p className="careers-work-description">
                  If you are passionate about engineering excellence and manufacturing innovation, then you might just
                  be our next team member. We are always on the lookout for exceptional individuals to join our growing
                  team at Mahashakti Engineering.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="careers-work-images">
                <div className="careers-work-image-container">
                  <img
                    src="/assets/images/1.jpg"
                    alt="Team collaboration"
                    className="careers-work-image careers-work-image-1"
                  />
                  <img
                    src="/assets/images/1.jpg"
                    alt="Engineer at work"
                    className="careers-work-image careers-work-image-2"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Career Opportunities Section */}
      <section className="careers-opportunities-section">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="careers-opportunities-content">
                <h2 className="careers-opportunities-title">Career opportunities</h2>
                <div className="careers-job-list">
                  {jobOpenings.map((job, index) => (
                    <div key={index} className="careers-job-item">
                      <div className="careers-job-info">
                        <h5 className="careers-job-title">{job.title}</h5>
                        <div className="careers-job-meta">
                          <Badge className="careers-job-badge">{job.type}</Badge>
                          <span className="careers-job-location">{job.location}</span>
                        </div>
                      </div>
                      <Button variant="outline-primary" className="careers-job-apply-btn">
                        Apply
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="careers-opportunities-image">
                <img
                  src="/assets/images/s1.jpg"
                  alt="Career opportunities"
                  className="careers-opportunities-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Employee Testimonials Section */}
      <section className="careers-testimonials-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="careers-section-header">
                <h2 className="careers-section-title">What our employees say</h2>
              </div>
            </Col>
          </Row>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card className="careers-testimonial-card">
                  <Card.Body className="careers-testimonial-card-body">
                    <div className="careers-testimonial-content">
                      <p className="careers-testimonial-message">"{testimonial.message}"</p>
                      <div className="careers-testimonial-author">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="careers-testimonial-avatar"
                        />
                        <div className="careers-testimonial-info">
                          <h6 className="careers-testimonial-name">{testimonial.name}</h6>
                          <p className="careers-testimonial-position">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Application Form Section */}
      <section className="careers-application-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="careers-application-content">
                <h2 className="careers-application-title">Apply for position</h2>
                <p className="careers-application-subtitle">
                  Ready to join our team? Submit your application and let's build something great together.
                </p>

                {showAlert && (
                  <Alert variant={alertType} className="careers-application-alert">
                    {alertMessage}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit} className="careers-application-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="careers-form-group">
                        <Form.Label className="careers-form-label">Your name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="careers-form-input"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="careers-form-group">
                        <Form.Label className="careers-form-label">Your email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="you@example.com"
                          className="careers-form-input"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="careers-form-group">
                    <Form.Label className="careers-form-label">Position *</Form.Label>
                    <Form.Select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="careers-form-select"
                      required
                    >
                      <option value="">Choose position</option>
                      <option value="mechanical-engineer">Mechanical Engineer</option>
                      <option value="production-supervisor">Production Supervisor</option>
                      <option value="quality-control">Quality Control Inspector</option>
                      <option value="sales-executive">Sales Executive</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="careers-form-group">
                    <Form.Label className="careers-form-label">CV/Resume</Form.Label>
                    <Form.Control
                      type="file"
                      name="cv"
                      onChange={handleInputChange}
                      accept=".pdf,.doc,.docx"
                      className="careers-form-file"
                    />
                    <Form.Text className="careers-form-help">
                      Upload your CV in PDF, DOC, or DOCX format (max 5MB)
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="careers-form-group">
                    <Form.Label className="careers-form-label">Message about you</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about yourself, your experience, and why you would be a great addition to our team..."
                      className="careers-form-textarea"
                    />
                  </Form.Group>

                  <div className="careers-form-submit">
                    <Button type="submit" className="careers-submit-button" size="lg">
                      Submit Application
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Careers
