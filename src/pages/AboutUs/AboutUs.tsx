import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
      <p>Conoce más sobre nuestra clínica y el equipo de profesionales que te atenderán. <Link to="/sobre-nosotros" className="text-blue-600 underline">Leer más</Link></p>
    </div>
  );
}

export default AboutUs;
