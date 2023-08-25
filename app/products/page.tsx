
import React from 'react'
import Link from 'next/link';
import CardProduct from "@/components/CardProduct";
import dto from "@/supabase/client_product"

//ToDOAgregar map para recorrer los productos
export const dynamic = 'force-dynamic'

async function page() {
  const products = await dto()

  return (
    <>
      <section className="w-full container grid items-center gap-6 pb-8 pt-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Productos disponibles</h1>
          <div className="grid grid-cols-1  gap-6">
            {
              products?.map( ( item ) => (
                <CardProduct product={item} key={item.id} />
              ) )
            }
          </div>
          <div className="mt-6 flex justify-center">
            <Link href="#" className="text-blue-500 hover:underline">
              Siguiente
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default page