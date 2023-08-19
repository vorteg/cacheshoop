'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui"
import { Game } from '@/utils/games-api'
interface Props {
  header: string,
  num: number
}
import Image from 'next/image'
import useModeStore from '@/app/(store)/gameInfoStore'

const CardTemplate = ({header, num}:Props) => {
  const { games } = useModeStore()

  
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[2rem] font-semibold">{header}</h1>
        </div>
        <Card className="w-[35rem]">
          <CardHeader>
            <CardTitle>Videojuegos</CardTitle>
            <CardDescription>desde $35</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video">
              {/* <p>{props.imageNum}</p> */}
              <Image src={games[num].background_image} fill alt="Mejores precios" className="rounded-md object-cover" />
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

export default CardTemplate