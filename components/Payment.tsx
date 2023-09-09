'use client'

import { getOrderId } from '@/utils/get-mp-order';
import { useEffect, useState } from 'react';
import MPButton from '@/components/MPButton';
import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice';

function Payment( { PKey }: { PKey: string } ) {
  const { cart } = useCartStore();
  const [ OrderId, setOrderId ] = useState( '' );

  useEffect( () => {
    async function handleCartChange() {
      if ( cart.length === 0 ) {
        return;
      }

      try {

        const orderId = await getOrderId( cart );
        if ( orderId ) {
          setOrderId( orderId.data.data );
        }
      } catch ( error ) {
        console.error( 'Error al obtener el ID de orden:', error );
        // Manejo de errores
      }
    }

    handleCartChange();

  }, [ cart ] );

  return (
    <div>
      {cart.length === 0 ? ( <p>Selecciona al Menos un Producto</p> ) : ( <MPButton publicKey={PKey} preferenceId={OrderId} /> )}
    </div>
  );
}

export default Payment;