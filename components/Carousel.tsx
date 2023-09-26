
import Image from 'next/image';

import { FProduct } from '@/types/fproduct';
import Link from 'next/link';



const ProductCarousel = ( { products }: { products: FProduct[] } ) => {


  return (
    <div className="w-full overflow-x-auto whitespace-nowrap">

      <div className="flex overflow-x-auto space-x-4 py-4">
        {products.map( ( product, index ) => (
          <div
            key={product.id}
            className="max-w-xs transform transition-transform ease-in-out duration-300 scale-90 hover:scale-100"
          >
            <div className="bg-white shadow-md rounded-lg overflow-hidden">

              <Link href={`/products/${product.id}`} >
                <div className="relative aspect-square h-64">
                  <Image
                    src={product.image}
                    fill
                    className="rounded-md object-cover "
                    alt={product.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

                  />
                </div>

              </Link>
              <div className="p-4">
                <h2 className="text-md font-semibold text-black"> {product.title.length > 30 ? product.title.slice( 0, 30 ) + '...' : product.title}</h2>
                <p className="text-gray-700">${product.price}</p>

              </div>
            </div>
          </div>
        ) )}
      </div>
    </div>
  );
};

export default ProductCarousel;