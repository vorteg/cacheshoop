
import React from 'react'
import { Button } from '@/components/ui'
import useCounterStore from '../(store)/counter'
// import useProductsStore from '../(store)/products'
import dto from '@/supabase/client_product'
import Image from "next/image";
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import CardProduct from "../../components/CardProduct";
//ToDOAgregar map para recorrer los productos

async function page() {
  // const { count, increment } = useCounterStore()
  // const { products, apiCall } = useProductsStore()

  // console.log(products)
  // const products = await dto()
  // console.log(products)
  {/* {JSON.stringify( products )} */ }
  return (
    <>
      <section className="w-full container grid items-center gap-6 pb-8 pt-6">

        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Productos disponibles</h1>
          <div className="grid grid-cols-1  gap-6">
            <CardProduct />
            {/* Agregar más tarjetas de productos aquí */}
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="#" className="text-blue-500 hover:underline">
              Siguiente
            </Link>
          </div>
        </div>

        {/* <h1 className="text-[2rem] font-semibold">{products[0] ? products[0]["name"] : "no hay datos"}</h1>
                <Image
                    src={products[0] ? products[0].url_img : "no hay datos"}
                    alt="CacheShoop Logo"
                    className="mr-3 h-15"
                    width={1024}
                    height={784}
                    quality="100"
                />
                <p>{products[0] ? products[0]["description"] : "no hay datos"}</p>
                <p>{products[0] ? products[0]["price"] : "no hay datos"}</p>
                <p>{products[0] ? products[0]["url_img"] : "no hay datos"}</p> */}

        <div className='m-18 grid grid-cols-4 gap-12 rounded-md'>
          {/* <Button className='col-span-4 md:col-span-2 lg:col-span-1' onClick={apiCall}>inc</Button> */}
        </div>

      </section>
    </>
  )
}

export default page