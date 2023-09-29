'use client'
import { Button, buttonVariants } from '@/components/ui';
import { siteConfig } from '@/config/site';
import axios from 'axios';
import Link from 'next/link';
// pages/orders.tsx

import { useEffect, useState } from 'react';

export default function Orders() {
  const [ orders, setOrders ] = useState( '' ); // Aquí debes cargar tus datos de órdenes
  const [ filterDate, setFilterDate ] = useState( '' );
  const [ filterReference, setFilterReference ] = useState( '' );

  const clean = async () => {
    setFilterDate( '' )
    setFilterReference( '' )
    await fetchOrders()
  }
  // Función para cargar las órdenes (debe realizar la solicitud a tu API)
  const fetchOrders = async () => {
    try {
      const response = await axios.post( `${siteConfig.mainUrl}/api/userOrder/orders`, {
        reference: filterReference,
        date: filterDate,
        page: 1
      } );
      setOrders( response.data );
    } catch ( error ) {
      console.error( 'Error al obtener órdenes:', error );
    }
  };

  // Función para filtrar órdenes
  const filterOrders = async () => {
    // Filtra las órdenes según los valores de 'filterDate' y 'filterReference'
    if ( filterDate != '' ) {
      setFilterReference( '' )
      await fetchOrders()


    }
    if ( filterReference != '' ) {
      setFilterDate( '' )
      await fetchOrders()
    }

    // Actualiza el estado 'orders' con las órdenes filtradas
  };

  useEffect( () => {
    // Cargar las órdenes cuando el componente se monte
    fetchOrders();

  }, [] );

  return (
    <div className="container my-16 mx-auto p-4 grid grid-rows-[10%,10%,10%,2%,auto] gap-5">
      <h1 className="text-2xl mb-16">Listado de Órdenes de Compra</h1>
      <input
        type="text"
        placeholder="Numero de Referencia"
        className="border rounded p-2"
        value={filterReference}
        onChange={( e ) => { setFilterReference( e.target.value ); setFilterDate( '' ) }}
      />
      <input
        type="date"
        className="border rounded p-2"
        value={filterDate}
        onChange={( e ) => { setFilterDate( e.target.value ); setFilterReference( '' ) }}
      />
      <div className='flex justify-end gap-2'>
        <Button onClick={clean}>
          Limpiar
        </Button>
        <button
          className={buttonVariants( {
            size: "lg",
            variant: "default",
          } )}
          onClick={filterOrders}
        >
          Buscar
        </button>
      </div>
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
          {Array.isArray( orders ) && orders.length > 0 ? ( orders.map( ( order ) => (

            <tr key={order.id}>
              <td className="border text-center text-xs">
                <Link href={`/user/orders/${order.id}`} >

                  {order.created_at.slice( 0, 10 )}


                </Link>
              </td>

              <td className="border text-center text-xs">
                <Link href={`/user/orders/${order.id}`} >
                  {order.reference_id}
                </Link>

              </td>
              <td className="border text-center text-xs">
                <Link href={`/user/orders/${order.id}`} >

                  {order.status}
                </Link>
              </td>
            </tr> ) ) ) : (

            <tr>
              <td className="border text-center text-xs">


                no data


              </td>

              <td className="border text-center text-xs">

                no data


              </td>
              <td className="border text-center text-xs">


                no data

              </td>
            </tr>
          )


          }
        </tbody>
      </table>
      <Link href={"/user"} className={`${buttonVariants( {
        size: "sm",
        variant: "ghost",
      } )} my-2 bg-gradient-to-r from-indigo-500 to-indigo-800 p-6 rounded-lg shadow-lg`}>Regresar a Opciones de usuario</Link>
    </div>
  );
}
