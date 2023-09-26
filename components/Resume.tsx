'use client'
import { useCartStore } from '@/app/(store)/Cart/slices/cartSlice';
import { getAddress } from '@/app/(store)/userData/actions/userActions';

function Resume() {
  const { cart } = useCartStore();
  const { address } = getAddress()
  const total = cart.reduce( ( acc, product ) => acc + product.unit_price, 0 );
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Resumen de la Compra</h2>

      {/* Detalles de los productos */}
      <ul className="mb-4">
        {cart.map( ( product, index ) => (
          <li key={index} className="flex justify-between">
            <span>{product.title}</span>
            <span>${product.unit_price.toFixed( 2 )}</span>
          </li>
        ) )}
      </ul>

      {/* Dirección de envío */}
      <div className="mb-4">
        <strong>Dirección de Envío:</strong>
        <p>{address}</p>
      </div>

      {/* Total de la compra */}
      <div className="text-xl font-semibold">
        <strong>Total:</strong> ${total.toFixed( 2 )}
      </div>
    </div>
  )
}

export default Resume