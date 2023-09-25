import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Product } from '@/types/product'
import AddingtoCart from './AddingtoCart';

interface CardProductProps {
  product: Product;
  key: number;
}

const CardProduct: React.FC<CardProductProps> = ( { product, key } ) => {
  return (
    <article key={key} className="group relative  rounded-sm border-2 dark:border-white">
      <Link href={`/products/${product.id}`}>
        <Image
          src={product.images.data[ 0 ].src}
          alt={product.images.data[ 0 ].alt}
          className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'
          width={100}
          height={100}
          sizes='(max-width: 768px) 120px, 120px, (max-width: 1024px) 150px, 150px'
        />
      </Link>

      <div className='mt-4 flex flex-col justify-between'>
        <div >
          <h3 className="text-sm ">
            <span aria-hidden="true" className="absolute"  ></span>
            {product.name}
          </h3>
        </div>

      </div>
      <div className='flex justify-between'>
        <AddingtoCart product={{
          id: product.id.toString(),
          title: product.name,
          picture_url: product.images.data[ 0 ].src,
          quantity: 1,
          unit_price: product.price,
          currency_id: "MXN"
        }} />
        <p className=" text-right text-sm font-medium ">${product.price}</p>
      </div>




    </article>
  )
}

export default CardProduct