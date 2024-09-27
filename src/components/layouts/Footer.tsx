import telefono from "../../assets/telefono.svg"
import ubicacion from "../../assets/ubicacion.svg"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="w-full bg-neutral p-4 text-white bottom-0 left-0 z-40 ">
            {/* Primer div: Ocupa el ancho completo del footer */}
            <div className="relative -mx-4 -mr-4 -mt-4 bg-secondary p-4 text-center">
                <h6 className="md:text-2xl text-black font-bold">Clinica popular El Paraiso</h6>
            </div>
            <div className="relative w-full bg-neutral p-4 text-center">
                <div className="flex bg-neutral text-center justify-center items-center">
                    <img src={telefono} alt="logo telefono" className="mr-4 w-16 h-16" />
                    <p className="text-black  md:text-2xl">"¿Tienes alguna consulta? ¡Llámanos, estamos a tu servicio!"<br />0212-8706898</p>
                </div>
                <div className="divider divider-vertical divider-primary divider-start"></div>
                <div className="flex bg-neutral text-center justify-center items-center">
                    <img src={ubicacion} alt="logo ubicacion" className="mr-4"></img>
                    <p className="text-black md:text-2xl">"Calle Avenida Principal del Paraiso El Paraíso, Caracas en Distrito Federal."</p>
                </div>
                <div className="divider divider-vertical divider-warning divider-start"></div>
                <div className="relative sm:flex items-center justify-center bg-neutral text-center">
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