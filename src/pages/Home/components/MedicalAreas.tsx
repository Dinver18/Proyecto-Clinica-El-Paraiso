import { useState } from "react";
import Foto from '../../../assets/FotoB.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStethoscope, faPeopleGroup, faBaby, faPersonPregnant, faMinus, IconDefinition, faVenus, faSyringe, faHospital } from "@fortawesome/free-solid-svg-icons";

function MedicalAreas() {
    // State to manage the number of FAQs visible
    const [visibleCount, setVisibleCount] = useState(4);

    // Definición del estado con un tipo que puede ser número o null
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    // Función con tipo explícito para el parámetro
    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };



    // Define the type for FAQ items
    interface FAQItem {
        icon: IconDefinition; // Use FontAwesome icon definitions here
        title: string;
        content: string;
    }

    // Dummy data for FAQs
    const faqs: FAQItem[] = [
        {
            icon: faStethoscope,
            title: "Medicina interna",
            content:
                "Pellentesque in nisi aliquet, pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl.",
        },
        {
            icon: faPeopleGroup,
            title: "Medicina familiar",
            content:
                "Sed viverra enim ac turpis posuere consectetur. Sed enim nibh, consequat vitae lacus eu, ullamcorper ullamcorper massa.",
        },
        {
            icon: faBaby,
            title: "Pediatria",
            content:
                "Pellentesque purus eget, imperdiet turpis. Fusce at enim quis neque viverra convallis. Vivamus ut elementum leo, eget tempus nisl.",
        },
        {
            icon: faPersonPregnant,
            title: "Obstetricia",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
        {
            icon: faVenus,
            title: "Ginecologia",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
        {
            icon: faSyringe,
            title: "Anestesiologia",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
        {
            icon: faHospital,
            title: "Cirugia",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac venenatis est, at convallis magna.",
        },
    ];

    const toggleShowMore = () => {
        if (visibleCount < faqs.length) {
            setVisibleCount(faqs.length); // Show all FAQs
        } else {
            setVisibleCount(4); // Show only the first 3 FAQs
        }
    };

    // Determine the button text based on the current visibility
    const buttonText = visibleCount < faqs.length ? "Ver más" : "Ver menos";

    return (
        <section>
            <div className="py-5 md:py-4 mx-auto w-full px-5 md:px-10 bg-accent">
                <div className="relative flex flex-col items-start lg:flex-row lg:space-x-20">
                    <div className="mb-5 md:mb-12 lg:mb-14">
                        <h2 className="text-3xl font-bold md:text-5xl text-primary mb-10">
                            Cubrimos cada aspecto de tu salud
                        </h2>
                        <img
                            src={Foto}
                            alt="Imagen"
                            className="object-cover md:ml-10 lg:ml-10"
                        />
                    </div>
                    <div className="py-10 px-10 sm:flex-[1_1_225px] lg:flex-[1_1_250px] w-full flex-none">
                        {faqs.slice(0, visibleCount).map((faq, index) => (
                            <div
                                key={index}
                                className="w-full overflow-hidden bg-accent border-b border-black"
                            >
                                <div
                                    className="flex cursor-pointer items-start justify-between"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <div className="relative mt-5 mb-5 ml-5 flex h-12 w-12 items-center justify-center">
                                        <FontAwesomeIcon icon={faq.icon} className="h-12 w-12 lg:h-15 lg:w-15 object-cover" style={{ color: "#005B96", }} />
                                    </div>
                                    <div className="flex ml-5 sm:mt-5 text-center items-center py-4">
                                        <p className="text-info font-bold md:text-2xl">{faq.title}</p>
                                    </div>
                                    <div className="relative mt-5 mb-5 ml-5 flex h-12 w-12 items-center justify-center">
                                        <FontAwesomeIcon icon={openFAQ === index ? faMinus : faPlus} className="h-12 w-12 lg:h-15 lg:w-15 object-cover" style={{ color: "#005B96" }} />
                                    </div>
                                </div>
                                {openFAQ === index && (
                                    <div className="w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl pt-6">
                                        <p className="text-sm text-center font-bold sm:text-base">{faq.content}</p>
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