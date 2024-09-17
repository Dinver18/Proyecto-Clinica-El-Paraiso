import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function ContactInfo() {
    return (
        <section className="flex flex-wrap">
            <div className="bg-accent mx-auto mx-auto w-full md:px-10 md:py-8 w-screen">
                <h2 className="text-2xl font-bold text-info">
                    No dudes en comunicarte con nosotros por nuestros canales principales de contacto:
                </h2>
                <div className="w-full p-5 -ml-5">
                    <h2 className="text-2xl font-bold text-info">
                        Canal General
                    </h2>
                    <div className="relative mt-5 mb-5 ml-5 flex h-50 w-12 items-center justify-center">
                        <FontAwesomeIcon icon={faPhone} className="h-12 w-12 lg:h-15 lg:w-15 object-cover" style={{ color: "#005B96" }} />
                        <p className="absolute font-bold text-info left-14 md:text-2xl">
                            0212-8706898
                        </p>
                    </div>
                    <div className="relative mt-5 mb-5 ml-5 flex h-12 w-12 items-center justify-center">
                        <FontAwesomeIcon icon={faEnvelope} className="h-12 w-12 lg:h-15 lg:w-15 object-cover" style={{ color: "#005B96" }} />
                        <p className="absolute font-bold text-info left-14 md:text-2xl">
                            contacto@clinicaelparaiso.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo