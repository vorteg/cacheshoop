'use client'

import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice';
import { useEffect, useState } from 'react';

function QuotePage() {
  const { cart } = useCartStore();
  const [ totalProducts, setTotalProducts ] = useState( 0 );
  const [ subTotal, setSubTotal ] = useState( 0 );
  const [ totalCost, setTotalCost ] = useState( 0 );
  const [ shippingCost, setShippingCost ] = useState( 100 );

  const calculateTotalCost = () => {
    return cart.reduce( ( total, product ) => total + product.unit_price * product.quantity, 0 );
  };

  useEffect( () => {
    const updatedTotalProducts = cart.reduce( ( total, product ) => total + product.quantity, 0 );
    const updateSubtotal = parseFloat( calculateTotalCost().toFixed( 2 ) );
    const updatedShippingCost = updateSubtotal >= 400.0 || updateSubtotal == 0 ? 0 : 100;
    const updatedTotalCost = parseFloat( ( updateSubtotal + updatedShippingCost ).toFixed( 2 ) );

    setTotalProducts( updatedTotalProducts );
    setTotalCost( updatedTotalCost );
    setSubTotal( updateSubtotal );
    setShippingCost( updatedShippingCost );
  }, [ cart ] );

  return (
    <div className="bg-stone-700 rounded-md text-white text-xs grid grid-cols-2 p-2">
      <div className="col-span-1 flex flex-col">
        <p>Productos:</p>
        <p>SubTotal:</p>
        <p>Costo de Envío:</p>
        <p>Total:</p>
      </div>
      <div className="flex flex-col text-right">
        <p>{totalProducts}</p>
        <p>${subTotal} MXN</p>
        <p>${shippingCost} MXN</p>
        <p>${totalCost} MXN</p>
      </div>
    </div>
  );
}

export default QuotePage;