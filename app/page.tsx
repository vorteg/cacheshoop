
import Hero from '@/components/Hero'
import BannerBanco from '@/components/Banner-banco'
import RecomendedProducts from '@/components/Recomended-Products'
import CardTemplate from '@/components/Card-template'
import BannerHowTo from '@/components/Banner-how-to'



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
