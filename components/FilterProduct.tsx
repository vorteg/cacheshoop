

function FilterProduct() {
  return (
    <section className='p-4 rounded-md flex flex-col'>
      <p className='text-xl font-semibold mb-4'>Personaliza Busqueda</p>
      <div className="space-y-2">
        <select className="w-full p-2 border border-gray-300 rounded-md">
          <option value="filtro1">Filtro 1</option>
          <option value="filtro2">Filtro 2</option>
        </select>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="filtro3" className="text-blue-500" />
          <label htmlFor="filtro3" className="text-sm">Filtro 3</label>
        </div>
        {/* Agrega más filtros */}
      </div>
    </section>
  )
}

export default FilterProduct