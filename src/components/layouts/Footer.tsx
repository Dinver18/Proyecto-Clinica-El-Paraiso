import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
    return (
        <footer className="w-full bg-neutral p-4 text-white bottom-0 left-0 z-40 ">
            {/* Primer div: Ocupa el ancho completo del footer */}
            <div className="relative -mx-4 -mr-4 -mt-4 bg-secondary p-4 text-center">
                <h6 className="md:text-2xl text-black font-bold">Clínica popular El Paraiso</h6>
            </div>
            <div className="relative w-full bg-slate-300 p-4 text-center">
                <div className="flex bg-slate-300 text-center justify-center items-center">
                    <FontAwesomeIcon icon={faPhone} className="h-10 w-10 lg:mr-4 lg:h-14 lg:w-14 object-cover" style={{ color: "#001b68", }} />
                    <p className="text-black  md:text-2xl">"¿Tienes alguna consulta? ¡Llámanos, estamos a tu servicio!"<br />0212-8706898</p>
                </div>
                <div className="divider divider-vertical divider-primary divider-start"></div>
                <div className="flex bg-slate-300 text-center justify-center items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="h-10 w-10 lg:h-14 lg:w-14 lg:mr-4 object-cover" style={{ color: "#ed3419", }}></FontAwesomeIcon>
                    <p className="text-black md:text-2xl">"Calle Avenida Principal del Paraiso El Paraíso, Caracas en Distrito Federal."</p>
                </div>
                <div className="divider divider-vertical divider-warning divider-start"></div>
                <div className="relative sm:flex items-center justify-center bg-slate-300 text-center">
                    <Link to="/Ourservices" className="text-black px-3 py-2 hover:bg-blue-700 rounded font-bold text-sm sm:text-lg">
                        Nuestros Servicios
                    </Link>
                    <Link to="/AboutUs" className="text-black px-3 py-2 hover:bg-blue-700 rounded font-bold text-sm sm:text-lg">
                        Sobre Nosotros
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer