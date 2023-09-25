'use client'

import axios from 'axios';
import Link from 'next/link'
import { useEffect, useState } from 'react';


function page() {
  const [ purchases, setPurchases ] = useState( '' )

  const fetchPuchased = async () => {
    try {
      const response = await axios.get( `${process.env.URL_CALLBACK}/api/userOrder/purchased` ); // Reemplaza con tu ruta real
      setPurchases( response.data );
    } catch ( error ) {
      console.error( 'Error al obtener compras:', error );
    }
  };

  useEffect( () => {
    // Cargar las órdenes cuando el componente se monte
    fetchPuchased();

  }, [] );
  return (
    <div className="container mt-16 mx-auto p-4 grid grid-rows-[10%,auto] gap-5">
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
          {

            Array.isArray( purchases ) && purchases.length > 0 ? ( purchases.map( ( purchase ) => (

              <tr key={purchase.id}>
                <td className="border text-center text-xs">
                  <Link href={`/user/orders/${1}`} >

                    {purchase.created_at}

                  </Link>
                </td>

                <td className="border text-center text-xs">
                  <Link href={`/user/orders/${1}`} >
                    {purchase.external_reference}
                  </Link>

                </td>
                <td className="border text-center text-xs">
                  <Link href={`/user/orders/${1}`} >

                    {purchase.status}
                  </Link>
                </td>

                {/* Agrega más celdas de datos según tus datos */}
              </tr>


            ) ) ) :

              ( <tr key={"order.id"}>
                <td className="border text-center text-xs">
                  <Link href={`/user/orders/${1}`} >

                    no data

                  </Link>
                </td>

                <td className="border text-center text-xs">
                  <Link href={`/user/orders/${1}`} >
                    no data
                  </Link>

                </td>
                <td className="border text-center text-xs">
                  <Link href={`/user/orders/${1}`} >

                    no data
                  </Link>
                </td>

                {/* Agrega más celdas de datos según tus datos */}
              </tr> )
          }
        </tbody>
      </table>
      <Link href={"/user"} className=''>Regresar a Opciones de usuario</Link>
    </div>
  )
}

export default page