import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Order {
  reference: string;
  products: Product[];
  subtotal: number;
  shippingCost: number;
  totalPrice: number;
}

interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ( { order } ) => {
  return (
    <div className="shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Detalles de Orden</h2>
      <p className="text-gray-600 mb-2">Referencia: {order.reference}</p>
      <div className="mb-2">
        <h3 className="text-lg font-semibold">Productos</h3>
        <ul>
          {order.products.map( ( product ) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <li>
                {product.name}: ${product.price}
              </li>
            </Link>

          ) )}
        </ul>
      </div>
      <p className="text-gray-600 mb-2">Subtotal: ${order.subtotal}</p>
      <p className="text-gray-600 mb-2">Costo de Envio: ${order.shippingCost}</p>
      <p className="text-xl font-semibold">Total: ${order.totalPrice}</p>
    </div>
  );
};

export default OrderCard;