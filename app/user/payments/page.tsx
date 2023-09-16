import Link from 'next/link'


function page() {
  return (
    <div className="container mx-auto p-4 grid grid-rows-[10%,auto] gap-5">
      <h1 className="text-2xl mb-16">Listado Compras</h1>

      <table className="my-10 w-full">
        <thead>
          <tr>
            <th className="border p-2">Fecha</th>
            <th className="border p-2">Referencia </th>
            <th className="border p-2">Estado</th>
            {/* Agrega más encabezados de columna según tus datos */}
          </tr>
        </thead>
        <tbody>
          {/* {orders.map( ( order ) => ( */}

          <tr key={"order.id"}>
            <td className="border text-center text-xs">
              <Link href={`/user/orders/${1}`} >

                {"6/12/2023"}

              </Link>
            </td>

            <td className="border text-center text-xs">
              <Link href={`/user/orders/${1}`} >
                {"CSHOOP-2939910"}
              </Link>

            </td>
            <td className="border text-center text-xs">
              <Link href={`/user/orders/${1}`} >

                {"Pagado"}
              </Link>
            </td>

            {/* Agrega más celdas de datos según tus datos */}
          </tr>


          {/* ) )} */}
        </tbody>
      </table>
      <Link href={"/user"} className=''>Regresar a Opciones de usuario</Link>
    </div>
  )
}

export default page