import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FProduct } from '@/types/fproduct'

interface CardProductProps {
  product: FProduct;
  key: number;
}

const CardProduct: React.FC<CardProductProps> = ( { product, key } ) => {
  return (
    <article key={key} className="bg-slate-300 rounded-lg md:flex md:flex-row">

      <figure className='flex justify-center my-5 md:items-center md:w-1/4 '>
        <Image
          src={product.image}
          alt={product.title}
          className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-3xl"
          width={100}
          height={100}
          sizes='(max-width: 768px) 120px, 120px, (max-width: 1024px) 150px, 150px'
        />
      </figure>

      <div className='m-5 md:w-3/4'>
        <h2 className="text-xl text-gray-700 font-semibold ">{product.title}</h2>
        <p className="text-gray-600">
          {product.description}
        </p>
        <p className="text-gray-600">Precio: <span className="text-green-500">${product.price}</span></p>

      </div>


    </article>
  )
}

export default CardProduct