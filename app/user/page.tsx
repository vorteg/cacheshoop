import { AuthButtonServer } from '@/components/AuthButtonServer'

async function page() {
  const auth = await AuthButtonServer()
  return (
    <section className='grid place-content-center min-h-screen'>
      <h1 className='text-xl font-bold mb-4'>Perfil del Usuario</h1>
      <div className='grid place-content-center'>
        {auth}
      </div>
    </section>
  )
}

export default page