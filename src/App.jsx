import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Services/Service';



import Footer from './components/Footer/Footer';
import Contact from './components/Contacta/Contact';

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
