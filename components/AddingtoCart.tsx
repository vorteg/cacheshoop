'use client'

import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice';

import { Button } from './ui'
import { addToCart, updateProductQuantity } from '@/app/(store)/Cart/actions/cartActions'
import { CProduct } from '@/app/(store)/Cart/types';

function AddingtoCart( { product }: { product: CProduct } ) {


  const handleAddToCart = () => {
    const { cart } = useCartStore.getState()
    const existingProduct = cart.find( ( item ) => item.id === product.id );

    if ( existingProduct?.quantity ) {
      const newQuantity = existingProduct.quantity + 1;
      // Llamar a la función para actualizar la cantidad del producto en el carrito
      updateProductQuantity( existingProduct.id - 1, newQuantity );
    } else {
      // Si el producto no está en el carrito, agrégalo
      addToCart( product );
    }

  }

  return (
    <Button onClick={handleAddToCart}>+</Button>
  )
}

export default AddingtoCart