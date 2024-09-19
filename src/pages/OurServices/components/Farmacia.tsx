// src/components/Farmacia.tsx

import React, { useState } from 'react';

function Farmacia  ()  {
  const [isAtencionesOpen, setIsAtencionesOpen] = useState(false);
  const [isHorarioOpen, setIsHorarioOpen] = useState(false);
  const [isNormasOpen, setIsNormasOpen] = useState(false);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Farmacia</h2>
      <div className="border-t-4 border-yellow-400 mb-4"></div>
      <p className="mb-8">
        "En la farmacia de la Clínica Popular El Paraíso, nos comprometemos a brindarte el mejor servicio y una amplia variedad de medicamentos para satisfacer tus necesidades de salud. Nuestro equipo de farmacéuticos está listo para ayudarte a encontrar los productos adecuados y ofrecerte el asesoramiento que necesites."
      </p>
      {/* Sección 1: Atenciones Disponibles */}
      <section className="mb-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold mb-2">Atenciones Disponibles</h3>
          <button
            className="text-xl lg:hidden"
            onClick={() => setIsAtencionesOpen(!isAtencionesOpen)}
          >
            {isAtencionesOpen ? '-' : '+'}
          </button>
        </div>
        <div className="border-t-4 border-blue-600 mb-4"></div>
        <p className={`lg:block ${isAtencionesOpen ? 'block' : 'hidden'}`}>
          Ofrecemos los medicamentos que necesites de manera gratuita para cubrir cualquier enfermedad. Además, brindamos un servicio especializado en el despacho rápido de productos.
        </p>
      </section>
      {/* Sección 2: Horario de Atención */}
      <section className="mb-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold mb-2">Horario de Atención</h3>
          <button
            className="text-xl lg:hidden"
            onClick={() => setIsHorarioOpen(!isHorarioOpen)}
          >
            {isHorarioOpen ? '-' : '+'}
          </button>
        </div>
        <div className="border-t-4 border-blue-600 mb-4"></div>
        <p className={`lg:block ${isHorarioOpen ? 'block' : 'hidden'}`}>
          Nuestra farmacia está abierta las 24 horas del día, los 7 días de la semana, para asegurarnos de que siempre tengas acceso a los medicamentos y productos que necesitas, sin importar la hora.
        </p>
      </section>
      {/* Sección 3: Normas para el Retiro de Medicamentos */}
      <section className="mb-8">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold mb-2">Normas para el Retiro de Medicamentos</h3>
          <button
            className="text-xl lg:hidden"
            onClick={() => setIsNormasOpen(!isNormasOpen)}
          >
            {isNormasOpen ? '-' : '+'}
          </button>
        </div>
        <div className="border-t-4 border-blue-600 mb-4"></div>
        <p className={`lg:block ${isNormasOpen ? 'block' : 'hidden'}`}>
          Para retirar medicamentos para bebés, es necesario presentar un récipe emitido por nuestros médicos de la clínica.
        </p>
      </section>
    </div>
  );
};

export default Farmacia;
