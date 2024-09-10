import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú
  };

  return (
    <nav className="w-full bg-primary p-4 mt-10 fixed top-3 sm:top-5 lg:top-20 md:top-20 left-0 z-40">
      <div className="container mx-auto flex justify-center lg:justify-center items-center">
        {/* Enlaces de navegación */}
        <div className="hidden sm:flex items-center space-x-6">
          <Link to="/Ourservices" className="text-white px-3 py-2 hover:bg-blue-700 rounded font-bold text-sm sm:text-lg">
            Nuestros Servicios
          </Link>
          <Link to="/AboutUs" className="text-white px-3 py-2 hover:bg-blue-700 rounded font-bold text-sm sm:text-lg">
            Sobre Nosotros
          </Link>
          <Link to="/Contact" className="text-white px-3 py-2 hover:bg-blue-700 rounded font-bold text-sm sm:text-lg" >
            Contacto
          </Link>
        </div>

        {/* Boton pantallas pequeñas*/}
        <div className="sm:hidden ml-auto flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:hidden bg-primary absolute top-full left-0 w-full flex flex-col items-center space-y-2 mt-2`}
      >
        <Link to="/Ourservices" className="text-white px-4 py-2 hover:bg-blue-700 rounded font-bold text-lg"onClick={handleLinkClick}>
          Nuestros Servicios
        </Link>
        <Link to="/AboutUs" className="text-white px-4 py-2 hover:bg-blue-700 rounded font-bold text-lg"onClick={handleLinkClick}>
          Sobre Nosotros
        </Link>
        <Link to="/Contact" className="text-white px-4 py-2 hover:bg-blue-700 rounded font-bold text-lg"onClick={handleLinkClick}>
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
