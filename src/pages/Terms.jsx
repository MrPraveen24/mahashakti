import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Accordion, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/pages/terms.scss';

const Terms = () => {
  const [lastUpdated] = useState('January 15, 2025');

  const termsData = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: `Welcome to Mahashakti Engineering. These Terms and Conditions ("Terms") govern your use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these terms, you may not access our services.

      Mahashakti Engineering is a leading manufacturer and supplier of construction equipment and engineering solutions. We are committed to providing high-quality products and services while maintaining the highest standards of business ethics and customer satisfaction.`
    },
    {
      id: 'definitions',
      title: 'Definitions',
      content: `For the purposes of these Terms and Conditions:
      
      • "Company" (referred to as "we", "us", or "our") refers to Mahashakti Engineering.
      • "Service" refers to the website, products, and services offered by Mahashakti Engineering.
      • "User" or "Customer" refers to any individual or entity that accesses or uses our Service.
      • "Products" refers to construction equipment, machinery, and related components manufactured or supplied by us.
      • "Agreement" refers to these Terms and Conditions along with any other legal notices published by us on the Service.`
    },
    {
      id: 'use-of-service',
      title: 'Use of Service',
      content: `You may use our Service for lawful purposes only. You agree not to use the Service:
      
      • In any way that violates applicable local, national, or international law or regulation
      • To transmit or procure the sending of any unsolicited or unauthorized advertising or promotional material
      • To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity
      • To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service
      
      We reserve the right to terminate or suspend your access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.`
    },
    {
      id: 'products-services',
      title: 'Products and Services',
      content: `Mahashakti Engineering offers a comprehensive range of construction equipment and engineering services including:
      
      • Heavy machinery manufacturing and supply
      • Custom equipment design and fabrication
      • Equipment rental and leasing services
      • Maintenance and repair services
      • Technical consultation and support
      • Training and certification programs
      
      All products are manufactured according to industry standards and come with appropriate warranties. Service availability may vary by location and is subject to our operational capacity and technical feasibility.`
    },
    {
      id: 'orders-payments',
      title: 'Orders and Payments',
      content: `When you place an order with us, you agree to provide accurate and complete information. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at our discretion.
      
      Payment terms are as follows:
      • Advance payment may be required for custom orders
      • Payment methods include bank transfer, check, and approved credit terms
      • All prices are subject to change without notice
      • Delivery charges and taxes are additional unless otherwise specified
      
      Late payments may incur additional charges as per our credit policy. We reserve the right to suspend services for overdue accounts.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property Rights',
      content: `The Service and its original content, features, and functionality are and will remain the exclusive property of Mahashakti Engineering and its licensors. The Service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
      
      You may not:
      • Reproduce, distribute, or create derivative works from our content
      • Use our trademarks or logos without permission
      • Reverse engineer or attempt to extract source code from our proprietary systems
      • Copy or adapt our designs, processes, or methodologies without authorization`
    },
    {
      id: 'warranties-disclaimers',
      title: 'Warranties and Disclaimers',
      content: `We provide warranties on our products as specified in individual product documentation. However, except as expressly stated, we make no warranties or representations about the accuracy or completeness of the content of this Service or the content of any sites linked to this Service.
      
      To the fullest extent permitted by law, we exclude:
      • All conditions, warranties, and other terms which might otherwise be implied by statute, common law, or the law of equity
      • Any liability for any direct, indirect, or consequential loss or damage incurred by any user in connection with our Service
      
      This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation or misrepresentation as to a fundamental matter.`
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      content: `In no event shall Mahashakti Engineering, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
      
      Our total liability to you for all damages, losses, and causes of action (whether in contract, tort, or otherwise) shall not exceed the amount paid by you, if any, for accessing or using our Service during the twelve (12) months immediately preceding the date of the claim.
      
      Some jurisdictions do not allow the exclusion of certain warranties or the limitation of liability for consequential or incidental damages, so the above limitations may not apply to you.`
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      content: `You agree to defend, indemnify, and hold harmless Mahashakti Engineering and its licensee and licensors, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees).
      
      This indemnification obligation applies to claims arising from:
      • Your use of and access to the Service
      • Your violation of any term of these Terms
      • Your violation of any third-party right, including without limitation any copyright, property, or privacy right
      • Any claim that your use of the Service caused damage to a third party`
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      content: `These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
      
      Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts located in [City, State], India. You consent to the personal jurisdiction of such courts and waive any objection to the laying of venue in such courts.
      
      If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.`
    },
    {
      id: 'privacy-data',
      title: 'Privacy and Data Protection',
      content: `Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information when you use our Service. By using our Service, you agree to the collection and use of information in accordance with our Privacy Policy.
      
      We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
      
      You have the right to:
      • Access your personal data
      • Correct inaccurate data
      • Request deletion of your data
      • Object to processing of your data
      • Request data portability`
    },
    {
      id: 'changes-terms',
      title: 'Changes to Terms',
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
      
      What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
      
      We encourage you to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.`
    }
  ];

  const quickLinks = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'definitions', title: 'Definitions' },
    { id: 'use-of-service', title: 'Use of Service' },
    { id: 'products-services', title: 'Products & Services' },
    { id: 'orders-payments', title: 'Orders & Payments' },
    { id: 'intellectual-property', title: 'Intellectual Property' },
    { id: 'warranties-disclaimers', title: 'Warranties & Disclaimers' },
    { id: 'limitation-liability', title: 'Limitation of Liability' },
    { id: 'indemnification', title: 'Indemnification' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'privacy-data', title: 'Privacy & Data Protection' },
    { id: 'changes-terms', title: 'Changes to Terms' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="terms-page">
      {/* Hero Section */}
     <section className="terms-hero">
  <Container>
    <Row>
      <Col lg={8} className="mx-auto text-center">
        <h1 className="hero-title">Terms & Conditions</h1>
        <p className="hero-subtitle">
          Please read these terms and conditions carefully before using our services
        </p>
        <div className="last-updated">
          <Badge bg="primary" className="update-badge">
            Last Updated: {lastUpdated}
          </Badge>
        </div>
      </Col>
    </Row>
  </Container>
</section>


      {/* Main Content */}
      <section className="terms-content py-5">
        <Container>
          <Row>
            {/* Sidebar Navigation */}
            <Col lg={3} className="mb-4">
              <Card className="navigation-card sticky-top">
                <Card.Header className="nav-header">
                  <h5 className="mb-0">Quick Navigation</h5>
                </Card.Header>
                <Card.Body className="nav-body">
                  <div className="nav-links">
                    {quickLinks.map((link) => (
                      <button
                        key={link.id}
                        className="nav-link-btn"
                        onClick={() => scrollToSection(link.id)}
                      >
                        {link.title}
                      </button>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Terms Content */}
            <Col lg={9}>
              <div className="terms-sections">
                {termsData.map((section, index) => (
                  <Card key={section.id} className="terms-section-card mb-4" id={section.id}>
                    <Card.Body>
                      <div className="section-header">
                        <div className="section-number">{index + 1}</div>
                        <h2 className="section-title">{section.title}</h2>
                      </div>
                      <div className="section-content">
                        {section.content.split('\n').map((paragraph, pIndex) => (
                          <p key={pIndex} className="section-paragraph">
                            {paragraph.trim()}
                          </p>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </div>

              {/* Contact Information */}
              <Card className="contact-card">
                <Card.Body>
                  <h3 className="contact-title">Contact Information</h3>
                  <p className="contact-description">
                    If you have any questions about these Terms and Conditions, please contact us:
                  </p>
                  <div className="contact-details">
                    <div className="contact-item">
                      <strong>Company:</strong> Mahashakti Engineering
                    </div>
                    <div className="contact-item">
                      <strong>Email:</strong> legal@mahashaktiengineering.com
                    </div>
                    <div className="contact-item">
                      <strong>Phone:</strong> +91 (0) 123-456-7890
                    </div>
                    <div className="contact-item">
                      <strong>Address:</strong> 123 Industrial Area, Engineering District, Mumbai, Maharashtra 400001, India
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer CTA */}
      <section className="terms-footer py-4 bg-light">
        <Container>
          <Row>
            <Col lg={8} className="mx-auto text-center">
              <h4 className="footer-title">Have Questions?</h4>
              <p className="footer-description">
                Our legal team is here to help clarify any aspects of our terms and conditions.
              </p>
              <div className="footer-buttons">
                <Button variant="primary" size="lg" className="me-3">
                  Contact Legal Team
                </Button>
                <Button variant="outline-primary" size="lg">
                  Download PDF
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Terms;
