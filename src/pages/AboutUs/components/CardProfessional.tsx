import FotoEquipoNefrologia from "../assets/Nefrologia.jpg"
import FotoEquipoEmergencia from "../assets/Emergencia.jpg"
import FotoEquipoEnfermeria from '../assets/Enfermeria.jpg'
import FotoConsulta from "../assets/Consulta.jpg"

function CardProfessional() {
  return (
    <section>
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-14 md:px-10 md:py-24 lg:py-10">
        {/* Title */}
        <h2 className="left-5 text-2xl font-bold md:text-5xl mb-8">
          Área de Profesionales
        </h2>

        {/* Content */}
        <div className="mx-auto grid justify-items-stretch gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:justify-items-stretch">
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
            <img
              src={FotoEquipoNefrologia}
              alt=""
              className="mb-4 inline-block h-70 lg:h-52 w-full object-cover"
            />
            <p className="font-bold item-center">Unidad de nefrologia</p>
            <p className="text-sm text-gray-700 font-bold">
              Dra.Candelaria Rodríguez <br /> Jefa de transplante renal <br />
            </p>
            <p className="text-sm text-gray-700 text-center font-bold">
              Dra.Dianellys Perez <br /> Fellowship de transplante renal <br />
            </p>
            <p className="text-sm text-gray-700 text-center font-bold">
              Dra.Vanessa Domínguez <br /> Fellowship de transplante renal <br />
            </p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
            <img
              src={FotoEquipoEmergencia}
              alt=""
              className="mb-4 inline-block h-52 w-full object-cover"
            />
            <p className="font-bold">Emergencia</p>
            <p className="text-sm text-gray-700 font-bold text-center">
              Heidi Prado <br /> Jefa de departamento de emergencia <br />
            </p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
            <img
              src={FotoEquipoEnfermeria}
              alt=""
              className="mb-4 inline-block h-52 w-full object-cover"
            />
            <p className="font-bold text-center">Departamento de enfermeria</p>
            <p className="text-sm text-gray-700 font-bold">
              Dra.Candelaria Rodríguez <br /> Jefa de transplante renal <br />
            </p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
            <img
              src={FotoConsulta}
              alt=""
              className="mb-4 inline-block h-52 w-full object-cover"
            />
            <p className="font-bold">Consulta general</p>
            <p className="text-sm text-gray-700 font-bold text-center">
              Dra.Maria Coroba <br /> Médico general
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CardProfessional;