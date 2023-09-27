import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  unit_price: number;
}

interface Order {
  created_at: string
  reference_id: string;
  status: string;
  products: Product[];
  subtotal: number;
  delivery_cost: number;
  total: number
}
interface OrderCardProps {
  order: Order;
}

const OrderCard: React.FC<OrderCardProps> = ( { order } ) => {
  return (
    <div className="shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">Detalles de Orden</h2>
      <p className="mb-2">Fecha: {order.created_at.slice( 0, 10 )}</p>
      <p className="mb-2">Referencia: {order.reference_id}</p>
      <div className="mb-2">
        <h3 className="text-lg font-semibold">Productos</h3>
        <ul>
          {order.products.map( ( product ) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <li>
                {product.title}: ${product.unit_price}
              </li>
            </Link>

          ) )}
        </ul>
      </div>
      <p>Status:{order.status}</p>
      <p className="mb-2">Costo de Envio: ${order.delivery_cost}</p>
      <p className="text-xl font-semibold">Total: ${order.total}</p>
    </div>
  );
};

export default OrderCard;