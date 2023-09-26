'use client'

import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice'
import LiProduct from './LiProduct'
import { removeFromCart } from '@/app/(store)/Cart/actions/cartActions';
import { useEffect } from 'react';
import { CProduct } from '@/app/(store)/Cart/types';
import { Toaster, toast } from 'sonner';

function UlCartProdocts() {
  const { cart } = useCartStore();

  // Efecto que se ejecuta después de que el componente haya terminado de renderizarse
  useEffect( () => {
    // Función para eliminar un producto del carrito si su cantidad es 0
    const handleRemoveIfZero = ( product: CProduct ) => {
      if ( product.quantity === 0 ) {
        removeFromCart( product.id );
        toast.error( 'Producto eliminado del Carrito :(' )
      }
    };

    // Llama handleRemoveIfZero para cada producto en el carrito
    cart.forEach( ( product ) => {
      handleRemoveIfZero( product );
    } );
  }, [ cart, removeFromCart ] );

  return (
    <>
      <Toaster position="top-right" />
      <ul className='p-2'>
        <li className='flex flex-col gap-2 items-center'>
          {
            cart?.map( ( product, index ) => (
              <LiProduct key={index} product={product} index={index} />
            ) )
          }


        </li>
        {/* Agrega más elementos de lista según sea necesario */}
      </ul>
    </>
  )
}

export default UlCartProdocts