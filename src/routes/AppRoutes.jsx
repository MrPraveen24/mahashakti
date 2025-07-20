import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Services from '../pages/Services';
import Quality from '../pages/Quality';
import Infrastructure from '../pages/Infrastructure';
import Gallery from '../pages/Gallery';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';
import Terms from '../pages/Terms';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;