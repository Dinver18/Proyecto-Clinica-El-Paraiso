import CarouselValues from './components/CarouselValues';
import CardProfessional from './components/CardProfessional';
import Foto from './assets/FotoClinica.jpg';

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
            className="h-60 lg:h-80 lg:w-full w-96 object-cover"
          />
          {/* Texto */}
          <div className="mt-0 lg:mt-12">
            <p className="text-xl lg:text-3xl text-info font-semibold text-center p-2">Quiénes somos</p>
            <p className="text-sm text-black sm:text-base">
            La Clínica Popular El Paraíso ha sido un pilar en la salud de nuestra comunidad desde su fundación en [año de fundación]. Nuestra misión es ofrecer atención médica de alta calidad, accesible y centrada en el paciente. Con una visión clara hacia el futuro, nos esforzamos por seguir siendo un referente en el cuidado de la salud en Caracas.
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

    <CarouselValues/>
    <CardProfessional/>

    <div className="flex justify-end py-5">
  <h2 className="text-2xl font-bold md:text-5xl text-black px-5">
    Y muchos más...
  </h2>
</div>

    </main>
  );
}

export default AboutUs;
