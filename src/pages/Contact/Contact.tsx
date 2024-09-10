import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <p>Contáctanos para más información o para programar una cita. <Link to="/contacto" className="text-blue-600 underline">Ponte en contacto</Link></p>
    </div>
  );
}

export default Contact;
