'use client'

import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice';

import { Button } from './ui'
import { addToCart, updateProductQuantity } from '@/app/(store)/Cart/actions/cartActions'
import { CProduct } from '@/app/(store)/Cart/types';
import { Toaster, toast } from 'sonner';

function AddingtoCart( { product, buttonProps }: { product: CProduct, buttonProps?: { name: string } } ) {


  const handleAddToCart = () => {
    const { cart } = useCartStore.getState()
    toast.success( 'Producto agregado al carrito :)' )

    const existingProduct = cart.find( ( item ) => item.id === product.id );
    if ( existingProduct !== undefined ) {


      const newQuantity = existingProduct.quantity + 1;
      // Llamar a la función para actualizar la cantidad del producto en el carrito
      updateProductQuantity( existingProduct.id, newQuantity );
    }

    else {
      // Si el producto no está en el carrito, agrégalo
      addToCart( product );
    }

  }

  return ( <>
    <Toaster position="top-right" />
    <Button className={`${buttonProps ? "w-full" : ""}`} onClick={handleAddToCart}>{buttonProps ? buttonProps.name : "+"}</Button>
  </>
  )
}

export default AddingtoCart