import { Link } from "react-router-dom"
import Foto from "../../../assets/FotoE.jpg"

function CardTeam() {
    return (
        <section>
            <div className="py-4 md:py-16 mx-auto w-full px-5 md:px-10 bg-white">
                <div className="mb-8 md:mb-12 lg:mb-5">
                    <h2 className="text-3xl font-bold md:text-5xl text-primary">
                        En la Clínica Popular El Paraíso, tu bienestar es nuestro compromiso
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Imagen */}
                    <div className="flex-shrink-0">
                        <img
                            src={Foto}
                            alt="Imagen"
                            className="object-cover w-full max-w-xs md:max-w-sm lg:max-w-md"
                        />
                    </div>
                    {/* Contenedor del contenido y el enlace */}
                    <div className="flex flex-col md:ml-auto">
                        <div className="bg-accent p-4 lg:p-16 w-[225px] sm:w-[200px] md:w-[300px] lg:w-[600px]">
                            <h2 className="text-sm text-center sm:text-base md:text-lg lg:text-xl font-bold">
                                "Contamos con un equipo de profesionales dedicados a brindarte la mejor atención médica. Tu salud es nuestra prioridad."
                            </h2>
                        </div>
                        <div className="flex justify-center mt-10">
                            <Link to="/AboutUs" className="inline-block items-center rounded-md bg-secondary px-6 py-3 text-center font-semibold text-info">
                                Nuestro equipo
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardTeam