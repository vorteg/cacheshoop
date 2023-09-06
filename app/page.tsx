import Hero from '@/components/Hero'
import BannerBanco from '@/components/BannerBanco'
import RecomendedProducts from '@/components/recommendedproducts/RecomendedProducts'
import CardTemplate from '@/components/cardtemplate/CardTemplate'
import BannerHowTo from '@/components/BannerHowTo'
import { fetchGamesAction } from '@/app/(store)/storeGames/actions/gameActions'
import FloatingButton from '@/components/FloatingButton'
export default async function IndexPage() {

  await fetchGamesAction()

  return (
    <>
      <Hero />
      <BannerBanco />
      {/* @ts-expect-error Async Server Component */}
      <RecomendedProducts />
      {/* @ts-expect-error Async Server Component */}
      <CardTemplate header="Consigue los mejores precios" num={8} />
      {/* @ts-expect-error Async Server Component */}
      <CardTemplate header="Busca por Categorias" num={7} />
      <BannerHowTo />
      <FloatingButton />
    </>
  )
}
