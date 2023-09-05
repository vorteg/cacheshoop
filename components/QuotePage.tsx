'use client'

import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice';
import { useEffect, useState } from 'react';

function QuotePage() {

  const { cart } = useCartStore();
  const shippingCost = 10.23

  // Función para calcular el valor total de productos en el carrito
  const calculateTotalCost = () => {
    return cart.reduce( ( total: number, product: CProduct ) => total + product.price * product.quantity, 0 );
  };

  const [ totalProducts, setTotalProducts ] = useState( 0 );
  const [ subTotal, setSubTotal ] = useState( 0 );
  const [ totalCost, setTotalCost ] = useState( 0 );

  useEffect( () => {
    const updatedTotalProducts = cart.reduce( ( total, product ) => total + product.quantity, 0 );
    const updateSubtotal = parseFloat( calculateTotalCost().toFixed( 2 ) )
    const updatedTotalCost = parseFloat( ( updateSubtotal + shippingCost ).toFixed( 2 ) );

    setTotalProducts( updatedTotalProducts );
    setTotalCost( updatedTotalCost );
    setSubTotal( updateSubtotal )
  }, [ cart, shippingCost ] );


  return (
    <div className='bg-slate-500 rounded-md text-xs grid grid-cols-2 p-2'>
      <div className='col-span-1 flex flex-col'>
        <p>Productos:</p>
        <p>SubTotal:</p>
        <p>Costo de Envío:</p>
        <p>Total:</p>
      </div>
      <div className='flex flex-col text-right'>
        <p>{totalProducts}</p>
        <p>${subTotal} MXN</p>
        <p>${shippingCost} MXN</p>
        <p>${totalCost} MXN</p>

      </div>



    </div>
  )
}

export default QuotePage