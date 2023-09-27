import Link from 'next/link'

function page() {
  return (
    <section className=" h-screen container flex flex-col justify-center items-center pb-8 pt-6 md:py-10">
      <h1 className="text-[2rem] font-semibold">Estamos al pendiendiente de tu pago</h1>
      <p>Estaremos notificando el estado de tu pedido, encuentra mas detalles en <Link href={'/user/orders'}>Mis Ordenes</Link></p>
      <p>Contactanos por Whatsapp para cualquier duda o acalaracion.</p>
    </section>
  )
}

export default page