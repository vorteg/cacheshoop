'use client'

import { updateProductQuantity } from '@/app/(store)/Cart/actions/cartActions';



function LiProduct( { product, index }: { product: CProduct, index: number } ) {

  const handleDecreaseQuantity = () => {
    const newQuantity = Math.max( product.quantity - 1, 0 );
    updateProductQuantity( index, newQuantity );
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = product.quantity + 1;
    updateProductQuantity( index, newQuantity );
  };


  return (
    <div className="bg-white dark:text-black rounded-md p-2 flex justify-between items-center w-full">
      <img
        src="vercel.svg"
        alt="Nombre del Producto"
        className="w-16 h-16 object-cover mr-4"
      />
      <div>
        {/* Nombre del producto */}
        <p className="md:text-lg font-semibold">{product.name}</p>
        {/* Número de unidades con controles */}
        <div className="flex gap-2 items-center mt-2">
          <p>Unidades:</p>
          <div>
            <button onClick={handleDecreaseQuantity} className="bg-gray-600  px-2 py-1 rounded-l">
              -
            </button>
            <span className="px-4">{product.quantity}</span> {/* Aquí puedes mostrar la cantidad actual */}
            <button onClick={handleIncreaseQuantity} className="bg-gray-600  px-2 py-1 rounded-r">
              +
            </button>
          </div>

        </div>
      </div>
      <p className="text-lg font-semibold">${product.quantity * product.price}MXN</p>
    </div>
  )
}

export default LiProduct