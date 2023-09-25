
import Link from 'next/link';
import CardProduct from "@/components/CardProduct";

import FilterGlob from '@/components/FilterGlob';
import FilterProduct from '@/components/FilterProduct';
import { getProductsAPI } from '@/utils/products-dto';

//ToDOAgregar map para recorrer los productos
export const dynamic = 'force-dynamic'

async function page() {

  let products = await getProductsAPI()
  if ( products ) {
    return (
      <section className='mt-16 grid grid-cols-1 place-content-center md:grid-cols-[20%,auto] md:gap-2'>
        <FilterGlob />
        <div className='hidden md:grid md:col-span-1 bg-slate-50 rounded-lg'>
          <FilterProduct />

        </div>


        <section className=" max-w-2xl px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">Productos disponibles</h2>
          <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              products?.slice( 0, 4 ).map( ( item ) => {
                return <CardProduct product={item} key={item.id} />
              } )
            }
            {/* <Link href="#" className="text-blue-500 hover:underline">
            Siguiente
          </Link> */}

          </section>


        </section>


      </section>
    )
  }
  return ( <p>No Data</p> )

}

export default page