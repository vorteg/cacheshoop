
import Link from 'next/link';
import CardProduct from "@/components/CardProduct";
import dto from "@/supabase/client_product"
import { readfproductsAction } from '../(store)/storeFProducts/actions/fproductAction';
import FilterGlob from '@/components/FilterGlob';
import FilterProduct from '@/components/FilterProduct';

//ToDOAgregar map para recorrer los productos
export const dynamic = 'force-dynamic'

async function page() {
  // const products = await dto()  
  const products = await readfproductsAction()
  return (
    <section className='mt-16 grid grid-cols-1 md:grid-cols-[20%,auto] md:gap-5'>
      <FilterGlob />
      {/* <SideCart /> */}
      <div className='hidden md:grid md:col-span-1'>
        <FilterProduct />

      </div>


      <section className=" mx-auto max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight">Productos disponibles</h2>
        <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {
            products?.slice( 0, 4 ).map( ( item ) => (
              <CardProduct product={item} key={item.id} />
            ) )
          }
          {/* <Link href="#" className="text-blue-500 hover:underline">
            Siguiente
          </Link> */}

        </section>


      </section>


    </section>
  )
}

export default page