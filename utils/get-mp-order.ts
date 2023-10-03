import { CProduct } from '@/app/(store)/Cart/types';
import axios from 'axios';

export const getOrderId = async (cart:CProduct[], address:string) => {
  if ( cart.length === 0 ) {
        // Muestra un mensaje de error o toma medidas apropiadas
        console.log( 'El carrito está vacío. No se puede crear un pedido.' );
        return null
      }
  try {
    const subtotal = cart.reduce(( total: number, product: CProduct ) => total + product.unit_price * product.quantity, 0 )
    const shippingCost = subtotal > 400 ? 0 : 100 
    const total = ( subtotal + shippingCost ).toFixed( 2 ) 
    const response = await axios.post(`/api/payment/mp/create-order`,{cart:cart, address:address,subtotal,shippingCost, total});     
    return response.data // Assuming the response structure has a "results" property
  } catch (error) {
    console.error('Error:', error);
    return ''
  }
};