import { CProduct } from '@/app/(store)/Cart/types';
import axios from 'axios';

export const getOrderId = async (cart:CProduct[]) => {
  if ( cart.length === 0 ) {
        // Muestra un mensaje de error o toma medidas apropiadas
        console.log( 'El carrito está vacío. No se puede crear un pedido.' );
        return null
      }
  try {
    const response = await axios.post(`/api/payment/mp/create-order`,cart);     
    return response.data // Assuming the response structure has a "results" property
  } catch (error) {
    console.error('Error:', error);
    return ''
  }
};