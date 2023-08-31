
import { Button } from '@/components/ui'


function page() {
  return (
    <section className='mx-20 mt-16 py-10 grid grid-cols-1 md:grid-cols-[60%,auto] md:gap-5'>
      <div className='bg-slate-500 w-full rounded-lg grid grid-rows-[4%,auto] md:grid md:col-span-1'>

      </div>

      <div className='bg-slate-500 w-full rounded-lg grid grid-rows-[20%,70%,auto]'>
        <p className='px-5 py-5 font-bold text-md'>Resumen de compra</p>
        <div className='m-5 grid grid-cols-2'>
          <div >
            <p>Producto</p>
            <p>Envio</p>
            <p className='font-bold'>Total</p>
          </div>
          <div className='text-right mb-5' >
            <p>$539</p>
            <p>Gratis</p>
            <p className='font-bold'>$539</p>
          </div>
          <Button className='w-60 mx-4 '>Continuar Compra</Button>
        </div>

      </div>
    </section>
  )
}

export default page