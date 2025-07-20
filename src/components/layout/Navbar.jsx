"use client"

import { useState } from "react"
import { Navbar, Nav, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../../assets/scss/components/navbar.scss"

const NavbarComponent = ({ isVisible }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  const handleLinkClick = () => {
    setIsExpanded(false)
  }

  return (
    <Navbar
      expand="lg"
      className={`modern-navbar ${isVisible ? "modern-navbar-visible" : "modern-navbar-hidden"}`}
      expanded={isExpanded}
    >
      <Container>
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/" className="modern-navbar-brand" onClick={handleLinkClick}>
          <img src="/assets/images/logo.png" alt="Mahashakti Engineering" className="modern-navbar-logo" />
          {/* <span className="modern-navbar-brand-text">Mahashakti Engineering</span> */}
        </Navbar.Brand>

        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-nav" className="modern-navbar-toggler" onClick={handleToggle}>
          <span className="modern-navbar-toggler-icon"></span>
          <span className="modern-navbar-toggler-icon"></span>
          <span className="modern-navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* Navigation Content */}
        <Navbar.Collapse id="navbar-nav" className="modern-navbar-collapse">
          {/* Center Navigation Links */}
          <Nav className="modern-navbar-nav">
            <Nav.Link as={Link} to="/" className="modern-navbar-link" onClick={handleLinkClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="modern-navbar-link" onClick={handleLinkClick}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="modern-navbar-link" onClick={handleLinkClick}>
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="modern-navbar-link" onClick={handleLinkClick}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/quality" className="modern-navbar-link" onClick={handleLinkClick}>
              Quality
            </Nav.Link>
            <Nav.Link as={Link} to="/infrastructure" className="modern-navbar-link" onClick={handleLinkClick}>
              Infrastructure
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="modern-navbar-link" onClick={handleLinkClick}>
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/careers" className="modern-navbar-link" onClick={handleLinkClick}>
              Careers
            </Nav.Link>
          </Nav>

          {/* Contact Button */}
          <div className="modern-navbar-contact">
            <Button as={Link} to="/contact" className="modern-navbar-contact-btn" onClick={handleLinkClick}>
              Contact
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent
