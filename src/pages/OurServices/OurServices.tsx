import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ServiceDetails from './components/ServiceDetails';
import { useServices } from './hooks/useServices';

function OurServices() {
  const { servicios } = useServices(); // Usar hook para obtener los servicios
  const [selectedService, setSelectedService] = useState<string | null>(servicios.length > 0 ? servicios[0].id : null);

  return (
    <div className="flex">
      {/* Menú lateral */}
      <div className="w-1/2 lg:w-1/4 h-screen text-black p-4">
        <h2 className="text-lg font-bold mb-4">Nuestros Servicios</h2>
        <ul>
          {servicios.map((service) => (
            <li
              key={service.id}
              className={`p-2 cursor-pointer 
                ${selectedService === service.id ? 'text-blue-600 font-bold text-lg border-b-4 border-yellow-400' : 'text-gray-600'}
                hover:text-blue-600 hover:text-lg`}
              onClick={() => setSelectedService(service.id)}
            >
              <Link to={service.id}>{service.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido dinámico */}
      <div className="w-3/4 p-6">
        <Routes>
          {servicios.map((service) => (
            <Route
              key={service.id}
              path={service.id}
              element={<ServiceDetails service={service} />} // Pasar el servicio como prop
            />
          ))}
        </Routes>
      </div>
    </div>
  );
}

  


export default OurServices;
