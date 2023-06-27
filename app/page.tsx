import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Image from 'next/image'
import Input from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type Game = {
  id: number
  background_image: string
  rating: number
  name: string
}

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(`https://api.rawg.io/api/games?key=53f520bf819d4fb3b09fd3943522fe25`)
  if(!res.ok){
    throw new Error("failed to fetch games")
  }
  const data = await res.json()
  return data.results
}

export default async function IndexPage() {
  const games = await getGames()
  return (
    <>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1 className="text-[2rem] font-semibold">{siteConfig.description}</h1>
        <div className="flex flex-col items-center gap-2">
          <Image src="https://res.cloudinary.com/dehsikb6h/image/upload/v1680214325/cachshoop/heros/store_gw3aew.png" width={1100} height={900}  alt="cover" />
        </div>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex">
        <div className="contents">
          <div className="flex-1  border-2 bg-white p-8"><p className="text-black">Pague comodo y seguro</p></div>
          <div className="flex-1  border-y-2 bg-white p-8"><p className="text-black">Hasta 3 meses sin intereses con:</p></div>
          <div className="flex-1  border-y-2 bg-white p-8"><p className="text-black">Citibanamex</p></div>
          <div className="flex-1  border-2 bg-white p-8"><p className="text-black">Mas medios de pago</p></div>
        </div>
      </div>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-[2rem] font-semibold">Productos recomendados</h1>
      <div className="m-18 grid grid-cols-4 gap-12 rounded-md">
        {games.map((game) => (
          <div className="col-span-4 md:col-span-2 lg:col-span-1" key={game.id}>
            <h1>{game.name}</h1>
            <p>{game.rating}</p>
            <div className="relative aspect-video">
              <Image 
                src={game.background_image}
                fill
                className="rounded-md object-cover" 
                alt={game.name}/>
              </div>
              {/* <img src={game.background_image} className="aspect-video w-full"></img> */}
            
          </div>
        ))}
        </div>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[2rem] font-semibold">Consigue los mejores precios</h1>
        </div>
        <Card className="w-[35rem]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video">
              <Image src={games[0].background_image} fill alt="Mejores precios" className="rounded-md object-cover"/>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[2rem] font-semibold">Busca por categorias</h1>
        </div>
        <Card className="w-[35rem]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative aspect-video">
              <Image src={games[1].background_image} fill alt="Categorias" className="rounded-md object-cover"/>
            </div>
          </CardContent>
        </Card>
      </section>
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex h-[10rem] items-center justify-center space-x-4">

        <div className="max-w-[20rem] items-center justify-center">
          <h1 className="text-[1.5rem] font-semibold">Elige los productos que vas a comrar</h1>
          <p>Si quieres mas de uno, sumalos a tu carrito.</p>
        </div>
        <Separator orientation="vertical" />
        <div className="max-w-[20rem]">
          <h1 className="justify-center text-[1.5rem] font-semibold">Paga con el medio de pago que quieras</h1>
          <p>Compra con seguridad: usamos la tecnologia de Mercado Pago.</p>
        </div>
        <Separator orientation="vertical" />
        <div className="max-w-[20rem]">
          <h1 className="text-[1.5rem] font-semibold">Recibe el producto que esperas</h1>
          <p>Elige la forma de entrega que prefieras !y listo! Aseguramo tu entrada con Mercado Envios.</p>
        </div>

      </div>
      </section>
      <footer className="bg-gray-100 dark:bg-gray-900">
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="https://flowbite.com/" className="flex items-center">
                        {/* <Image src="https://res.cloudinary.com/dehsikb6h/image/upload/v1686791940/cachshoop/logo/appicon-style-a-cute-happy-astronaut-siamese-cat--flat-icon-717144716_p7aslq_cxc7q3.png" fill alt="Mejores precios" className="rounded-md object-cover"/> */}
                        <img src="https://res.cloudinary.com/dehsikb6h/image/upload/v1686791940/cachshoop/logo/appicon-style-a-cute-happy-astronaut-siamese-cat--flat-icon-717144716_p7aslq_cxc7q3.png" className="mr-3 h-8" alt="FlowBite Logo" />
                        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">Cache Shoop</span>
                    </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
                        <ul className="font-medium text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">CacheShop™</a>. All Rights Reserved.
                </span>
                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                        <span className="sr-only">Instagram page</span>
                    </a>
                </div>
            </div>
          </div>
      </footer>
    </>
  )
}
