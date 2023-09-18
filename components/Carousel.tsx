
import Image from 'next/image';

import { FProduct } from '@/types/fproduct';


// Datos de ejemplo de productos
const products = [
  {
    id: 1,
    name: 'Producto 1',
    price: 19.99,
    image: 'URL_DE_LA_IMAGEN_1',
  },
  {
    id: 2,
    name: 'Producto 2',
    price: 29.99,
    image: 'URL_DE_LA_IMAGEN_2',
  },
  // Agrega más productos según sea necesario
];

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

              <div className="relative aspect-square h-64  ">
                <Image
                  src={product.image}
                  fill
                  className="rounded-md object-cover "
                  alt={product.title}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

                />
              </div>
              <div className="p-4">
                <h2 className="text-md font-semibold text-black"> {product.title.length > 30 ? product.title.slice( 0, 30 ) + '...' : product.title}</h2>
                <p className="text-gray-700">${product.price}</p>
                <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-300">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ) )}
      </div>
    </div>
  );
};

export default ProductCarousel;