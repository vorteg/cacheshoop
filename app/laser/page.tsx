
function page() {
  return (
    <section className='container my-16'>
      <div className=" min-h-screen flex items-center justify-center">
        <div className="max-w-lg p-6  shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Corte y Grabado Láser </h1>
          <p className="mb-4">
            Nuestro servicio puede ser utilizada para una variedad de proyectos de corte y grabado en diferentes materiales.
          </p>
          <a href='https://api.whatsapp.com/send?phone=+523318444445&text=Hola, Cotizar Corte/Grabado Laser' className="mb-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">Solicitar</a>
          <h2 className='text-center text-3xl font-bold'>Materiales</h2>
          <div className='flex  justify-between flex-wrap gap-1'>
            <div>
              <p className="text-xl font-semibold mb-2">Para cortar</p>
              <ul className="list-disc ml-6 mb-4">
                <li>Madera</li>
                <li>Acrílico de colores</li>
                <li>Cartón</li>
                <li>Papel</li>
                {/* Agrega más materiales según sea necesario */}
              </ul>
            </div>
            <div>
              <p className="text-xl font-semibold mb-2">Para grabar</p>
              <ul className="list-disc ml-6  mb-4">
                <li>Madera</li>
                <li>Acrílico</li>
                <li>Cartón</li>
                <li>Papel</li>
                <li>Ceramica</li>
                <li>Metal</li>
                <li>Vidrio</li>
                {/* Agrega más materiales según sea necesario */}
              </ul>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-2">Ejemplos de proyectos:</h2>
          <ul className="list-disc ml-6 mb-4">
            <li>Creación de diseños artísticos en madera</li>
            <li>Fabricación de piezas de acrílico personalizadas</li>
            <li>Llaveros, Fabricacion de letreros, figuras 3d, etc...</li>
            {/* Agrega más ejemplos de proyectos según sea necesario */}
          </ul>
        </div>
      </div>

    </section>
  )
}

export default page