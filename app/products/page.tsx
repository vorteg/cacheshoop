
import React from 'react'
import Link from 'next/link';
import CardProduct from "@/components/CardProduct";
import dto from "@/supabase/client_product"
import { fetchfproductsAction, readfproductsAction } from '../(store)/storeFProducts/actions/fproductAction';
import FilterProduct from "../../components/FilterProduct";

//ToDOAgregar map para recorrer los productos
export const dynamic = 'force-dynamic'

async function page() {
  // const products = await dto()
  await fetchfproductsAction()
  const products = await readfproductsAction()
  return (
    <section className='grid grid-cols-1 md:grid-cols-[20%,auto] md:gap-5'>
      <FilterProduct />
      <section className="cols-span-2 grid grid-rows-[4%,auto] 
       gap-5 md:grid-rows-[10%,auto] md:items-center">
        <h1 className="row-span-1 text-3xl text-center 
        max-w-full md:text-5xl">Productos disponibles</h1>
        <section className="max-w-full flex flex-col gap-4">
          {
            products?.slice( 0, 4 ).map( ( item ) => (
              <CardProduct product={item} key={item.id} />
            ) )
          }

        </section>
        <Link href="#" className="text-blue-500 hover:underline">
          Siguiente
        </Link>
      </section>
    </section>
  )
}

export default page