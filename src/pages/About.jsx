import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Image, Card, ProgressBar } from "react-bootstrap"
import "../assets/scss/pages/about.scss"

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner Section */}
      <section className="about-hero-banner">
        <div className="about-banner-image">
          <img
            src="/assets/images/b2.png"
            alt="Mahashakti Engineering Facility"
            className="about-banner-img"
          />
          <div className="about-banner-overlay"></div>
        </div>
        <Container className="about-banner-content">
          <Row className="align-items-center justify-content-center text-center">
            <Col lg={8}>
              <h1 className="about-banner-title">
                About <span className="about-text-primary">Mahashakti Engineering</span>
              </h1>
              <p className="about-banner-subtitle">
                Building the future through innovative engineering solutions and precision manufacturing since 1945. We
                are pioneers in creating world-class building machines that shape tomorrow's infrastructure.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="about-stats-section">
        <Container>
          <Row>
            <Col lg={4} md={4} className="text-center">
              <div className="about-stat-item">
                <span className="about-stat-number">75+</span>
                <span className="about-stat-label">Years of Excellence</span>
              </div>
            </Col>
            <Col lg={4} md={4} className="text-center">
              <div className="about-stat-item">
                <span className="about-stat-number">500+</span>
                <span className="about-stat-label">Projects Completed</span>
              </div>
            </Col>
            <Col lg={4} md={4} className="text-center">
              <div className="about-stat-item">
                <span className="about-stat-number">50+</span>
                <span className="about-stat-label">Expert Engineers</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Story Section */}
      <section className="about-story-section">
  <Container>
    <Row>
      <Col lg={12} className="text-center mb-5">
        <h2 className="about-section-title display-4 fw-light">Our Story</h2>
        <p className="about-section-subtitle lead text-muted">A legacy of innovation, precision, and excellence in engineering</p>
        <div className="about-divider"></div>
      </Col>
    </Row>
    <Row className="align-items-center mb-5">
      <Col lg={6} className="mb-4 mb-lg-0">
        <div className="about-story-content">
          <h3 className="about-story-title fw-normal mb-4">From Humble Beginnings to Industry Leadership</h3>
          <p className="about-story-text mb-4">
            Founded in 1945 by visionary engineer Rajesh Mahashakti, our company began as a small workshop with a
            big dream: to revolutionize the construction industry through innovative building machines. What
            started with just three employees and a passion for precision engineering has grown into one of
            India's most trusted names in manufacturing.
          </p>
          <p className="about-story-text">
            Over the decades, we have consistently pushed the boundaries of what's possible in engineering. Our
            commitment to quality, innovation, and customer satisfaction has earned us recognition across the
            globe, with our machines operating in over 25 countries worldwide.
          </p>
        </div>
      </Col>
      <Col lg={6}>
        <div className="about-story-image">
          <Image 
            src="/assets/images/ab1.webp" 
            alt="Company History" 
            className="about-story-img" 
          />
          <div className="about-image-badge">
            <span>Since 1945</span>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg={12}>
        <div className="about-timeline">
          <div className="timeline-line"></div>
          
          <div className="about-timeline-item">
            <div className="about-timeline-year">
              <span>1945</span>
            </div>
            <div className="about-timeline-content">
              <h5>Company Founded</h5>
              <p>Started as a small engineering workshop in Mumbai</p>
            </div>
          </div>
          
          <div className="about-timeline-item">
            <div className="about-timeline-year">
              <span>1975</span>
            </div>
            <div className="about-timeline-content">
              <h5>First Major Contract</h5>
              <p>Secured landmark contract for 100 building machines</p>
            </div>
          </div>
          
          <div className="about-timeline-item">
            <div className="about-timeline-year">
              <span>2000</span>
            </div>
            <div className="about-timeline-content">
              <h5>International Expansion</h5>
              <p>Expanded operations to Southeast Asia and Middle East</p>
            </div>
          </div>
          
          <div className="about-timeline-item">
            <div className="about-timeline-year">
              <span>2020</span>
            </div>
            <div className="about-timeline-content">
              <h5>Digital Transformation</h5>
              <p>Implemented Industry 4.0 technologies across all facilities</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>

      {/* Mission & Vision Section */}
      <section className="about-mission-section">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="about-mission-card">
                <Card.Body>
                  <div className="about-card-icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <Card.Title className="about-card-title">Our Mission</Card.Title>
                  <Card.Text className="about-card-text">
                    To design, manufacture, and deliver world-class building machines that empower construction
                    professionals to build safer, faster, and more efficiently. We are committed to providing innovative
                    engineering solutions that exceed customer expectations while maintaining the highest standards of
                    quality and reliability.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="about-vision-card">
                <Card.Body>
                  <div className="about-card-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <Card.Title className="about-card-title">Our Vision</Card.Title>
                  <Card.Text className="about-card-text">
                    To be the global leader in building machine manufacturing, recognized for our innovation,
                    sustainability, and contribution to infrastructure development worldwide. We envision a future where
                    our machines are the backbone of smart cities and sustainable construction practices across the
                    globe.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="about-values-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="about-section-title">Our Core Values</h2>
              <p className="about-section-subtitle">The principles that guide everything we do</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="about-value-item text-center">
                <div className="about-value-icon">
                  <i className="fas fa-cogs"></i>
                </div>
                <h4 className="about-value-title">Innovation</h4>
                <p className="about-value-description">
                  Continuously pushing boundaries to develop cutting-edge solutions that transform the industry.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="about-value-item text-center">
                <div className="about-value-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h4 className="about-value-title">Quality</h4>
                <p className="about-value-description">
                  Maintaining the highest standards in every product we manufacture and service we provide.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="about-value-item text-center">
                <div className="about-value-icon">
                  <i className="fas fa-handshake"></i>
                </div>
                <h4 className="about-value-title">Integrity</h4>
                <p className="about-value-description">
                  Building trust through honest communication, ethical practices, and transparent business
                  relationships.
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="about-value-item text-center">
                <div className="about-value-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h4 className="about-value-title">Sustainability</h4>
                <p className="about-value-description">
                  Committed to environmentally responsible manufacturing and sustainable business practices.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Leadership Team Section */}
      <section className="about-team-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="about-section-title">Leadership Team</h2>
              <p className="about-section-subtitle">Meet the visionaries driving our success</p>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={6} className="mb-5">
  <div className="team-profile-card">
    <div className="team-profile-image-container">
      <Image 
        src="/assets/images/ow1.jpg" 
        alt="CEO" 
        className="team-profile-img"
      />
      <div className="team-profile-overlay">
        <div className="team-profile-social">
          
        </div>
      </div>
    </div>
    
    <div className="team-profile-content">
      <div className="team-profile-header">
        <h3 className="team-profile-name">Arjun Mahashakti</h3>
        <p className="team-profile-title">Chief Executive Officer</p>
        <div className="team-profile-divider"></div>
      </div>
      
      <p className="team-profile-bio">
        Third-generation leader with 20+ years of experience in engineering and business strategy. 
        MBA from IIM Ahmedabad.
      </p>
      
      <div className="team-profile-footer">
        <span className="team-experience-badge">20+ Years Experience</span>
      </div>
    </div>
  </div>
</Col>
            <Col lg={4} md={6} className="mb-5">
  <div className="team-profile-card">
    <div className="team-profile-image-container">
      <Image 
        src="/assets/images/ow1.jpg" 
        alt="CEO" 
        className="team-profile-img"
      />
      <div className="team-profile-overlay">
        <div className="team-profile-social">
          
        </div>
      </div>
    </div>
    
    <div className="team-profile-content">
      <div className="team-profile-header">
        <h3 className="team-profile-name">Arjun Mahashakti</h3>
        <p className="team-profile-title">Chief Executive Officer</p>
        <div className="team-profile-divider"></div>
      </div>
      
      <p className="team-profile-bio">
        Third-generation leader with 20+ years of experience in engineering and business strategy. 
        MBA from IIM Ahmedabad.
      </p>
      
      <div className="team-profile-footer">
        <span className="team-experience-badge">20+ Years Experience</span>
      </div>
    </div>
  </div>
</Col>
            <Col lg={4} md={6} className="mb-5">
  <div className="team-profile-card">
    <div className="team-profile-image-container">
      <Image 
        src="/assets/images/ow1.jpg" 
        alt="CEO" 
        className="team-profile-img"
      />
      <div className="team-profile-overlay">
        <div className="team-profile-social">
          
        </div>
      </div>
    </div>
    
    <div className="team-profile-content">
      <div className="team-profile-header">
        <h3 className="team-profile-name">Arjun Mahashakti</h3>
        <p className="team-profile-title">Chief Executive Officer</p>
        <div className="team-profile-divider"></div>
      </div>
      
      <p className="team-profile-bio">
        Third-generation leader with 20+ years of experience in engineering and business strategy. 
        MBA from IIM Ahmedabad.
      </p>
      
      <div className="team-profile-footer">
        <span className="team-experience-badge">20+ Years Experience</span>
      </div>
    </div>
  </div>
</Col>
          </Row>
        </Container>
      </section>

      {/* Capabilities Section */}
      <section className="about-capabilities-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="about-section-title about-capabilities-title">Our Capabilities</h2>
              <p className="about-section-subtitle about-capabilities-subtitle">
                Expertise that drives excellence in every project
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div className="about-capability-item">
                <div className="about-capability-header">
                  <h5>Advanced Manufacturing</h5>
                  <span className="about-capability-percentage">95%</span>
                </div>
                <ProgressBar now={95} className="about-capability-bar" />
              </div>
              <div className="about-capability-item">
                <div className="about-capability-header">
                  <h5>Quality Control</h5>
                  <span className="about-capability-percentage">98%</span>
                </div>
                <ProgressBar now={98} className="about-capability-bar" />
              </div>
              <div className="about-capability-item">
                <div className="about-capability-header">
                  <h5>Research & Development</h5>
                  <span className="about-capability-percentage">90%</span>
                </div>
                <ProgressBar now={90} className="about-capability-bar" />
              </div>
              <div className="about-capability-item">
                <div className="about-capability-header">
                  <h5>Customer Satisfaction</h5>
                  <span className="about-capability-percentage">97%</span>
                </div>
                <ProgressBar now={97} className="about-capability-bar" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-capabilities-content">
                <h4 className="about-capabilities-heading">Excellence in Every Aspect</h4>
                <p className="about-capabilities-text">
                  Our comprehensive capabilities span the entire manufacturing lifecycle, from initial design and
                  prototyping to final delivery and after-sales support. We leverage state-of-the-art technology,
                  skilled craftsmanship, and rigorous quality control processes to ensure every product meets our
                  exacting standards.
                </p>
                <ul className="about-capabilities-list">
                  <li>ISO 9001:2015 Certified Manufacturing</li>
                  <li>Advanced CAD/CAM Design Systems</li>
                  <li>Automated Quality Testing Protocols</li>
                  <li>24/7 Technical Support Services</li>
                  <li>Continuous Improvement Programs</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Awards & Recognition Section */}
      <section className="about-awards-section">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="about-section-title">Awards & Recognition</h2>
              <p className="about-section-subtitle">Celebrating our achievements and industry recognition</p>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6} className="mb-4">
              <div className="about-award-item text-center">
                <div className="about-award-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h5 className="about-award-title">Excellence in Manufacturing</h5>
                <p className="about-award-year">2023</p>
                <p className="about-award-description">National Manufacturing Excellence Award</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="about-award-item text-center">
                <div className="about-award-icon">
                  <i className="fas fa-medal"></i>
                </div>
                <h5 className="about-award-title">Innovation Leader</h5>
                <p className="about-award-year">2022</p>
                <p className="about-award-description">Industry Innovation Leadership Award</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="about-award-item text-center">
                <div className="about-award-icon">
                  <i className="fas fa-star"></i>
                </div>
                <h5 className="about-award-title">Quality Excellence</h5>
                <p className="about-award-year">2021</p>
                <p className="about-award-description">ISO Quality Excellence Recognition</p>
              </div>
            </Col>
            <Col lg={3} md={6} className="mb-4">
              <div className="about-award-item text-center">
                <div className="about-award-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h5 className="about-award-title">Global Expansion</h5>
                <p className="about-award-year">2020</p>
                <p className="about-award-description">International Business Excellence Award</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      
    </div>
  )
}

export default About
