import Foto from '../../assets/Inicio-consulta.jpg';
import CardServices from './components/CardServices';
import MedicalAreas from "./components/MedicalAreas"
import CardTeam from './components/CardTeam';

function Home() {
  return (
    <main>
      <div className=" relative  flex flex-col items-center w-full top-0  "  >
        <div className="w-full ">
          <img src={Foto} alt="Imagen de fondo" className="relative h-[650px] w-full object-cover opacity-150" />
        </div>
        {/* Cuadrado con texto en la esquina superior izquierda */}
        <div className="absolute top-16 lg:top-52 mt-3 lg:mt-5 left-0 bg-accent bg-opacity-70 p-4 lg:p-16 shadow-lg  w-[225px] sm:w-[200px] md:w-[300px] lg:w-[600px]">
          <h2 className="text-sm text-center sm:text-base md:text-lg lg:text-xl font-bold">"Transformando vidas con atención médica dedicada y accesible."</h2>
        </div>
      </div>

      {/* Sección de servicios */}
      <CardServices />
      <MedicalAreas />
      <CardTeam />
    </main>
  );
}

export default Home;