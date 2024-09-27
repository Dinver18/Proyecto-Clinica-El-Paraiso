import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroscope, faSuitcaseMedical,faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

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
          <Link to="/OurServices/farmacia" className="block transform transition-transform duration-300 hover:scale-105">
          <div className="flex flex-col max-w-sm  items-center  justify-center bg-slate-300 rounded-lg px-6 py-4 md:max-w-full">
              <div className=" flex flex-col h-32 w-48 lg:w-52 lg:h-45 items-center justify-center bg-slate-50 rounded-full">
                  <FontAwesomeIcon icon={faSuitcaseMedical} className="h-24 w-24 lg:h-24 lg:w-24 object-cover" style={{color: "#ffd700",}} />
              </div>
            <p className="font-bold text-black text-2xl text-center mt-1">Farmacia</p>
       
          </div>
          </Link>

          {/* Item */}
          <Link to="/Ourservices/laboratorios" className="block transform transition-transform duration-300 hover:scale-105">
          <div className="flex max-w-sm flex-col items-center bg-slate-300 rounded-lg px-6 py-4 md:max-w-full">
              <div className=" flex flex-col h-32 w-48 lg:w-52 lg:h-45 items-center justify-center bg-slate-50 rounded-full">
                  <FontAwesomeIcon icon={faMicroscope} className="h-28 w-28 lg:h-24 lg:w-24 object-cover" style={{color: "#001b68",}} />
              </div>
            <p className="font-bold text-black text-2xl text-center mt-1">Laboratorios</p>
          </div>
          </Link>

          {/* Item */}
          <Link to="/Ourservices/medicina" className="block transform transition-transform duration-300 hover:scale-105">
          <div className="flex max-w-sm flex-col items-center bg-slate-300 rounded-lg px-6 py-4 md:max-w-full ">
              <div className=" flex flex-col h-32 w-48 lg:w-52 lg:h-45 items-center justify-center bg-slate-50 rounded-full">
                  <FontAwesomeIcon icon={faHandHoldingMedical} className="h-28 w-28 lg:h-24 lg:w-24 object-cover" style={{color: "#ed3419",}} />
              </div>
            <p className="font-bold text-black text-2xl text-center mt-1">Medicina Interna</p>
          </div>
          </Link>
        

        </div>
      </div>
    </section>
    );
}

export default CardServices;