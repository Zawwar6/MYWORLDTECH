import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Services/Service';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonials/Testimonial';
import ReadyStart from './components/ReadyStart/ReadyStart';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Slider from './components/Slider/Slider';

const App = () => {
  return (
    <Router>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about" element={<About />} />  
        <Route path="/services" element={<Service />} />  
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />  
    </Router>
  );
};

export default App;
