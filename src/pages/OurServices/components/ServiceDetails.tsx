import React, { useState } from 'react';
import { Servicios } from '../Model/Servicios';

interface ServiceDetailsProps {
  service: Servicios;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ service }) => {
  const [isAtencionesOpen, setIsAtencionesOpen] = useState(false);
  const [isHorarioOpen, setIsHorarioOpen] = useState(false);
  const [isNormasOpen, setIsNormasOpen] = useState(false);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
      <div className="border-t-4 border-yellow-400 mb-4"></div>
      <p className="mb-8 text-sm lg:text-base text-left">{service.content}</p>

      {/* Sub-secciones dinámicas */}
      {service.subSections.map((subSection, index) => {
        const isOpen = 
          index === 0 ? isAtencionesOpen : 
          index === 1 ? isHorarioOpen : 
          isNormasOpen;

        const setIsOpen = 
          index === 0 ? setIsAtencionesOpen : 
          index === 1 ? setIsHorarioOpen : 
          setIsNormasOpen;

        return (
          <section key={index} className="mb-3">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold mb-2">{subSection.title}</h3>
              <button
                className="text-xl lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? '-' : '+'}
              </button>
            </div>
            <div className="border-t-4 border-blue-600 mb-4"></div>
            <p className={`lg:block ${isOpen ? 'block' : 'hidden'}`}>
              {subSection.content}
            </p>
          </section>
        );
      })}
    </div>
  );
};

export default ServiceDetails;
