import { useState } from "react";
import Foto from '../../../assets/Segunda-foto.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStethoscope, faPeopleGroup, faBaby, faPersonPregnant, faMinus, faVenus, faSyringe, faHospital,faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import MedicalItem from "../Model/Areas";

function MedicalAreas() {
    // State to manage the number of FAQs visible
    const [visibleCount, setVisibleCount] = useState(4);

    // Definición del estado con un tipo que puede ser número o null
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    // Función con tipo explícito para el parámetro
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };


    // Dummy data for FAQs
    const areas: MedicalItem[] = [
        {
            icon: faStethoscope,
            title: "Medicina interna",
            content:
                "Especialidad que se enfoca en el diagnóstico y tratamiento de enfermedades en adultos, abordando condiciones complejas de salud.",
        },
        {
            icon: faPeopleGroup,
            title: "Medicina familiar",
            content:
                "Brinda atención integral a pacientes de todas las edades, enfocándose en la prevención y el bienestar familiar.",
        },
        {
            icon: faBaby,
            title: "Pediatria",
            content:
                "Cuidado de la salud infantil, desde el nacimiento hasta la adolescencia, incluyendo desarrollo y enfermedades específicas de niños.",
        },
        {
            icon: faPersonPregnant,
            title: "Obstetricia",
            content:
                "Atención durante el embarazo y el parto, asegurando la salud de la madre y el bebé en el proceso.",
        },
        {
            icon: faVenus,
            title: "Ginecologia",
            content:
                "Salud del sistema reproductivo femenino, que incluye exámenes, diagnóstico y tratamiento de trastornos ginecológicos.",
        },
        {
            icon: faHeartPulse,
            title: "Transplante",
            content:
                "Especialidad médica dedicada a reemplazar órganos o tejidos enfermos por otros sanos, provenientes de donantes.",
        },
        {
            icon: faSyringe,
            title: "Anestesiologia",
            content:
                "Administración de anestesia y manejo del dolor durante cirugías, garantizando la seguridad del paciente.",
        },
        {
            icon: faHospital,
            title: "Cirugia",
            content:
                "Intervenciones manuales para tratar enfermedades o lesiones, mejorando la salud del paciente a través de procedimientos quirúrgicos.",
        },
    ];

    const toggleShowMore = () => {
        if (visibleCount < areas.length) {
            setVisibleCount(areas.length); // Show all FAQs
        } else {
            setVisibleCount(4); // Show only the first 3 FAQs
        }
    };

    // Determine the button text based on the current visibility
    const buttonText = visibleCount < areas.length ? "Ver más" : "Ver menos";

    return (
        <section>
            <div className="py-5 md:py-4 mx-auto w-full px-5 md:px-10 bg-accent">
                <div className="relative flex flex-col items-start lg:flex-row lg:space-x-20">
                    <div className="mb-5 md:mb-12 lg:mb-14 lg:mt-6">
                        <h2 className="text-3xl font-bold md:text-5xl text-primary mb-10">
                            Cubrimos cada aspecto de tu salud
                        </h2>
                        <img
                            src={Foto}
                            alt="Imagen"
                            className="object-cover md:ml-10 lg:ml-10"
                        />
                    </div>
                    <div className="py-10 px-10 sm:flex-[1_1_225px] lg:flex-[1_1_250px] w-full flex-none lg:mt-10">
                        {areas.slice(0, visibleCount).map((areas, index) => (
                            <div
                                key={index}
                                className="w-full overflow-hidden bg-accent border-b border-black"
                            >
                                <div
                                    className="flex cursor-pointer items-start justify-between"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="relative mt-5 mb-5 ml-5 flex h-10 w-10 lg:h-14 lg:w-14 items-center justify-center">
                                        <FontAwesomeIcon icon={areas.icon} className="h-10 w-10 lg:h-14 lg:w-14 object-cover" style={{ color: "#001b68", }} />
                                    </div>
                                    <div className="flex ml-5 sm:mt-5 text-center items-center py-6">
                                        <p className="text-info font-bold md:text-2xl">{areas.title}</p>
                                    </div>
                                    <div className="relative mt-5 mb-5 ml-5 flex h-10 w-10 lg:h-14 lg:w-14 items-center justify-center">
                                        <FontAwesomeIcon icon={openFAQ === index ? faMinus : faPlus} className="h-10 w-10 lg:h-14 lg:w-14 object-cover" style={{ color: "#001b68" }} />
                                    </div>
                                </div>
                                {openFAQ === index && (
                                    <div className="w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl">
                                        <p className="text-sm text-center font-bold sm:text-base">{areas.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="flex justify-center mt-8">
                            <button onClick={toggleShowMore} className="inline-block items-center rounded-md bg-secondary px-6 py-3 text-center font-semibold text-info">
                                {buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MedicalAreas