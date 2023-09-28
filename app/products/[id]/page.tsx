'use client'
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useParams } from 'next/navigation'


import Image from 'next/image';
import AddingtoCart from '@/components/AddingtoCart';
import axios from 'axios';
import { Product, Color, Size } from '@/types/product';
import { getOneProduct } from '@/utils/one-product'



const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames( ...classes: any[] ) {
  return classes.filter( Boolean ).join( ' ' )
}



function page() {
  const params = useParams()
  const [ product, setProduct ] = useState<Product | null>( null )
  const [ selectedColor, setSelectedColor ] = useState<Color | null>( null );
  const [ selectedSize, setSelectedSize ] = useState<Size | null>( null );

  useEffect( () => {
    const getProduct = async () => {
      try {
        const data = await getOneProduct( params.id.toString() )
        if ( data ) {
          setProduct( data );

          // Verifica que product.colors.data y product.sizes.data estén definidos
          if ( data.colors && data.sizes ) {
            setSelectedColor( data.colors.data[ 0 ] );
            setSelectedSize( data.sizes.data[ 2 ] );
          }
        }
      } catch ( error ) {
        // Maneja los errores de la solicitud aquí
        console.error( "Error al obtener el producto:", error );
      }
    };

    getProduct();

  }, [] )
  if ( product ) {


    return (
      <div className="md:mt-16">
        <div className="pt-6">


          {/* Image gallery */}
          <div className='container grid items-center gap-6 pt-6 md:py-10 md:place-content-center'>

            <div className="max-w-fi overflow-x-auto whitespace-nowrap">
              <div className="flex overflow-x-auto space-x-4 py-4">
                {
                  product.images && product.images.data.length > 0 ? (
                    product.images.data.map( ( image, index ) => (
                      <div key={index} className="max-w-xs transform transition-transform ease-in-out duration-300 scale-90 hover:scale-100">
                        <div className="shadow-md rounded-lg overflow-hidden">
                          <div>
                            <div className="relative aspect-square h-64 ">
                              <Image
                                src={image.src}
                                fill
                                alt={image.alt}
                                className="object-cover md:object-scale-down"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ) )
                  ) : (
                    // Puedes manejar el caso en el que product.images no existe o está vacío aquí
                    <p>No hay imágenes disponibles</p>
                  )
                }
              </div>
            </div>


          </div>


          {/* Product info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight  sm:text-3xl">{product.name}</h1>
            </div>

            {/* Options */}
            <div className="bg-stone-300 p-5 mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-black">${product.price} MXN</p>

              {/* Reviews */}
              <div className="mt-6">
                <h3 className="sr-only">Reviews</h3>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[ 0, 1, 2, 3, 4 ].map( ( rating ) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ) )}
                  </div>
                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                  <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    {reviews.totalCount} reviews
                  </a>
                </div>
              </div>

              <form className="mt-10" onSubmit={( e ) => e.preventDefault()}>

                {product.colors.data[ 0 ].name ?
                  ( <><div>
                    <h3 className="text-sm font-medium text-black ">Color</h3>

                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                      <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.data.map( ( color ) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={( { active, checked } ) => classNames(
                              color.selectedClass,
                              active && checked ? 'ring ring-offset-1' : '',
                              !active && checked ? 'ring-2' : '',
                              'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                            )}
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                'h-8 w-8 rounded-full border border-black border-opacity-10'
                              )} />
                          </RadioGroup.Option>
                        ) )}
                      </div>
                    </RadioGroup>
                  </div><div className="mt-10">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-black">Size</h3>
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          Size guide
                        </a>
                      </div>

                      <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                          {product.sizes.data.map( ( size ) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={( { active } ) => classNames(
                                size.inStock
                                  ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                  : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                active ? 'ring-2 ring-indigo-500' : '',
                                'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                              )}
                            >
                              {( { active, checked } ) => (
                                <>
                                  <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                  {size.inStock ? (
                                    <span
                                      className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-indigo-500' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-md'
                                      )}
                                      aria-hidden="true" />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        className="absolute inset-0 h-full w-full stroke-2 "
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ) )}
                        </div>
                      </RadioGroup>
                    </div></> )
                  : ( <></> )}


                <div

                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent  px-8 py-3 text-base font-medium  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <AddingtoCart product={{
                    id: product.id.toString(),
                    title: product.name,
                    picture_url: product.images.data[ 0 ].src,
                    quantity: 1,
                    unit_price: product.price,
                    currency_id: "MXN",
                    description: `color:${selectedColor?.name}, tamaño:${selectedSize?.name}`
                  }} buttonProps={{ name: "Agregar al Carrito" }} />

                </div>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base ">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium ">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.data.map( ( highlight ) => (
                      <li key={highlight} className="">
                        <span className="">{highlight}</span>
                      </li>
                    ) )}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium ">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm ">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <p className='container mt-20'>Producto no Disponible</p>
  )
}

export default page