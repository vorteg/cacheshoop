'use client'

import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice';
import { getOrderId } from '@/utils/get-mp-order';
import { Button } from './ui';
import { useRouter } from 'next/navigation'
import { getAddress } from '@/app/(store)/userData/actions/userActions';

function BuyButton() {
  const { cart } = useCartStore();
  const { address } = getAddress()
  const router = useRouter()

  const sendOrder = async () => {
    if ( cart.length === 0 ) {
      return;
    }
    try {
      const orderId = await getOrderId( cart, address );
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