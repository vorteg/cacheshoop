import Payment from '@/components/Payment'
import Resume from '@/components/Resume'

function page( { params }: any ) {

  return (
    <section className=" h-screen container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Resume />
      {process.env.MP_PUBLIC_KEY ? ( <Payment order={params.order} PKey={process.env.MP_PUBLIC_KEY} /> ) : null}

    </section>
  )
}

export default page