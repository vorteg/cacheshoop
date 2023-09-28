'use client'

import MPButton from '@/components/MPButton';
import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice';

function Payment( { PKey, order }: { PKey: string, order: string } ) {
  const { cart } = useCartStore();


  return (
    <>
      {cart.length === 0 ? ( <p className='mt-0'>Selecciona al Menos un Producto</p> ) : ( <MPButton publicKey={PKey} preferenceId={order} /> )}
    </>
  );
}

export default Payment;