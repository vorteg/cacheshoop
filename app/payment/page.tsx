import Payment from '@/components/Payment'



import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

async function page() {
  const supabase = createServerComponentClient( { cookies } )
  const { data: { session } } = await supabase.auth.getSession()

  if ( session === null ) {
    redirect( '/login' )
  }
  return (
    <section className=" h-screen container grid items-center gap-6 pb-8 pt-6 md:py-10">
      {process.env.MP_PUBLIC_KEY ? ( <Payment PKey={process.env.MP_PUBLIC_KEY} /> ) : null}

    </section>
  )
}

export default page