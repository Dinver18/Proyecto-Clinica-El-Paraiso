import { useState, useEffect } from "react";
import { Servicios } from "../Model/Servicios";


export const useServices = () => {

    const [servicios, setservicios] = useState<Servicios[]>([]);

    useEffect(() => {
        setservicios([
            {
                id: "farmacia",
                title: 'Farmacia',
                content: "En la farmacia de la Clínica Popular El Paraíso, nos comprometemos a brindarte el mejor servicio y una amplia variedad de medicamentos para satisfacer tus necesidades de salud. Nuestro equipo de farmacéuticos está listo para ayudarte a encontrar los productos adecuados y ofrecerte el asesoramiento que necesites.",
                subSections: [

                    {
                        title: "Atenciones Disponibles",
                        content: 'Ofrecemos los medicamentos que necesites de manera gratuita para cubrir cualquier enfermedad. Además, brindamos un servicio especializado en el despacho rápido de productos.'
                    },

                    {
                        title: "Horario de Atención",
                        content: 'Nuestra farmacia está abierta las 24 horas del día, los 7 días de la semana, para asegurarnos de que siempre tengas acceso a los medicamentos y productos que necesitas, sin importar la hora.'
                    },

                    {
                        title: "Normas para el Retiro de Medicamentos",
                        content: ' Para retirar medicamentos, es necesario presentar un récipe emitido por nuestros médicos de la clínica.'
                    },
                ],

            },

            {
                id: "laboratorios",
                title: 'Laboratorios',
                content: "En la Clínica Popular El Paraíso, contamos con un laboratorio de análisis clínicos para brindarte resultados precisos y rápidos. Nuestro equipo de profesionales está comprometido en ofrecerte un servicio de calidad, con un enfoque en tu bienestar. Si necesitas realizarte análisis de rutina o específicos, estamos aquí para orientarte y ayudarte en todo el proceso.",
                subSections: [

                    {
                        title: "Atenciones Disponibles",
                        content: 'Realizamos análisis de laboratorio para diversas condiciones de salud, aunque algunos servicios podrían no estar disponibles temporalmente debido a la falta de reactivos. Estamos trabajando para brindarte el mejor servicio posible en cuanto los insumos estén disponibles.'
                    },

                    {
                        title: "Horario de Atención",
                        content: 'Nuestra farmacia está abierta las 24 horas del día, los 7 días de la semana, para asegurarnos de que siempre tengas acceso a los medicamentos y productos que necesitas, sin importar la hora.'
                    },

                ],
            },

            {
                id: "medicina",
                title: 'Medicina Interna',
                content: "En la Clínica Popular El Paraíso, nos comprometemos a ofrecerte atención médica especializada en medicina interna. Nuestro equipo de médicos está disponible para diagnosticar y tratar una amplia variedad de enfermedades y condiciones, brindando atención integral para tu salud.",
                subSections: [

                    {
                        title: "Atenciones Disponibles",
                        content: 'Ofrecemos atención para diversas afecciones médicas en el ámbito de la medicina interna. Nuestro objetivo es proporcionarte un diagnóstico preciso y un plan de tratamiento adecuado para tu bienestar.'
                    },

                    {
                        title: "Horario de Atención",
                        content: 'Nuestra consulta de medicina interna está disponible de lunes a viernes, en horarios flexibles, para asegurarnos de que recibas la atención que necesitas en el momento adecuado.'
                    },
                ],
            },

            {
                id: "emergencia",
                title: 'Emergencia',
                content: "En la Clínica Popular El Paraíso, nos comprometemos a brindarte atención en situaciones de emergencia médica. Nuestro equipo está capacitado para atender diversas urgencias y condiciones críticas, ofreciendo un servicio rápido y adecuado a cada situación.",
                subSections: [

                    {
                        title: "Atenciones Disponibles",
                        content: 'Ofrecemos atención para diversas emergencias médicas, desde accidentes hasta condiciones graves que requieren intervención urgente.'
                    },

                    {
                        title: "Horario de Atención",
                        content: 'Nuestra sala de emergencia está disponible las 24 horas del día, los 7 días de la semana, para garantizar que recibas atención médica en cualquier momento que lo necesites.'
                    },
                ],
            },

            {
                id: "nefrologia",
                title: 'Unidad de Nefrología',
                content: "En la Clínica Popular El Paraíso, nos comprometemos a brindarte atención especializada en nefrología, para el diagnóstico y tratamiento de enfermedades renales. Nuestro equipo médico está disponible para ofrecerte el seguimiento necesario y asesoramiento en el manejo de afecciones relacionadas con los riñones.",
                subSections: [

                    {
                        title: "Atenciones Disponibles",
                        content: 'Ofrecemos atención especializada para diversas afecciones renales, como insuficiencia renal, hipertensión, cálculos renales y otros trastornos relacionados con los riñones. Nuestro objetivo es proporcionarte un plan de tratamiento adecuado y un seguimiento cercano para tu salud renal.'
                    },

                    {
                        title: "Horario de Atención",
                        content: 'Nuestra unidad de nefrología está disponible de lunes a viernes, de 7:00 am a 1:00 pm, para ofrecerte la atención que necesitas en el horario que más te convenga.'
                    },

                ],
            },




        ]);
    }, []);

    return { servicios };
};