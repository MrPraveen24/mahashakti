import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../../assets/scss/components/footer.scss';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__brand-title">Mahashakti Engineering</h3>
            <p className="footer__brand-description">
              A leading manufacturer of industrial products with a commitment to quality and innovation since 2005.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link"><FaLinkedin /></a>
              <a href="#" className="footer__social-link"><FaFacebook /></a>
              <a href="#" className="footer__social-link"><FaTwitter /></a>
              <a href="#" className="footer__social-link"><FaInstagram /></a>
            </div>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">Quick Links</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item"><a href="/" className="footer__nav-link">Home</a></li>
              <li className="footer__nav-item"><a href="/about" className="footer__nav-link">About Us</a></li>
              <li className="footer__nav-item"><a href="/products" className="footer__nav-link">Products</a></li>
              <li className="footer__nav-item"><a href="/contact" className="footer__nav-link">Contact Us</a></li>
              <li className="footer__nav-item"><a href="/terms" className="footer__nav-link">Terms & Conditions</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">Our Products</h4>
            <ul className="footer__nav-list">
              <li className="footer__nav-item"><a href="/products/valves" className="footer__nav-link">Industrial Valves</a></li>
              <li className="footer__nav-item"><a href="/products/pumps" className="footer__nav-link">Pumps & Parts</a></li>
              <li className="footer__nav-item"><a href="/products/fittings" className="footer__nav-link">Pipe Fittings</a></li>
              <li className="footer__nav-item"><a href="/products/custom" className="footer__nav-link">Custom Solutions</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__section-title">Contact Info</h4>
            <ul className="footer__contact-list">
              <li className="footer__contact-item">
                <FaMapMarkerAlt className="footer__contact-icon" />
                <span className="footer__contact-text">
                  Plot No 136/180, Basai Enclave, Gurgaon, Hariyana - 122001
                </span>
              </li>
              <li className="footer__contact-item">
                <FaPhone className="footer__contact-icon" />
                <span className="footer__contact-text">+91 9899981379</span>
              </li>
              <li className="footer__contact-item">
                <FaPhone className="footer__contact-icon" />
                <span className="footer__contact-text">+91 9899936852</span>
              </li>
              <li className="footer__contact-item">
                <FaEnvelope className="footer__contact-icon" />
                <span className="footer__contact-text">info@mahashaktieng.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="footer__divider" />

        <div className="footer__copyright">
          <span className="footer__copyright-text">
            &copy; {new Date().getFullYear()} Mahashakti Engineering. All Rights Reserved.
          </span>
          <span className="footer__copyright-text">
            Designed with ❤️ for industrial excellence
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;