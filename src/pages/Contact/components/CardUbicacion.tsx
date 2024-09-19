import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Foto from "../assets/MapImagen.jpg"

function CardUbicacion() {
    return (
        <section className="w-full overflow-x-hidden"> {/* Asegura que el section ocupe el ancho de la pantalla */}
            <div className="bg-white px-4 md:px-10 py-8 max-w-full"> {/* Usa max-w-full para asegurar el ajuste al contenedor */}
                <div className="flex items-center">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        className="h-12 w-12 lg:h-15 lg:w-15 object-cover"
                        style={{ color: "#FFD700" }}
                    />
                    <h2 className="text-2xl font-bold text-info ml-4">
                        Estamos ubicados Calle Avenida Principal del Paraiso El Paraíso, Caracas en Distrito Federal.
                    </h2>
                </div>
                <div className="w-full mt-10">
                    <a href="https://maps.app.goo.gl/CNujrKB2ju66rKAa8" target="_blank">
                        <img
                            src={Foto}
                            alt="Imagen"
                            className="w-full h-auto object-cover"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CardUbicacion