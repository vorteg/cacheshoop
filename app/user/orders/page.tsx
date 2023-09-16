'use client'
import { buttonVariants } from '@/components/ui';
import Link from 'next/link';
// pages/orders.tsx

import { useState } from 'react';

export default function Orders() {
  const [ orders, setOrders ] = useState( [] ); // Aquí debes cargar tus datos de órdenes
  const [ filterDate, setFilterDate ] = useState( '' );
  const [ filterReference, setFilterReference ] = useState( '' );

  // Función para cargar las órdenes (debes implementarla)
  const fetchOrders = () => {
    // Aquí debes realizar la solicitud para obtener las órdenes desde tu fuente de datos
    // y actualizar el estado 'orders' con los resultados.
  };

  // Función para filtrar órdenes
  const filterOrders = () => {
    // Implementa la lógica para filtrar órdenes por fecha y referencia
    // utilizando 'filterDate' y 'filterReference'.
    // Actualiza el estado 'orders' con las órdenes filtradas.
  };

  return (
    <div className="container mx-auto p-4 grid grid-rows-[10%,10%,10%,2%,auto] gap-5">
      <h1 className="text-2xl mb-16">Listado de Órdenes de Compra</h1>
      <input
        type="text"
        placeholder="Numero de Referencia"
        className="border rounded p-2"
        value={filterReference}
        onChange={( e ) => setFilterReference( e.target.value )}
      />
      <input
        type="date"
        className="border rounded p-2"
        value={filterDate}
        onChange={( e ) => setFilterDate( e.target.value )}
      />
      <button
        className={buttonVariants( {
          size: "lg",
          variant: "default",
        } )}
        onClick={filterOrders}
      >
        Buscar
      </button>
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

                {"Despachando"}
              </Link>
            </td>

            {/* Agrega más celdas de datos según tus datos */}
          </tr>


          {/* ) )} */}
        </tbody>
      </table>
      <Link href={"/user"} className=''>Regresar a Opciones de usuario</Link>
    </div>
  );
}
