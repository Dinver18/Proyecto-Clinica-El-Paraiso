import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Cierra el menú
  };

  return (
    <nav className="w-full bg-warning p-2 sticky top-0 z-40 flex flex-col">
      <div className="container mx-auto flex justify-center lg:justify-center items-center">
        {/* Enlaces de navegación */}
        <div className="hidden sm:flex items-center space-x-6">
        <Link to="/" className="text-white px-3 py-1  font-bold text-sm sm:text-lg hover:border-b-4 hover:border-yellow-400">
        Inicio
        </Link>

          <Link to="/Ourservices" className="text-white px-3 py-1  font-bold text-sm sm:text-lg hover:border-b-4 hover:border-yellow-400">
            Nuestros Servicios
          </Link>
          <Link to="/AboutUs" className="text-white px-3 py-1  font-bold text-sm sm:text-lg hover:border-b-4 hover:border-yellow-400">
            Sobre Nosotros
          </Link>
          <Link to="/Contact" className="text-white px-3 py-1  font-bold text-sm sm:text-lg hover:border-b-4 hover:border-yellow-400" >
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
        } sm:hidden bg-warning absolute top-full left-0 w-full flex flex-col items-center space-y-2 mt-2`}
      >
        <Link 
          to="/Home" 
          className="text-white px-4 py-1 hover:border-b-4 hover:border-yellow-400 font-bold text-lg"
          onClick={handleLinkClick} // Cierra el menú al hacer clic
        >
          Inicio
        </Link>
        
        <Link to="/Ourservices" className="text-white px-4 py-1 hover:border-b-4 hover:border-yellow-400 font-bold text-lg"onClick={handleLinkClick}>
          Nuestros Servicios
        </Link>
        <Link to="/AboutUs" className="text-white px-4 py-1 hover:border-b-4 hover:border-yellow-400 font-bold text-lg"onClick={handleLinkClick}>
          Sobre Nosotros
        </Link>
        <Link to="/Contact" className="text-white px-4 py-1 hover:border-b-4 hover:border-yellow-400 font-bold text-lg"onClick={handleLinkClick}>
          Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
