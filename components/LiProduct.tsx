'use client'

import { updateProductQuantity } from '@/app/(store)/Cart/actions/cartActions';
import { CProduct } from '@/app/(store)/Cart/types';



function LiProduct( { product, index }: { product: CProduct, index: number } ) {

  const handleDecreaseQuantity = () => {
    const newQuantity = Math.max( product.quantity - 1, 0 );
    updateProductQuantity( product.id, newQuantity );
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = product.quantity + 1;
    updateProductQuantity( product.id, newQuantity );
  };


  return (
    <div className="bg-white dark:text-black rounded-md p-2 flex items-center w-full">
      <img
        src={product.picture_url}
        alt="Nombre del Producto"
        className="w-16 h-16 object-cover "
      />
      <div className=' p-4 m-2 flex flex-col flex-wrap'>
        {/* Nombre del producto */}
        <p className="md:text-lg font-semibold">{product.title}</p>
        {/* Número de unidades con controles */}
        <div className="flex gap-1 items-center mt-2">
          <p>Unidades:</p>
          <div>
            <button onClick={handleDecreaseQuantity} className="bg-gray-600 text-white text-xs px-2 py-1 rounded-l">
              -
            </button>
            <span className="px-1 md:px-4">{product.quantity}</span> {/* Aquí puedes mostrar la cantidad actual */}
            <button onClick={handleIncreaseQuantity} className="bg-gray-600 text-white text-xs px-2 py-1 rounded-r">
              +
            </button>
          </div>
          <p>{product.description}</p>

        </div>
        <p className=" p-4 m-2 text-lg font-semibold">${product.quantity * product.unit_price}MXN</p>
      </div>
    </div>
  )
}

export default LiProduct