'use client'
import { Button, buttonVariants } from '@/components/ui';
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
      const response = await axios.get( `${process.env.URL_CALLBACK}/api/userOrder/orders` ); // Reemplaza con tu ruta real
      setOrders( response.data );
    } catch ( error ) {
      console.error( 'Error al obtener órdenes:', error );
    }
  };

  // Función para filtrar órdenes
  const filterOrders = async () => {
    // Filtra las órdenes según los valores de 'filterDate' y 'filterReference'
    if ( filterDate != '' ) {
      const filteredOrders = await axios( `${process.env.URL_CALLBACK}/api/userOrder/orders?date=${filterDate}` )
      setOrders( filteredOrders.data );


    }
    if ( filterReference != '' ) {
      const filteredOrders = await axios( `${process.env.URL_CALLBACK}/userOrder/orders?reference=${filterReference}` )
      setOrders( filteredOrders.data );

    }

    // Actualiza el estado 'orders' con las órdenes filtradas
  };

  useEffect( () => {
    // Cargar las órdenes cuando el componente se monte
    fetchOrders();

  }, [] );

  return (
    <div className="container mx-auto p-4 grid grid-rows-[10%,10%,10%,2%,auto] gap-5">
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
                <Link href={`/user/orders/${1}`} >

                  {order.created_at}

                </Link>
              </td>

              <td className="border text-center text-xs">
                <Link href={`/user/orders/${1}`} >
                  {order.reference_id}
                </Link>

              </td>
              <td className="border text-center text-xs">
                <Link href={`/user/orders/${1}`} >

                  {order.status}
                </Link>
              </td>
            </tr> ) ) ) : (

            <tr>
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
            </tr>
          )


          }
        </tbody>
      </table>
      <Link href={"/user"} className=''>Regresar a Opciones de usuario</Link>
    </div>
  );
}
