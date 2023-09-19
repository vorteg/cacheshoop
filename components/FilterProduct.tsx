import { Button, Icons } from './ui'


function FilterProduct() {
  return (
    <section className='text-black pt-8 p-4 rounded-md flex flex-col'>
      <p className='text-2xl font-bold mb-4'>Personaliza Búsqueda</p>

      <div className="mt-3 space-y-2">
        <div className="flex items-center space-x-2">
          <Button ><Icons.search /></Button>
          <input type="text" id="nombreProducto" className="dark:text-white w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <label htmlFor="estado" className="text-sm">Condición:</label>
        <div className="flex items-center space-x-2">
          <label className="text-sm">Usado</label>
          <input type="radio" id="usado" name="estado" value="usado" className="w-4 h-4 text-blue-500" />
          <label className="text-sm">Nuevo</label>
          <input type="radio" id="nuevo" name="estado" value="nuevo" className="w-4 h-4 text-blue-500" />
        </div>
        <div className='mt-8'>
          <label htmlFor="categorias" className="text-sm">Categorías:</label>
          <select id="categorias" className="dark:text-white w-full p-2 border border-gray-300 rounded-md">
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
        <select id="ordenar" className="dark:text-white w-full p-2 border border-gray-300 rounded-md">
          <option value="null">Seleccionar</option>
          <option value="precioAsc">Precio (menor a mayor)</option>
          <option value="precioDesc">Precio (mayor a menor)</option>
          <option value="recientes">Productos Recientes</option>
        </select>
        <div className="flex items-center space-x-2">
          <label htmlFor="precioMin" className="text-sm">Rango de Precio:</label>
          <input type="number" id="precioMin" placeholder="Mínimo" className="w-1/2 p-2 border border-gray-300 rounded-md" />
          <input type="number" id="precioMax" placeholder="Máximo" className="w-1/2 p-2 border border-gray-300 rounded-md" />
        </div>
      </div>
      <Button className='mt-5 bg-black text-white hover:bg-black/75'>Limpiar filtros</Button>
    </section>
  )
}

export default FilterProduct