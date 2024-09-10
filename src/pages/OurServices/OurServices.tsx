import React from 'react';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
      <p>Ofrecemos una amplia variedad de servicios médicos para cubrir todas tus necesidades. <Link to="/servicios" className="text-blue-600 underline">Ver más</Link></p>
    </div>
  );
}

export default Services;
