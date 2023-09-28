

import OrderCard from '@/components/OrderCard';
import { buttonVariants } from '@/components/ui';
import { dto_read_uo_by_id, dto_read_uo_by_ref } from '@/supabase/client_user_order';
import Link from 'next/link';



const OrderDetailsPage = async ( { params }: any ) => {
  const id = params?.id
  let order = await dto_read_uo_by_id( id )
  if ( params.id.startsWith( 'CSH' ) ) {
    order = await dto_read_uo_by_ref( id )
  }
  if ( order ) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl mb-4">Order Details</h1>
        <OrderCard order={order} />
        <Link href={"/user"} className={`${buttonVariants( {
          size: "sm",
          variant: "ghost",
        } )} my-2 bg-gradient-to-r from-indigo-500 to-indigo-800 p-6 rounded-lg shadow-lg`}>Regresar a Opciones de usuario</Link>
      </div>
    );

  }
  return (
    <>
      <p className='container my-16'>No Data Disponible</p>
      <Link href={"/user"} className={`${buttonVariants( {
        size: "sm",
        variant: "ghost",
      } )} my-2 bg-gradient-to-r from-indigo-500 to-indigo-800 p-6 rounded-lg shadow-lg`}>Regresar a Opciones de usuario</Link>
    </>


  )

};

export default OrderDetailsPage;