
import QuotePage from '@/components/QuotePage'
import UlCartProdocts from '@/components/UlCartProdocts'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Button } from "@/components/ui"
import AddressInput from '@/components/AddressInput'
import BuyButton from '@/components/BuyButton'


async function page() {




  const supabase = createServerComponentClient( { cookies } )
  const { data: { session } } = await supabase.auth.getSession()

  if ( session === null ) {
    redirect( '/login' )
  }

  return (
    <section className='mt-4 mb-16 p-4 grid gap-5 content-center justify-center grid-cols-1 md:mt-16 md:grid-cols-[60%,auto] lg:grid-cols-[45%,auto] xl:grid-cols-[35%,auto] 2xl:grid-cols-[25%,auto]'>
      <div className='min-w-min max-w-2xl bg-stone-700 w-full rounded-lg  md:grid md:col-span-1'>
        <h2 className="text-white text-center text-md md:text-xl font-semibold">Carrito de Compra</h2>
        {/* Aquí colocas la lista de productos del carrito */}
        < UlCartProdocts />

      </div>

      <div className='min-w-min w-full grid md:grid-cols-1 gap-2'>

        <h2 className=" text-white bg-stone-700 text-center rounded-md row-span-1 text-sm md:text-xl font-semibold">Resumen de Compra</h2>
        {/* Detalles del resumen */}
        <QuotePage />

        {/* Botón para continuar con la compra */}
        <AddressInput id={session?.user.id} />
        <BuyButton />
      </div>

    </section >
  )
}

export default page