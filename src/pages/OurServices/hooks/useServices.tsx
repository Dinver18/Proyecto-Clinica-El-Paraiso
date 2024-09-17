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
                        content: ' Para retirar medicamentos para bebés, es necesario presentar un récipe emitido por nuestros médicos de la clínica.'
                    },
],         

        },

        {
            id: "laboratorios",
            title: 'Laboratorios',
            content: "En la farmacia de la Clínica Popular El Paraíso, nos comprometemos a brindarte el mejor servicio y una amplia variedad de medicamentos para satisfacer tus necesidades de salud. Nuestro equipo de farmacéuticos está listo para ayudarte a encontrar los productos adecuados y ofrecerte el asesoramiento que necesites.",
                subSections: [
                    
                    {
                    title: "Atenciones Disponibles",
                    content: 'NOOOOOOOOO para cubrir cualquier enfermedad. Además, brindamos un servicio especializado en el despacho rápido de productos.'
                    },

                    {
                        title: "Horario de Atención",
                        content: 'Nuestra farmacia está abierta las 24 horas del día, los 7 días de la semana, para asegurarnos de que siempre tengas acceso a los medicamentos y productos que necesitas, sin importar la hora.'
                    },

                    {
                        title: "Normas para el Retiro de Medicamentos",
                        content: ' Para retirar medicamentos para bebés, es necesario presentar un récipe emitido por nuestros médicos de la clínica.'
                    },
],         
        },

        {
            id: "medicina",
            title: 'Medicina Interna',
            content: "En la farmacia de la Clínica Popular El Paraíso, nos comprometemos a brindarte el mejor servicio y una amplia variedad de medicamentos para satisfacer tus necesidades de salud. Nuestro equipo de farmacéuticos está listo para ayudarte a encontrar los productos adecuados y ofrecerte el asesoramiento que necesites.",
                subSections: [
                    
                    {
                    title: "Atenciones Disponibles",
                    content: 'NOOOOOOOOO para cubrir cualquier enfermedad. Además, brindamos un servicio especializado en el despacho rápido de productos.'
                    },

                    {
                        title: "Horario de Atención",
                        content: 'Nuestra farmacia está abierta las 24 horas del día, los 7 días de la semana, para asegurarnos de que siempre tengas acceso a los medicamentos y productos que necesitas, sin importar la hora.'
                    },

                    {
                        title: "Normas para el Retiro de Medicamentos",
                        content: ' Para retirar medicamentos para bebés, es necesario presentar un récipe emitido por nuestros médicos de la clínica.'
                    },
],         
        },

        {
            id: "emergencia",
            title: 'Emergencia',
            content: "En la farmacia de la Clínica Popular El Paraíso, nos comprometemos a brindarte el mejor servicio y una amplia variedad de medicamentos para satisfacer tus necesidades de salud. Nuestro equipo de farmacéuticos está listo para ayudarte a encontrar los productos adecuados y ofrecerte el asesoramiento que necesites.",
                subSections: [
                    
                    {
                    title: "Atenciones Disponibles",
                    content: 'NOOOOOOOOO para cubrir cualquier enfermedad. Además, brindamos un servicio especializado en el despacho rápido de productos.'
                    },

                    {
                        title: "Horario de Atención",
                        content: 'Nuestra farmacia está abierta las 24 horas del día, los 7 días de la semana, para asegurarnos de que siempre tengas acceso a los medicamentos y productos que necesitas, sin importar la hora.'
                    },

                    {
                        title: "Normas para el Retiro de Medicamentos",
                        content: ' Para retirar medicamentos para bebés, es necesario presentar un récipe emitido por nuestros médicos de la clínica.'
                    },
],         
        },

        {
            id: "nefrologia",
            title: 'Unidad de Nefrología',
            content: "En la farmacia de la Clínica Popular El Paraíso, nos comprometemos a brindarte el mejor servicio y una amplia variedad de medicamentos para satisfacer tus necesidades de salud. Nuestro equipo de farmacéuticos está listo para ayudarte a encontrar los productos adecuados y ofrecerte el asesoramiento que necesites.",
                subSections: [
                    
                    {
                    title: "Atenciones Disponibles",
                    content: 'NOOOOOOOOO para cubrir cualquier enfermedad. Además, brindamos un servicio especializado en el despacho rápido de productos.'
                    },

                    {
                        title: "Horario de Atención",
                        content: 'Nuestra farmacia está abierta las 24 horas del día, los 7 días de la semana, para asegurarnos de que siempre tengas acceso a los medicamentos y productos que necesitas, sin importar la hora.'
                    },

                    {
                        title: "Normas para el Retiro de Medicamentos",
                        content: ' Para retirar medicamentos para bebés, es necesario presentar un récipe emitido por nuestros médicos de la clínica.'
                    },
],         
        },




        ]);
    }, []);

    return { servicios };
};