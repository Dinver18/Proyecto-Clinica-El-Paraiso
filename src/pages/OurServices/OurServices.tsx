import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Farmacia from './components/Farmacia';

function OurServices () {
  const [selectedService, setSelectedService] = useState('Farmacia');



  return (
    <div className="flex">
      {/* Menú lateral */}
      <div className="w-1/2 lg:w-1/4 h-screen  text-black p-4">
        <h2 className="text-lg font-bold mb-4">Nuestros Servicios</h2>
        <ul>
        <li
            className={`p-2 cursor-pointer 
                ${selectedService === 'Farmacia' ? 'text-blue-600 font-bold text-lg border-b-4 border-yellow-400' : 'text-gray-600'}
                   hover:text-blue-600 hover:text-lg`}
                      onClick={() => setSelectedService('Farmacia')}>
           <Link to="farmacia">Farmacia</Link>
        </li>

        <li
            className={`p-2 cursor-pointer 
                ${selectedService === 'Laboratorios' ? 'text-blue-600 font-bold text-lg border-b-4 border-yellow-400' : 'text-gray-600'}
                   hover:text-blue-600 hover:text-lg`}
                      onClick={() => setSelectedService('Laboratorios')}>
            Laboratorios
        </li>
          {/* Puedes agregar más servicios aquí */}
        </ul>
      </div>
      {/* Contenido */}

       {/* Contenido dinámico */}
       <div className="w-3/4 p-6">
        <Routes>
          <Route path="farmacia" element={<Farmacia />} />
          
          {/* Agrega más rutas aquí según los servicios */}
        </Routes>
      </div>


      </div>
  );}
  


export default OurServices;
