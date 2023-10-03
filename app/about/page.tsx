import KittenCard from '@/components/KittenCard'
import { siteConfig } from '@/config/site'



function page() {
  const kittens = siteConfig.kittens
  return (
    <section className='container mx-auto p-4 my-16'>
      <div className="p-4">
        <h1 className="text-4xl font-bold mb-4">Acerca de Cacheshoop</h1>
        <p className="text-lg mb-4">
          Agradecemos tu curiosidad e interés en conocernos mejor. Somos un pequeño equipo apasionado que se dedica a la creación de proyectos que no solo nos apasionan, sino que también tienen un impacto positivo en la comunidad y en el mundo que nos rodea. Nuestra tienda en línea, Cacheshoop, es un reflejo de nuestra pasión por los gatos, la cultura geek, los objetos personalizados y todo lo adorable.
        </p>
        <p>
          En Cacheshoop, no solo somos amantes de los gatos, sino que también somos pet-friendly y comprometidos con la causa de ayudar a los animalitos desamparados. Colaboramos con organizaciones locales que comparten nuestra misma pasión y aportamos nuestro granito de arena para hacer del mundo un lugar mejor para nuestras adorables mascotas.
        </p>
        <p>
          Estamos siempre abiertos a nuevas oportunidades y colaboraciones que nos ayuden a crecer y a seguir haciendo lo que amamos. Si ves una oportunidad en la cual tu apoyo o colaboración podría contribuir a nuestro crecimiento y a nuestra misión, no dudes en ponerte en contacto con nosotros. Valoramos cada idea y sugerencia que nos llega.
        </p>
        <p>
          En nuestro viaje, hemos tenido el placer de colaborar con increíbles personas y empresas que nos han dejado un valioso aprendizaje y nos han ayudado a crecer. Queremos agradecer a nuestros colaboradores cercanos que han sido parte fundamental de nuestro camino.


        </p>
        <p className="text-lg">
          Gracias por ser parte de nuestra comunidad y por apoyarnos en esta emocionante aventura. ¡Saludos!
        </p>
        <div className="container mx-auto p-4">
          <p className='font-bold text-3xl'>La family</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {kittens.map( ( kitten, index ) => (
              <KittenCard key={index} {...kitten} />
            ) )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default page