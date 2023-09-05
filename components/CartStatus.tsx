'use client'

import { Icons } from './ui'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice'

function CartStatus() {
  const { cart } = useCartStore();
  const [ numberItems, setNumberItems ] = useState( 0 );


  useEffect( () => {
    // Calcular el número de productos en el carrito
    const newNumberItems = cart.reduce( ( total, item ) => total + item.quantity, 0 );


    // Actualizar el estado local con el número de productos
    setNumberItems( newNumberItems );
  }, [ cart ] )

  return (
    <div className='flex'>
      <Icons.car />
      <p>{numberItems}</p>

    </div>
  )
}

export default CartStatus