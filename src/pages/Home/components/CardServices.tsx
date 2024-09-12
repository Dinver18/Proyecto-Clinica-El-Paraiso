import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faSuitcaseMedical,faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';

function CardServices() {
    return (
<section>
      {/* Container */}
      <div className="mx-auto w-full max-w-6xl px-5 py-4 md:px-10 md:py-8">
        {/* Title */}
        <h2 className=" text-3xl font-bold md:text-5xl text-info items-start">
        Amplia Gama de Servicios para Tu Salud Integral 
        </h2>
        {/* Content */}
        <div className="mx-auto mt-8 grid max-w-5xl justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:gap-6">
          {/* Item */}
          <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col max-w-sm  items-center  justify-center bg-primary px-6 py-4 md:max-w-full">
              <div className=" flex flex-col h-32 w-48 lg:w-52 lg:h-45 items-center justify-center bg-prrimary">
                  <FontAwesomeIcon icon={faSuitcaseMedical} className="h-24 w-24 lg:h-24 lg:w-24 object-cover" style={{color: "#ffd700",}} />
              </div>
            <p className="font-bold text-white text-2xl text-center">Farmacia</p>
       
          </div>
          </a>

          {/* Item */}
          <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
          <div className="flex max-w-sm flex-col items-center  bg-primary px-6 py-4 md:max-w-full">
              <div className=" flex flex-col h-32 w-48 lg:w-52 lg:h-45 items-center justify-center bg-prrimary">
                  <FontAwesomeIcon icon={faMicroscope} className="h-28 w-28 lg:h-24 lg:w-24 object-cover" style={{color: "#ffd700",}} />
              </div>
            <p className="font-bold text-white text-2xl text-center">Laboratorios</p>
          </div>
          </a>

          {/* Item */}
          <a href="#" className="block transform transition-transform duration-300 hover:scale-105">
          <div className="flex max-w-sm flex-col items-center bg-primary px-6 py-4 md:max-w-full ">
              <div className=" flex flex-col h-32 w-48 lg:w-52 lg:h-45 items-center justify-center bg-prrimary">
                  <FontAwesomeIcon icon={faHandHoldingMedical} className="h-28 w-28 lg:h-24 lg:w-24 object-cover" style={{color: "#ffd700",}} />
              </div>
            <p className="font-bold text-white text-2xl text-center">Consulta Externa</p>
          </div>
          </a>
        

        </div>
      </div>
    </section>
    );
}

export default CardServices;