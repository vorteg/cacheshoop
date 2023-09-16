import { AuthButtonServer } from '@/components/AuthButtonServer'
import { buttonVariants } from '@/components/ui'
import Link from 'next/link'

async function page() {
  const auth = await AuthButtonServer()
  return (
    <section className=' border border-t-2 border-white shadow-white shadow-md rounded-lg mx-4 p-4 pb-8  lg:mx-96 lg:py-60 grid grid-rows-[10%,40%,20%,20%,10%] place-content-center my-12'>
      <h1 className='text-3xl font-bold mb-4 '>Perfil del Usuario</h1>
      <div className='my-4'>
        <h2 className='font-bold'>Ultima orden de compra</h2>
        <ul>
          <li className='flex space-x-1'><p className='font-semibold '>Referencia:</p><span className='bg-gradient-to-r from-red-400 to-red-600 shadow-lg px-2'>CShoop-12123</span></li>
          <li className='flex space-x-1'><p className='font-semibold '>Name:</p><span>laptop</span></li>
          <li className='flex space-x-1'><p className='font-semibold '>Estado:</p><span>Pendiente</span></li>
        </ul>
      </div>
      <Link href={"/user/payments"} className={`${buttonVariants( {
        size: "sm",
        variant: "ghost",
      } )} my-2 bg-gradient-to-r from-indigo-500 to-indigo-800 p-6 rounded-lg shadow-lg`}>
        Compras
      </Link>
      <Link href={"/user/orders"} className={`${buttonVariants( {
        size: "sm",
        variant: "ghost",
      } )}, bg-gradient-to-r from-gray-50 to-gray-300 dark:text-black p-6 rounded-lg shadow-lg`}>
        Ordenes de Compra
      </Link>
      <div className='grid grid-cols-2 gap-1 '>
        <Link href={"/user/profile"} className={`${buttonVariants( {
          size: "lg",
          variant: "ghost",
        } )} rounded-lg shadow-lg bg-gradient-to-r from-emerald-500 to-esmerald-800`}>
          Datos de Perfil
        </Link>
        {auth}
      </div>
    </section>
  )
}

export default page