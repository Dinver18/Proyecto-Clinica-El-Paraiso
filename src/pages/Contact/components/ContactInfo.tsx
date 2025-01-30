import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faTiktok, faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContactInfo() {
    return (
        <section>
            <div className="bg-accent mx-auto w-full px-10 py-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-info mb-4">
                    No dudes en comunicarte con nosotros por nuestros canales principales de contacto:
                </h2>

                {/* Canales Generales */}
                <div className="w-full p-5">
                    <h2 className="text-xl font-bold text-info mb-4">Canales Generales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faPhone} className="text-primary h-10 w-10" />
                            <a href="tel:02124818789" className="font-bold text-info text-lg ml-4 hover:underline">
                                0212-4818789
                            </a>
                        </div>
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="text-primary h-10 w-10" />
                            <a href="mailto:contacto@clinicaelparaiso.com" className="font-bold text-info text-lg ml-4 hover:underline">
                                contacto@clinicaelparaiso.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Redes Sociales */}
                <div className="w-full p-5">
                    <h2 className="text-xl font-bold text-info mb-4">Redes sociales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="flex items-center p-2">
                            <FontAwesomeIcon icon={faTiktok} className="text-primary h-10 w-10 p-2" />
                            <a href="https://www.tiktok.com/@ivss_oficial" target="_blank" rel="noopener noreferrer" className="font-bold text-info text-lg ml-4 hover:underline">
                                ClinicaPopularDel
                                Paraiso
                            </a>
                        </div>
                        <div className="flex items-center p-2">
                            <FontAwesomeIcon icon={faInstagram} className="text-primary h-10 w-10" />
                            <a href="https://www.instagram.com/ambparaiso24" target="_blank" rel="noopener noreferrer" className="font-bold text-info text-lg ml-4 hover:underline">
                                @ambparaiso24
                            </a>
                        </div>
                        <div className="flex items-center p-2">
                            <FontAwesomeIcon icon={faFacebook} className="text-primary h-10 w-10" />
                            <a href="https://www.instagram.com/ambparaiso24" target="_blank" rel="noopener noreferrer" className="font-bold text-info text-lg ml-4 hover:underline">
                                ambparaiso
                            </a>
                        </div>
                        <div className="flex items-center p-2">
                            <FontAwesomeIcon icon={faTwitter} className="text-primary h-10 w-10" />
                            <a href="https://www.instagram.com/ambparaiso24" target="_blank" rel="noopener noreferrer" className="font-bold text-info text-lg ml-4 hover:underline">
                                ambparaiso2024
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactInfo;