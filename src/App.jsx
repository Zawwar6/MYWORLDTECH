import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Services/Service';
import Footer from './components/Footer/Footer';
import Contact from './components/Contacta/Contact';
import Gallery from './components/Gallery/Gallery';
import Team from './components/Team/Team';
import CaseStudy from './components/CaseStudy/CaseStudy';
import ScrollToTop from './components/Home/ScrollToTop';


const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />  
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/about-us" element={<About />} />  
        <Route path="/services" element={<Service />} /> 
        <Route path="/case-study" element={<CaseStudy/>} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path='/meet-our-team' element={<Team/>}/>
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer />    
    </Router>
  );
};

export default App;
