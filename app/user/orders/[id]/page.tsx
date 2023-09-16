import React from 'react'

import OrderCard from '@/components/OrderCard';
import Link from 'next/link';

const orders = [
  {
    reference: "CSHOOP-29831981398",
    products: [ {
      id: 2,
      name: "corte laser",
      price: 15
    } ],
    subtotal: 15,
    shippingCost: 0,
    totalPrice: 15
  }
];

const OrderDetailsPage: React.FC = () => {
  const order = orders[ 0 ]; // Tomamos la primera orden como ejemplo

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Order Details</h1>
      <OrderCard order={order} />
      <Link href={"/user"} className=''>Regresar a Opciones de usuario</Link>
    </div>
  );
};

export default OrderDetailsPage;