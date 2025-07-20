import { Container, Row, Col, Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/scss/pages/gallery.scss"

const Gallery = () => {
  const galleryCategories = [
    {
      title: "Manufacturing Facilities",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Manufacturing Facility 1" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Manufacturing Facility 2" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Manufacturing Facility 3" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Manufacturing Facility 4" },
      ],
    },
    {
      title: "Our Products",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Product 1" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Product 2" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Product 3" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Product 4" },
      ],
    },
    {
      title: "Quality Control",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Quality Control 1" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Quality Control 2" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Quality Control 3" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Quality Control 4" },
      ],
    },
    {
      title: "Team & Infrastructure",
      images: [
        { src: "/placeholder.svg?height=300&width=400", alt: "Team 1" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Infrastructure 1" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Team 2" },
        { src: "/placeholder.svg?height=300&width=400", alt: "Infrastructure 2" },
      ],
    },
  ]

  return (
    <div className="gallery-page">
      {/* Hero Section */}
      <section className="gallery-hero">
        <Container>
          <Row>
            <Col>
              <div className="gallery-hero-content">
                <h1 className="gallery-hero-title">Our Gallery</h1>
                <p className="gallery-hero-subtitle">
                  Explore Mahashakti Engineering's state-of-the-art facilities, precision products, and commitment to
                  excellence in manufacturing
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Content */}
      <section className="gallery-content">
        <Container>
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="gallery-category">
              <Row>
                <Col>
                  <h2 className="gallery-category-title">{category.title}</h2>
                </Col>
              </Row>
              <Row>
                {category.images.map((image, imageIndex) => (
                  <Col lg={3} md={4} sm={6} xs={12} key={imageIndex}>
                    <div className="gallery-item">
                      <div className="gallery-image-wrapper">
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} className="gallery-image" fluid />
                        <div className="gallery-overlay">
                          <div className="gallery-overlay-content">
                            <span className="gallery-overlay-text">{image.alt}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
        </Container>
      </section>

      {/* Call to Action */}
      <section className="gallery-cta">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <div className="gallery-cta-content">
                <h3 className="gallery-cta-title">Ready to Work With Us?</h3>
                <p className="gallery-cta-text">
                  Experience the Mahashakti Engineering difference. Contact us today to discuss your manufacturing needs
                  and discover how our expertise can benefit your project.
                </p>
                <div className="gallery-cta-buttons">
                  <button className="gallery-btn gallery-btn-primary">Get Quote</button>
                  <button className="gallery-btn gallery-btn-secondary">Contact Us</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Gallery
