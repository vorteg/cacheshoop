
import Hero from '@/components/Hero'
import BannerBanco from '@/components/BannerBanco'
import RecomendedProducts from '@/components/RecomendedProducts'
import CardTemplate from '@/components/CardTemplate'
import BannerHowTo from '@/components/BannerHowTo'



export default async function IndexPage() {

  return (
    <>
      <Hero />
      <BannerBanco />
      <RecomendedProducts />
      <CardTemplate />
      <CardTemplate />
      <BannerHowTo />


    </>
  )
}
