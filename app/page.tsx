'use client'

import Hero from '@/components/Hero'
import BannerBanco from '@/components/BannerBanco'
import RecomendedProducts from '@/components/RecomendedProducts'
import CardTemplate from '@/components/CardTemplate'
import BannerHowTo from '@/components/BannerHowTo'
import useCounterStore from './(store)/gameInfoStore'
import { Button } from '@/components/ui'



export default function IndexPage() {
  const { count, increment } = useCounterStore()
  console.log(count)
  return (

    <>
      <h1>{count}</h1>
      <Button onClick={increment}>inc</Button>
      <Hero />
      <BannerBanco />
      {/* <RecomendedProducts /> */}
      <CardTemplate />
      <CardTemplate />
      <BannerHowTo />


    </>
  )
}
