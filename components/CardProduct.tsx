import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FProduct } from '@/types/fproduct'
import AddingtoCart from './AddingtoCart';

interface CardProductProps {
  product: FProduct;
  key: number;
}

const CardProduct: React.FC<CardProductProps> = ( { product, key } ) => {
  return (
    <article key={key} className="group relative  rounded-sm border-2 dark:border-white">
      <Image
        src={product.image}
        alt={product.title}
        className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'
        width={100}
        height={100}
        sizes='(max-width: 768px) 120px, 120px, (max-width: 1024px) 150px, 150px'
      />
      <div className='mt-4 flex flex-col justify-between'>
        <div >
          <h3 className="text-sm ">
            <Link href={"/products/1"}>
              <span aria-hidden="true" className="absolute"  ></span>
              {product.title}
            </Link>



          </h3>
        </div>
        <p className=" text-right text-sm font-medium ">${product.price}</p>
      </div>
      <AddingtoCart product={{
        id: product.id,
        name: product.title,
        url: product.image,
        quantity: 1,
        price: product.price
      }} />



    </article>
  )
}

export default CardProduct