"use client"

import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../assets/scss/components/navbar.scss"
const Header = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollTimeout, setScrollTimeout] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)

      // Show navbar when scroll stops
      const newTimeout = setTimeout(() => {
        setIsVisible(true)
      }, 150)

      setScrollTimeout(newTimeout)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (scrollTimeout) {
        clearTimeout(scrollTimeout)
      }
    }
  }, [lastScrollY, scrollTimeout])

  return (
    <header className="header">
      <div className="header-top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="header-contact-info">Email: info@mahashaktieng.com</span>
            </div>
            <div className="col-md-6 text-end">
              <span className="header-contact-info">Phone: +91 1234567890</span>
            </div>
          </div>
        </div>
      </div>
      <Navbar isVisible={isVisible} />
    </header>
  )
}

export default Header
