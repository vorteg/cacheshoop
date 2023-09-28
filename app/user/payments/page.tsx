'use client'

import { buttonVariants } from '@/components/ui';
import { siteConfig } from '@/config/site';
import axios from 'axios';
import Link from 'next/link'
import { useEffect, useState } from 'react';


function page() {
  const [ purchases, setPurchases ] = useState( '' )

  const fetchPuchased = async () => {
    try {
      const response = await axios.get( `${siteConfig.mainUrl}/api/userOrder/purchased` ); // Reemplaza con tu ruta real
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
    <div className="container my-16 mx-auto p-4 grid grid-rows-[10%,auto] gap-5">
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
                  <Link href={`/user/orders/${purchase.external_reference}`} >

                    {purchase.created_at.slice( 0, 10 )}

                  </Link>
                </td>

                <td className="border text-center text-xs">
                  <Link href={`/user/orders/${purchase.external_reference}`} >
                    {purchase.external_reference}
                  </Link>

                </td>
                <td className="border text-center text-xs">
                  <Link href={`/user/orders/${purchase.external_reference}`} >

                    {purchase.status}
                  </Link>
                </td>

                {/* Agrega más celdas de datos según tus datos */}
              </tr>


            ) ) ) :

              ( <tr key={"order.id"}>
                <td className="border text-center text-xs">


                  no data

                </td>

                <td className="border text-center text-xs">

                  no data


                </td>
                <td className="border text-center text-xs">


                  no data

                </td>

                {/* Agrega más celdas de datos según tus datos */}
              </tr> )
          }
        </tbody>
      </table>
      <Link href={"/user"} className={`${buttonVariants( {
        size: "sm",
        variant: "ghost",
      } )} my-2 bg-gradient-to-r from-indigo-500 to-indigo-800 p-6 rounded-lg shadow-lg`}>Regresar a Opciones de usuario</Link>
    </div>
  )
}

export default page