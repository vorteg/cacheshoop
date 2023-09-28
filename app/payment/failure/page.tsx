import Link from 'next/link'


function page() {
  return (
    <>
      <section className=" h-screen container flex flex-col justify-center items-center pb-8 pt-6 md:py-10">



        <h1 className="text-[2rem] font-semibold">Pago No Prosesado</h1>
        <p>Lo sentimos algo salio mal, para ver el estado de tus pedidos dirigete a <Link href={'/user/orders'}>Mis Ordenes</Link></p>
        <p>En caso de tener un cargo por parte de este pedido,contactanos por Whatsapp para cualquier duda o acalaracion.</p>
      </section>
    </>
  )
}

export default page