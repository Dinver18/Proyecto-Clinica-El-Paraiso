import FotoEquipo from "../../../assets/Equipo.jpg" 


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
        <div className="mx-auto grid justify-items-center gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:justify-items-stretch">
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
            <img
              src={FotoEquipo}
              alt=""
              className="mb-4 inline-block h-52 w-full object-cover"
            />
            <p className="font-bold">John</p>
            <p className="text-sm text-gray-500">Webflow Developer</p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mb-4 inline-block h-52 w-full object-cover"
            />
            <p className="font-bold">Annisyah</p>
            <p className="text-sm text-gray-500">Webflow Developer</p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mb-4 inline-block h-52 w-full object-cover"
            />
            <p className="font-bold">Tamara</p>
            <p className="text-sm text-gray-500">UI/UX Designer</p>
          </div>
          {/* Item */}
          <div className="flex max-w-sm flex-col items-center gap-4 rounded-md border border-solid border-gray-300 px-8 py-6 md:max-w-full">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
              alt=""
              className="mb-4 inline-block h-52 w-full object-cover"
            />
            <p className="font-bold">Kevin</p>
            <p className="text-sm text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </section>
    );
  }
  export default CardProfessional;