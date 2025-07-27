import { Container, Row, Col, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/scss/pages/home.scss"
import TestimonialSlider from '../components/shared/TestimonialSlider';

const partners = Array.from({ length: 10 }, (_, i) => `/assets/images/p${i + 1}.png`);
const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Video */}
      <section className="home-hero-section">
        <div className="home-hero-video-container">
          <video autoPlay muted loop className="home-hero-video">
            <source src="/assets/videos/videobanner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="home-hero-overlay"></div>
        </div>
        <Container className="home-hero-content">
          <Row className="align-items-center min-vh-90">
            <Col lg={6}>
              <h1 className="home-hero-title">
                Manufacturing <br />
                <span className="home-text-primary">good products</span>
              </h1>
              <p className="home-hero-subtitle">
                Mahashakti Engineering specializes in building and engineering work, manufacturing high-quality building
                machines with precision and excellence.
              </p>
              <div className="home-hero-buttons">
                <Button variant="primary" size="sm" className="home-btn-primary me-3">
                  Our Services
                </Button>
                <Button variant="outline-light" size="sm" className="home-btn-outline">
                  Learn More
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Manufacturing Content Section */}
      <section className="home-manufacturing-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="home-manufacturing-image">
                <img
                  src="/assets/images/1.jpg"
                  alt="Manufacturing Process"
                  className="img-fluid rounded"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="home-manufacturing-content">
                <h2 className="home-section-title">
                  Manufacturing dealings, <br />
                  distributing quality
                </h2>
                <p className="home-section-description">
                  At Mahashakti Engineering, we are committed to delivering exceptional building machines through
                  innovative engineering solutions. Our state-of-the-art manufacturing processes ensure every product
                  meets the highest quality standards.
                </p>
                <div className="home-feature-list">
                  <div className="home-feature-item">
                    <span className="home-feature-icon">✓</span>
                    <span>Precision Engineering</span>
                  </div>
                  <div className="home-feature-item">
                    <span className="home-feature-icon">✓</span>
                    <span>Quality Manufacturing</span>
                  </div>
                  <div className="home-feature-item">
                    <span className="home-feature-icon">✓</span>
                    <span>Advanced Technology</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="home-statistics-section">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="home-stats-image">
                <img src="/assets/images/1.jpg" alt="Industrial Plant" className="img-fluid" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="home-stats-content">
                <Row>
                  <Col md={6}>
                    <div className="home-stat-item">
                      <div className="home-stat-number">1945</div>
                      <div className="home-stat-label">Established</div>
                      <div className="home-stat-description">Years of excellence in manufacturing and engineering</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="home-stat-item">
                      <div className="home-stat-number">500+</div>
                      <div className="home-stat-label">Projects</div>
                      <div className="home-stat-description">Successfully completed building machine projects</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="home-stat-item">
                      <div className="home-stat-number">50+</div>
                      <div className="home-stat-label">Engineers</div>
                      <div className="home-stat-description">Skilled professionals dedicated to innovation</div>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="home-stat-item">
                      <div className="home-stat-number">24/7</div>
                      <div className="home-stat-label">Support</div>
                      <div className="home-stat-description">Round-the-clock technical assistance</div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Global Network Section */}
      <section className="home-network-section">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="home-section-title">Join our global network</h2>
              
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="home-network-content">
                <p className="home-section-description">
                Connect with industry leaders and expand your manufacturing capabilities with Mahashakti Engineering's
                extensive network of partners and clients.
              </p>
                <p>
                  Our global presence spans across multiple continents, providing comprehensive engineering solutions
                  and building machine manufacturing services to clients worldwide.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="home-network-image text-end">
                <img src="/assets/images/1.jpg" alt="Global Network" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>



      {/* Discovery Solutions Grid */}
      <section className="home-solutions-section">
        <Container>
          <h2 className="home-section-title text-center">Discovery real-world solutions.</h2>
          <Row>
            <Col md={4} className="mb-4">
              <div className="home-solution-card">
                <img
                  src="/assets/images/12.png"
                  alt="Building Machines"
                  className="img-fluid rounded"
                />
                <h5 className="home-solution-title">Building Machines</h5>
                <p className="home-solution-text">Advanced construction equipment for modern building projects.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="home-solution-card">
                <img
                  src="/assets/images/12.png"
                  alt="Engineering Services"
                  className="img-fluid rounded"
                />
                <h5 className="home-solution-title">Engineering Services</h5>
                <p className="home-solution-text">Comprehensive engineering solutions for industrial applications.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="home-solution-card">
                <img src="/assets/images/12.png" alt="Manufacturing" className="img-fluid rounded" />
                <h5 className="home-solution-title">Manufacturing</h5>
                <p className="home-solution-text">Precision manufacturing with cutting-edge technology.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="home-solution-card">
                <img src="/assets/images/12.png" alt="Quality Control" className="img-fluid rounded" />
                <h5 className="home-solution-title">Quality Control</h5>
                <p className="home-solution-text">Rigorous testing and quality assurance processes.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="home-solution-card">
                <img
                  src="/assets/images/12.png"
                  alt="Technical Support"
                  className="img-fluid rounded"
                />
                <h5 className="home-solution-title">Technical Support</h5>
                <p className="home-solution-text">Expert technical assistance and maintenance services.</p>
              </div>
            </Col>
            <Col md={4} className="mb-4">
              <div className="home-solution-card">
                <img src="/assets/images/12.png" alt="Innovation" className="img-fluid rounded" />
                <h5 className="home-solution-title">Innovation</h5>
                <p className="home-solution-text">Continuous research and development for better solutions.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Commitment Section */}
      <section className="home-commitment-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="home-commitment-content">
                <h2 className="home-commitment-title">
                  Committed to value, <br />
                  committed to you.
                </h2>
                <p className="home-commitment-text">
                  At Mahashakti Engineering, our commitment goes beyond manufacturing. We build lasting relationships
                  with our clients through exceptional service and innovative solutions.
                </p>
                <Button size="lg" className="home-commitment-btn">
                  Get Started
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <TestimonialSlider />

            {/* Company Partner Section */}
      <section className="home-partners-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12} className="text-center">
              <h2 className="partners-heading">Our Valuable Partners</h2>
            </Col>
            <Col lg={12}>
              <div className="home-partners-logos">
                {partners.map((logo, index) => (
                  <div className="partner-card" key={index}>
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="home-partner-logo"
                    />
                  </div>
                ))}
                {/* Duplicate for smooth infinite loop */}
                {partners.map((logo, index) => (
                  <div className="partner-card" key={`dup-${index}`}>
                    <img
                      src={logo}
                      alt={`Partner duplicate ${index + 1}`}
                      className="home-partner-logo"
                    />
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* cta section------- */}
      <section className="cta-section">
  <Container>
    <Row className="justify-content-center text-center">
      <Col lg={8}>
        <h2 className="cta-heading">Ready to Start Your Next Project?</h2>
        <p className="cta-subheading">
          Mahashakti Engineering specializes in precision manufacturing for building machines.
          Partner with us to achieve unmatched efficiency and reliability.
        </p>
        <Button className="cta-button">Contact Us</Button>
      </Col>
    </Row>
  </Container>
</section>

    </div>
  )
}

export default Home
