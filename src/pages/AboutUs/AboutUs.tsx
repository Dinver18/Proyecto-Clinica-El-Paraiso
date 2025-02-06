import CarouselValues from './components/CarouselValues';
import CardProfessional from './components/CardProfessional';
import Foto from './assets/FrenteClinica.jpg';
import FotoEquipoRRHH from './assets/Recursos-humanos.jpg'

function AboutUs() {
  return (
    <main>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-5xl px-5 py-5 md:px-10 md:py-16 lg:py-10">
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-24 p-2">
            {/* Imagen */}
            <img
              src={Foto}
              alt="Persona"
              className="h-96 lg:h-[32rem] lg:w-full w-full object-cover"
            />
            {/* Texto */}
            <div className="mt-0 lg:mt-12">
              <p className="text-xl lg:text-3xl text-info font-semibold text-center p-2">Quiénes somos</p>
              <p className="text-sm text-black sm:text-base">
                La Clínica Popular El Paraíso ha sido un pilar en la salud de nuestra comunidad desde su fundación. Nuestra misión es ofrecer atención médica de alta calidad, accesible y centrada en el paciente. Con una visión clara hacia el futuro, nos esforzamos por seguir siendo un referente en el cuidado de la salud en Caracas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex ">
        <h2 className=" text-2xl font-bold md:text-5xl text-black px-5 left-5 ">
          Nuestros Valores
        </h2>
      </div>

      <CarouselValues />
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-5xl px-5 py-5 md:px-10 md:py-16 lg:py-10">
          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-24 p-2">
            {/* Imagen */}
            <img
              src={FotoEquipoRRHH}
              alt="Persona"
              className="h-96 lg:h-[32rem] w-full lg:w-[1000px] max-w-[550px] object-cover"
            />
            {/* Texto */}
            <div className="mt-0 lg:mt-12 lg:px-12 lg:ml-12">
              <p className="text-xl lg:text-3xl text-info font-semibold text-center">"Trabajamos por tu salud y beneficio"</p>
              <p className="text-xl lg:text-3xl text-info font-semibold text-center p-2">Recursos Humano </p>
              <p className="text-sm text-black sm:text-base text-center">
              Todos nuestros trabajadores se comprometen a estar siempre a tu lado, brindando apoyo y dedicación para que recibas la atención que mereces.
              </p> 

              {/* Nombres y cargos */}
                <div className="mt-6 text-sm text-black text-center">
                  <p>Mayor Ramón Gutierrez - Coord.Recursos Humanos</p>
                  <p>Yasmin Serrano - Secretaria Ejecutiva II</p>
                  <p>Jarima Arvelo - Secretaria Ejecutiva II</p>
                  <p>Francis Medina - Asist. Administrativo V</p>
                  <p>Lusmai Quintana - Asist. Administrativo I</p>

                </div>
            </div>
          </div>
        </div>
      </section>
      <CardProfessional />

      <div className="flex justify-end py-5">
        <h2 className="text-2xl font-bold md:text-5xl text-black px-5">
          Y muchos más...
        </h2>
      </div>

    </main>
  );
}

export default AboutUs;
