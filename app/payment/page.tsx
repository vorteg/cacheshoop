import Payment from '@/components/Payment'



import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { redirect, } from 'next/navigation'
import { cookies } from 'next/headers'
import Resume from '@/components/Resume'


function page() {


  return (
    <section className=" h-screen container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1>Sin pedidos</h1>


    </section>
  )
}

export default page