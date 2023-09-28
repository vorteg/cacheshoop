'use client'

import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice';
import { getOrderId } from '@/utils/get-mp-order';
import { Button } from './ui';
import { useRouter } from 'next/navigation'

function BuyButton() {
  const { cart } = useCartStore();
  const router = useRouter()

  const sendOrder = async () => {
    if ( cart.length === 0 ) {
      return;
    }
    try {
      const orderId = await getOrderId( cart );
      router.push( `/payment/${orderId?.data}` )

    } catch ( error ) {
      console.log( error )
    }
  }
  return (
    <>
      <Button onClick={sendOrder}>Continuar la Compra</Button>
    </>
  )
}

export default BuyButton