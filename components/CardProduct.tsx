import Link from 'next/link'
import Image from 'next/image'

import { Product } from '@/types/product'
import AddingtoCart from './AddingtoCart';

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ( { product } ) => {
  return (
    <article key={product.id} className="group relative  rounded-sm border-2 dark:border-white">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square">
          <Image
            src={product.images.data[ 0 ].src}
            alt={product.images.data[ 0 ].alt}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
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
        <p className=" text-right text-sm font-medium ">${product.price} MXN</p>
      </div>




    </article>
  )
}

export default CardProduct