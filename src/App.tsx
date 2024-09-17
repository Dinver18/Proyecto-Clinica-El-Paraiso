import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import OurServices from './pages/OurServices/OurServices';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs'; 
import Home from './pages/Home/Home'; 
import Footer from './components/layouts/Footer';


function App() {
  return (
    <>
    <Router>
<Header />
<Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Ourservices/*" element={<OurServices />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
        <Footer />
      
    </Router>

    
      
 
    </>
  );
}

export default App;



