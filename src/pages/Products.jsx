"use client"

import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal, Carousel, Form, Badge } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/scss/pages/products.scss"

const Products = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [quotationData, setQuotationData] = useState({
    quantity: 1,
    customerName: "",
    email: "",
    phone: "",
    requirements: "",
  })
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
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  // Dummy product data
  const products = [
    {
      id: 1,
      name: "Hydraulic Excavator HE-500",
      shortDescription: "Heavy-duty excavator for construction",
      price: "₹45,00,000",
      originalPrice: "₹50,00,000",
      discount: "10% off",
      category: "Excavators",
      rating: 4.5,
      reviews: 128,
      image: "/assets/images/12.png",
      gallery: [
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
      ],
      fullDescription:
        "The Hydraulic Excavator HE-500 is a powerful and versatile construction machine designed for heavy-duty excavation, demolition, and material handling. With advanced hydraulic systems and robust construction, this excavator delivers exceptional performance in challenging work environments.",
      specifications: {
        "Operating Weight": "50 tons",
        "Engine Power": "350 HP",
        "Bucket Capacity": "2.5 m³",
        "Max Digging Depth": "7.2 m",
        "Max Reach": "11.5 m",
      },
      features: [
        "Advanced hydraulic system",
        "Comfortable operator cabin",
        "Fuel-efficient engine",
        "GPS tracking system",
        "24/7 technical support",
      ],
    },
    {
      id: 2,
      name: "Tower Crane TC-1200",
      shortDescription: "High-capacity tower crane system",
      price: "₹85,00,000",
      originalPrice: "₹95,00,000",
      discount: "11% off",
      category: "Cranes",
      rating: 4.7,
      reviews: 89,
      image: "/assets/images/12.png",
      gallery: [
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
      ],
      fullDescription:
        "The Tower Crane TC-1200 is engineered for high-rise construction projects, offering exceptional lifting capacity and precision control. Built with safety and efficiency in mind, this crane is perfect for urban construction sites.",
      specifications: {
        "Max Load": "12 tons",
        "Jib Length": "60 m",
        "Max Height": "200 m",
        "Hoisting Speed": "120 m/min",
        "Slewing Speed": "0.6 rpm",
      },
      features: [
        "Anti-collision system",
        "Load moment indicator",
        "Remote monitoring",
        "Weather protection",
        "Easy assembly/disassembly",
      ],
    },
    {
      id: 3,
      name: "Concrete Mixer CM-750",
      shortDescription: "Industrial concrete mixing machine",
      price: "₹12,50,000",
      originalPrice: "₹14,00,000",
      discount: "11% off",
      category: "Mixers",
      rating: 4.3,
      reviews: 156,
      image: "/assets/images/12.png",
      gallery: [
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
      ],
      fullDescription:
        "The Concrete Mixer CM-750 is designed for consistent and efficient concrete production. With its robust mixing drum and powerful motor, it ensures uniform mixing for all types of concrete applications.",
      specifications: {
        "Mixing Capacity": "750 liters",
        "Motor Power": "37 kW",
        "Mixing Time": "90 seconds",
        "Discharge Height": "1.4 m",
        Weight: "2.5 tons",
      },
      features: [
        "Uniform mixing quality",
        "Easy operation controls",
        "Durable mixing blades",
        "Quick discharge system",
        "Low maintenance design",
      ],
    },
    {
      id: 4,
      name: "Bulldozer BD-320",
      shortDescription: "Heavy-duty bulldozer for earthwork",
      price: "₹65,00,000",
      originalPrice: "₹72,00,000",
      discount: "10% off",
      category: "Bulldozers",
      rating: 4.6,
      reviews: 94,
      image: "/assets/images/12.png",
      gallery: [
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
      ],
      fullDescription:
        "The Bulldozer BD-320 is built for demanding earthmoving operations. With its powerful engine and advanced blade control system, it delivers superior performance in grading, pushing, and leveling applications.",
      specifications: {
        "Operating Weight": "32 tons",
        "Engine Power": "320 HP",
        "Blade Width": "4.2 m",
        "Ground Pressure": "0.8 kg/cm²",
        "Travel Speed": "11 km/h",
      },
      features: [
        "Hydrostatic transmission",
        "ROPS/FOPS certified cabin",
        "Precision blade control",
        "Fuel monitoring system",
        "Extended service intervals",
      ],
    },
    {
      id: 5,
      name: "Mobile Crane MC-800",
      shortDescription: "All-terrain mobile crane solution",
      price: "₹75,00,000",
      originalPrice: "₹82,00,000",
      discount: "9% off",
      category: "Cranes",
      rating: 4.4,
      reviews: 67,
      image: "/assets/images/12.png",
      gallery: [
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
      ],
      fullDescription:
        "The Mobile Crane MC-800 offers exceptional mobility and lifting capacity for various construction and industrial applications. Its all-terrain capability makes it perfect for challenging job sites.",
      specifications: {
        "Max Load": "80 tons",
        "Boom Length": "50 m",
        "Travel Speed": "85 km/h",
        "Engine Power": "400 HP",
        "Outrigger Spread": "7.2 m",
      },
      features: [
        "All-terrain mobility",
        "Telescopic boom",
        "Load block protection",
        "Automatic leveling",
        "Operator comfort cabin",
      ],
    },
    {
      id: 6,
      name: "Compactor Roller CR-600",
      shortDescription: "Vibratory soil compaction roller",
      price: "₹28,00,000",
      originalPrice: "₹31,00,000",
      discount: "10% off",
      category: "Compactors",
      rating: 4.2,
      reviews: 112,
      image: "/assets/images/12.png",
      gallery: [
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
        "/assets/images/12.png",
      ],
      fullDescription:
        "The Compactor Roller CR-600 is designed for efficient soil and asphalt compaction. With its advanced vibration system and precise controls, it ensures optimal compaction results.",
      specifications: {
        "Operating Weight": "15 tons",
        "Drum Width": "2.1 m",
        "Vibration Frequency": "28 Hz",
        "Travel Speed": "12 km/h",
        "Engine Power": "150 HP",
      },
      features: [
        "Dual amplitude vibration",
        "Articulated steering",
        "Water spray system",
        "Comfortable operator seat",
        "Easy maintenance access",
      ],
    },
  ]

  const handleShowModal = (product) => {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setSelectedProduct(null)
    setQuotationData({
      quantity: 1,
      customerName: "",
      email: "",
      phone: "",
      requirements: "",
    })
  }

  const handleQuotationChange = (e) => {
    const { name, value } = e.target
    setQuotationData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleBuyNow = (product) => {
    alert(`Redirecting to purchase ${product.name}...`)
  }

  const handleRequestQuotation = () => {
    alert(
      `Quotation request submitted for ${selectedProduct.name}!\nQuantity: ${quotationData.quantity}\nCustomer: ${quotationData.customerName}`,
    )
    handleCloseModal()
  }

  const renderStars = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="products-star products-star-filled">
          ★
        </span>,
      )
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="products-star products-star-half">
          ★
        </span>,
      )
    }

    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="products-star products-star-empty">
          ★
        </span>,
      )
    }

    return stars
  }

  return (
    <div className="products-page">
        {/* Hero Section */}
        {/* Auto-Changing Banner (max-height: 70px) */}
<div
  className="products-hero-banner"
  style={{
    backgroundImage: `url(${bannerImages[currentBannerIndex]})`,
    maxHeight: "50vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1s ease-in-out",
  }}
>
  <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: "50vh" }}>
    <h6 className="text-white m-0 fw-semibold">Top Engineering Machines – Heavy Duty. Reliable. Built to Last.</h6>
  </Container>
</div>

{/* Hero Section */}
<section className="products-hero-section py-5 bg-light text-center">
  <Container>
    <Row>
      <Col lg={12}>
        <h1 className="products-hero-title text-primary fw-bold">Our Products</h1>
        <p className="products-hero-subtitle text-dark fs-7">
          Discover our comprehensive range of building machines and construction equipment, engineered for excellence and built to last.
        </p>
      </Col>
    </Row>
  </Container>
</section>


      {/* Products Grid */}
      <section className="products-grid-section">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="products-header">
                <h2 className="products-section-title">Building Machines & Equipment</h2>
                <Badge className="products-count-badge">{products.length} Products Available</Badge>
              </div>
            </Col>
          </Row>
          <Row>
            {products.map((product) => (
              <Col lg={4} md={6} className="mb-4" key={product.id}>
                <Card className="products-card">
                  <div className="products-image-wrapper">
                    <Card.Img variant="top" src={product.image} alt={product.name} className="products-image" />
                    <div className="products-discount-badge">{product.discount}</div>
                  </div>
                  <Card.Body className="products-card-body">
                    <div className="products-category-badge">
                      <Badge className="badge rounded-pill text-bg-warning">{product.category}</Badge>
                    </div>
                    <Card.Title className="products-title">{product.name}</Card.Title>
                    <Card.Text className="products-description">{product.shortDescription}</Card.Text>

                    <div className="products-rating">
                      <div className="products-stars">{renderStars(product.rating)}</div>
                      <span className="products-rating-text">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="products-price-section">
                      <div className="products-current-price">{product.price}</div>
                      <div className="products-original-price">{product.originalPrice}</div>
                    </div>

                    <div className="products-actions">
                      <Button className="products-btn-primary" onClick={() => handleBuyNow(product)}>
                        Buy Now
                      </Button>
                      <Button className="products-btn-secondary" onClick={() => handleShowModal(product)}>
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

      {/* Product Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="xl" centered className="virasat-modal">
  {selectedProduct && (
    <div className="modal-content-wrapper">
      <Modal.Header closeButton className="virasat-modal-header">
        <Modal.Title className="virasat-modal-title">
          <span className="bhagwa-badge">{selectedProduct.category}</span>
          <h3 className="product-name">{selectedProduct.name}</h3>
        </Modal.Title>
      </Modal.Header>
      
      <Modal.Body className="virasat-modal-body">
        <Row className="g-5">
          {/* Left Column - Visuals */}
          <Col lg={6} className="d-flex flex-column">
            <div className="image-gallery-container">
              <Carousel className="virasat-carousel" interval={null}>
                {selectedProduct.gallery.map((image, index) => (
                  <Carousel.Item key={index}>
                    <div className="image-frame">
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${selectedProduct.name}`}
                        className="product-main-image"
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            
            <div className="pricing-section mt-auto">
              <div className="price-tag">
                <span className="current-price">{selectedProduct.price}</span>
                {selectedProduct.originalPrice && (
                  <span className="original-price">{selectedProduct.originalPrice}</span>
                )}
              </div>
              <Button 
                variant="outline-bhagwa" 
                className="buy-now-btn"
                onClick={() => handleBuyNow(selectedProduct)}
              >
                Buy Now
              </Button>
            </div>
          </Col>

          {/* Right Column - Details */}
          <Col lg={6}>
            <div className="details-container">
              {/* Description */}
              <div className="description-section">
                <h5 className="section-heading">Product Story</h5>
                <p className="description-text">{selectedProduct.fullDescription}</p>
              </div>
              
              {/* Specifications */}
              <div className="specs-section">
                <h5 className="section-heading">Technical Details</h5>
                <div className="specs-grid">
                  {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                    <div className="spec-item" key={key}>
                      <span className="spec-label">{key}</span>
                      <span className="spec-value">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div className="features-section">
                <h5 className="section-heading mt-3">Key Highlights</h5>
                <ul className="features-list">
                  {selectedProduct.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="bhagwa-dot">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
      
      <Modal.Footer className="virasat-modal-footer">
        <div className="quotation-form-container">
          <h5 className="form-heading">Request Custom Quote</h5>
          <Form>
            <Row className="g-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="customerName"
                    placeholder="Full Name"
                    className="virasat-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="+91 "
                    className="virasat-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="email@example.com"
                    className="virasat-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Quantity Needed</Form.Label>
                  <Form.Control
                    type="number"
                    name="quantity"
                    min="1"
                    placeholder="1"
                    className="virasat-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Special Requirements</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={1}
                    name="requirements"
                    placeholder="Customizations or special requests..."
                    className="virasat-input"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </div>
        
        <div className="footer-actions">
          <Button variant="light" className="products-btn-secondary btn btn-primary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="bhagwa" className="products-btn-primary btn btn-primary">
            Submit
          </Button>
        </div>
      </Modal.Footer>
    </div>
  )}
</Modal>
    </div>
  )
}

export default Products
