import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTiktok, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContactInfo() {
    return (
        <section className="flex flex-wrap w-full">
            <div className="bg-accent mx-auto w-full px-10 py-8">
                <h2 className="text-2xl font-bold text-info">
                    No dudes en comunicarte con nosotros por nuestros canales principales de contacto:
                </h2>
                <div className="w-full p-5">
                    <h2 className="text-2xl font-bold text-info">
                        Canales Generales
                    </h2>
                    <div className="mt-5 mb-5 flex flex-col lg:flex-row lg:justify-between">
                        <div className="relative flex flex-col items-center justify-start mb-4 md:mb-0 md:w-1/3 lg:flex-row lg:items-center">
                            <FontAwesomeIcon icon={faPhone} className="h-10 w-10 lg:h-14 lg:w-14 object-cover" style={{ color: "#001b68" }} />
                            <p className="font-bold text-info px-5 text-center lg:text-left lg:text-2xl lg:ml-3">
                                0212-4818789
                            </p>
                        </div>
                        <div className="relative flex flex-col items-center justify-start mb-4 md:mb-0 md:w-1/3 lg:flex-row lg:items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="h-10 w-10 lg:h-14 lg:w-14 object-cover" style={{ color: "#001b68" }} />
                            <p className="font-bold text-info px-5 text-center lg:text-left lg:text-2xl lg:ml-3">
                                contacto@clinicaelparaiso.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-5">
                    <h2 className="text-2xl font-bold text-info">
                        Redes sociales
                    </h2>
                    <div className="mt-5 mb-5 flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
                        <div className="relative flex flex-col items-center justify-start mb-4 md:mb-0 md:w-1/3 lg:flex-row lg:items-center">
                            <FontAwesomeIcon icon={faTiktok} className="h-10 w-10 lg:h-14 lg:w-14 object-cover" style={{ color: "#001b68" }} />
                            <p className="font-bold text-info px-5 text-center lg:text-left lg:text-2xl lg:ml-3">
                                ClinicaPopularDelParaiso
                            </p>
                        </div>
                        <div className="relative flex flex-col items-center justify-start mb-4 md:mb-0 md:w-1/3 lg:flex-row lg:items-center">
                            <FontAwesomeIcon icon={faInstagram} className="h-10 w-10 lg:h-14 lg:w-14 object-cover" style={{ color: "#001b68" }} />
                            <a href="https://www.instagram.com/ambparaiso24?igsh=NmhnNDc0cHBxaXRh" target="_blank">
                                <p className="font-bold text-info px-5 text-center lg:text-left lg:text-2xl lg:ml-3">
                                    @ambparaiso24
                                </p>
                            </a>
                        </div>
                        <div className="relative flex flex-col items-center justify-start mb-4 md:mb-0 md:w-1/3 lg:flex-row lg:items-center">
                            <FontAwesomeIcon icon={faFacebook} className="h-10 w-10 lg:h-14 lg:w-14 object-cover" style={{ color: "#001b68" }} />
                            <p className="font-bold text-info px-5 text-center lg:text-left lg:text-2xl lg:ml-3">
                                ambparaiso
                            </p>
                        </div>
                        <div className="relative flex flex-col items-center justify-start mb-4 md:mb-0 md:w-1/3 lg:flex-row lg:items-center lg:mt-6">
                            <FontAwesomeIcon icon={faTwitter} className="h-10 w-10 lg:h-14 lg:w-14 object-cover" style={{ color: "#001b68" }} />
                            <p className="font-bold text-info px-5 text-center lg:text-left lg:text-2xl lg:ml-3">
                                ambparaiso2024
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo