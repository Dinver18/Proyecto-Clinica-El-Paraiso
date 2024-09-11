import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Services from './pages/OurServices/OurServices';
import Contact from './pages/Contact/Contact';
import AboutUs from './pages/AboutUs/AboutUs'; // Importa tu Navbar
import Footer from './components/layouts/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Navbar />
        <div className="container mx-auto "> {/* Ajuste con margen superior */}
          <Routes>
            <Route path="/Ourservices" element={<Services />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;



