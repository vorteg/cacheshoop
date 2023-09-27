
import Image from 'next/image';

import { Product } from '@/types/product';
import Link from 'next/link';



const ProductCarousel = ( { products }: { products: Product[] } ) => {


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
                    src={product.images.data[ 0 ].src}
                    fill
                    className="rounded-md object-cover "
                    alt={product.images.data[ 0 ].alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

                  />
                </div>

              </Link>
              <div className="p-4">
                <h2 className="text-md font-semibold text-black"> {product.name.length > 30 ? product.name.slice( 0, 30 ) + '...' : product.name}</h2>
                <p className="text-gray-700">${product.price} MXN</p>

              </div>
            </div>
          </div>
        ) )}
      </div>
    </div>
  );
};

export default ProductCarousel;