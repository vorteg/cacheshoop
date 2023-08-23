import Hero from '@/components/Hero'
import BannerBanco from '@/components/BannerBanco'
import RecomendedProducts from '@/components/RecomendedProducts'
import CardTemplate from '@/components/CardTemplate'
import BannerHowTo from '@/components/BannerHowTo'
import FetchData from '@/components/FetchData'




export default function IndexPage() {

  return (

    <>
      <FetchData />
      <Hero />
      <BannerBanco />
      <RecomendedProducts />
      <CardTemplate header="Consigue los mejores precios" num={0} />
      <CardTemplate header="Busca por Categorias" num={1} />
      <BannerHowTo />


    </>
  )
}
