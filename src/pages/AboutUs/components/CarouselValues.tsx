import React, { useState, useEffect } from 'react';
import { FaHeart, FaCheckCircle, FaEye, FaLightbulb, FaBriefcase } from 'react-icons/fa'; // Iconos de Font Awesome

const slides = [
  {
    title: "Calidad",
    description: "Nos esforzamos por ofrecer servicios médicos de excelencia y gratuitos.",
    icon: <FaHeart className="text-secondary text-9xl" />,
    backgroundColor: "bg-gradient-to-r from-primary to-gray-100",
  },
  {
    title: "Confianza",
    description: "Nuestros pacientes nos recomiendan por nuestra atención personalizada.",
    icon: <FaCheckCircle className="text-secondary text-9xl" />,
    backgroundColor: "bg-gradient-to-r from-primary to-gray-100",
  },

  {
    title: "Transparencia",
    description: "Nos caracterizamos por ser claros y directos en nuestras acciones y decisiones, fomentando la confianza en nuestros pacientes.",
    icon: <FaEye className="text-secondary text-9xl" />,
    backgroundColor: "bg-gradient-to-r from-primary to-gray-100",
  },

  {
    title: "Innovación",
    description: "Buscamos siempre mejorar a través de nuevas ideas, tecnologías y procesos para ofrecer el mejor servicio posible.",
    icon: <FaLightbulb className="text-secondary text-9xl" />,
    backgroundColor: "bg-gradient-to-r from-primary to-gray-100",
  },

  {
    title: "Profesionalismo",
    description: "Actuamos con responsabilidad, respeto y dedicación, garantizando una atención de calidad en cada servicio que ofrecemos.",
    icon: <FaBriefcase className="text-secondary text-9xl" />,
    backgroundColor: "bg-gradient-to-r from-primary to-gray-100",
  },
  // Puedes agregar más slides aquí
];

function CarouselValues() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 10000); // Cambiar el slide cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[350px] mt-8">
      {/* Contenedor de cada slide */}
      <div className={`w-full h-full flex flex-col items-center justify-center text-center px-4 transition-all duration-500 ${slides[currentIndex].backgroundColor}`}>
        <div>{slides[currentIndex].icon}</div>
        <h2 className="text-4xl lg:text-6xl font-bold text-black mt-4">{slides[currentIndex].title}</h2>
        <p className="text-md font-bold text-black mt-2">{slides[currentIndex].description}</p>
      </div>

      {/* Círculos indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CarouselValues;
