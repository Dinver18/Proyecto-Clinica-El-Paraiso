import React, { useState, useEffect } from 'react';
import FotoAC from '../assets/FotoAC.png';
import A from '../assets/1.png';
import B from '../assets/2.png';
import C from '../assets/3.png';
import D from '../assets/4.png';

const images = [
  FotoAC,
  A,
  B,
  C,
  D,
];

function CarouselValues() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Cambiar la imagen cada 3 segundos
    return () => clearInterval(interval); // Limpiar intervalo al desmontar el componente
  }, []);

  const handleDotClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    
    <div className="relative w-full h-[400px] mt-8">
        
      {/* Imágenes */}
      <div className="w-full h-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Círculos indicadores */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CarouselValues;
