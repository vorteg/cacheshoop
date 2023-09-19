import Hero from '@/components/hero/Hero'
import BannerBanco from '@/components/BannerBanco'
import RecomendedProducts from '@/components/recommendedproducts/RecomendedProducts'
import CardTemplate from '@/components/cardtemplate/CardTemplate'
import BannerHowTo from '@/components/BannerHowTo'
import { fetchGamesAction } from '@/app/(store)/storeGames/actions/gameActions'
import FloatingButton from '@/components/FloatingButton'
import RecomendedVideogames from '@/components/recommendedvideogames/RecommendedVideoGames'
import { fetchfproductsAction } from './(store)/storeFProducts/actions/fproductAction';
import Hero2 from '@/components/Hero2'
import { siteConfig } from '@/config/site'



export default async function IndexPage() {
  await fetchfproductsAction()
  await fetchGamesAction()

  return (
    <>
      <Hero2 />
      <BannerBanco />
      {/* @ts-expect-error Async Server Component */}
      <RecomendedVideogames />
      {/* @ts-expect-error Async Server Component */}
      <RecomendedProducts />
      <CardTemplate header="Consigue los mejores precios" cardtitle='Video Juegos' description='desde $35 MXN' bgImage={siteConfig.images.product} url={"/videogames"} />

      <CardTemplate header="Servicios Online" cardtitle='Conoce nuestros servicios' description='Corte y grabado Laser, Programacion, Diseño Web' bgImage={siteConfig.images.service} url={"/services"} />
      <BannerHowTo />
      <FloatingButton />
    </>
  )
}
