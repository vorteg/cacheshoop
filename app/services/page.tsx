import { siteConfig } from '@/config/site'


function page() {

  return (
    <>
      <section className=" pt-5 pb-32 md:py-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-800 p-6 rounded-lg shadow-lg">
              <img src={siteConfig.images.services.corte} alt="Service1" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Corte Laser</h3>
              <p className="mt-4">Ofrecemos servicios de corte láser de alta precisión para una variedad de materiales.</p>
              <a href="#" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">Solicitar</a>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-gray-300 dark:text-black p-6 rounded-lg shadow-lg">
              <img src={siteConfig.images.services.program} alt="Service 2" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Clases de Programación</h3>
              <p className="mt-4">Impartimos clases de programación en línea y presenciales. Aprende a programar con nosotros.</p>
              <a href="#" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">Solicitar</a>
            </div>

            <div className=" p-6 rounded-lg shadow-lg bg-gradient-to-r from-indigo-500 to-indigo-800">
              <img src={siteConfig.images.services.web} alt="Service 3" className="w-full rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Diseño Web</h3>
              <p className="mt-4">Creamos sitios web modernos y atractivos que se ajustan a tus necesidades y objetivos.</p>
              <a href="#" className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-full">Solicitar</a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default page