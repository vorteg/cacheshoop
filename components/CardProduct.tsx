import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { siteConfig } from '@/config/site'
import { Product } from '@/types/product'

interface CardProductProps {
  product: Product;
  key: number;
}

const CardProduct: React.FC<CardProductProps> = ( { product, key } ) => {
  return (
    <div key={key} className="bg-slate-300 rounded-lg shadow-md overflow-hidden">
      <Link href="#">
        <div className="flex">
          <div className="flex-shrink-0">
            <Image
              src={product.url_img}
              alt={product.name}
              className="mr-3 h-15"
              width={384}
              height={84}
              quality="100"
            />
          </div>
          <div className="flex-grow p-4">
            <h2 className="text-xl text-gray-700 font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
            <p className="text-gray-600">Precio: <span className="text-green-500">${product.price}</span></p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardProduct