import Logo from "../../assets/Logo.jpg"

function Header() {
  return (
    <section className="justify-start bg-gray-100 p-2 ">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-12 sm:h-20 mr-2 sm:mr-4" />
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Clínica Popular El Paraíso</h1>
          <p className="text-sm sm:text-lg text-gray-600">Tu salud es nuestra prioridad</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
