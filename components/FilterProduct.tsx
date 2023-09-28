'use client'
import axios from 'axios';
import { Button, Icons } from './ui'
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { filterProductsAction } from '@/app/(store)/storeProducts/actions/productAction';
import { useRouter } from 'next/navigation';


function FilterProduct() {
  const router = useRouter()
  const [ page, setPage ] = useState( 1 )
  const url = `${siteConfig.mainUrl}/api/products/filters`

  const [ filters, setFilters ] = useState( {
    name: "",
    condition: "",
    category: "",
    order: "",
    min_price: "",
    max_price: "",
  }
  )

  const handleSubmit = async () => {
    const response = await axios.post( url, { ...filters, page } )

    if ( response.data < 12 ) {
      setPage( 1 )
    }
    await filterProductsAction( response.data.data )
  }
  const incrementPage = async () => {
    setPage( page + 1 )
    await handleSubmit()
  }

  const clean = async () => {
    console.log( "desde clean" )
    setFilters( {
      name: "",
      condition: "true",
      category: "null",
      order: "null",
      min_price: "",
      max_price: "",
    } )
    await handleSubmit()
  }
  return (
    <section className='text-black pt-8 p-4 rounded-md flex flex-col'>
      <p className='text-2xl font-bold mb-4'>Personaliza Búsqueda</p>

      <div className="mt-3 space-y-2">
        <div className="flex items-center space-x-2">
          <Button ><Icons.search /></Button>
          <input
            onChange={( e ) => setFilters( { ...filters, name: e.target.value } )}
            type="text" id="nombreProducto" className="dark:text-white w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <label htmlFor="estado" className="text-sm">Condición:</label>
        <div className="flex items-center space-x-2">
          <label className="text-sm">Usado</label>
          <input
            onChange={( e ) => setFilters( { ...filters, condition: e.target.value } )}
            type="radio" id="usado" name="estado" value="false" className="w-4 h-4 text-blue-500" />
          <label className="text-sm">Nuevo</label>
          <input
            onChange={( e ) => setFilters( { ...filters, condition: e.target.value } )}
            type="radio" id="nuevo" name="estado" value="true" className="w-4 h-4 text-blue-500" />
        </div>
        <div className='mt-8'>
          <label htmlFor="categorias" className="text-sm">Categorías:</label>
          <select id="categorias"
            className="dark:text-white w-full p-2 border border-gray-300 rounded-md"
            onChange={( e ) => setFilters( { ...filters, category: e.target.value } )}
          >
            <option value="null">Seleccionar</option>
            <option value="videojuegos">Videojuegos</option>
            <option value="adornos">Adornos</option>
            <option value="geeks">Geeks</option>
            <option value="desestres">Desestres</option>
            <option value="ropa">Ropa</option>
            <option value="electronica">Electrónica</option>
            <option value="automoviles">Automóviles</option>
          </select>
        </div>


        <label htmlFor="ordenar" className="text-sm">Ordenar por:</label>
        <select
          onChange={( e ) => setFilters( { ...filters, order: e.target.value } )}
          id="ordenar" className="dark:text-white w-full p-2 border border-gray-300 rounded-md">
          <option value="null">Seleccionar</option>
          <option value="false">Precio (menor a mayor)</option>
          <option value="true">Precio (mayor a menor)</option>
          {/* <option value="recientes">Productos Recientes</option> */}
        </select>
        <div className="flex items-center space-x-2">
          <label htmlFor="precioMin" className="text-sm">Rango de Precio:</label>
          <input
            onChange={( e ) => setFilters( { ...filters, min_price: e.target.value } )}
            type="number" id="precioMin" placeholder="Mínimo" className="w-1/2 p-2 border border-gray-300 rounded-md" />
          <input
            onChange={( e ) => setFilters( { ...filters, max_price: e.target.value } )}
            type="number" id="precioMax" placeholder="Máximo" className="w-1/2 p-2 border border-gray-300 rounded-md" />
        </div>
      </div>
      <div className='flex gap-2'>
        <Button
          onClick={clean}
          className='mt-5 bg-black text-white hover:bg-black/75'>Limpiar filtros</Button>
        <Button
          onClick={handleSubmit}
          className='mt-5 bg-blue-500 text-white hover:bg-black/75'>Aplicar</Button>
      </div>
      <Button
        className='mt-5 bg-black text-white hover:bg-black/75'
        onClick={incrementPage}
      >Siguiente Pagina</Button>
    </section>
  )
}

export default FilterProduct