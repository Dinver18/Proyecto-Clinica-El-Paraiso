function Header() {
  return (
    <header className="w-full bg-gray-100 p-2 sm:p-4 flex justify-between items-center fixed top-0 left-0 z-50">
      <div className="flex items-center">
        <img src="/vite.svg" alt="Logo" className="h-12 sm:h-20 mr-2 sm:mr-4" />
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Clínica Popular El Paraíso</h1>
          <p className="text-sm sm:text-lg text-gray-600">Tu salud es nuestra prioridad</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
