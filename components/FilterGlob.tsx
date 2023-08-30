'use client'
import { useState } from 'react';
import FilterProduct from './FilterProduct';



function FilterGlob() {
  const [ isFiltersOpen, setIsFiltersOpen ] = useState( false );

  const toggleFilters = () => {
    setIsFiltersOpen( !isFiltersOpen );
  };

  return (
    <section className='md:hidden '>
      <button
        className={` md:hidden block 
        bg-blue-500 text-white rounded-lg fixed left-1  z-10`}

        onClick={toggleFilters}
      >
        {`${isFiltersOpen ? 'Filter' : 'Open'}`}
      </button>

      <section
        className={`${isFiltersOpen ? 'hidden' : 'fixed w-full mx-auto'
          } h-full  bg-gray-100/75 rounded-md md:hidden`}
      >

        <FilterProduct />
      </section>

      {/* Resto del contenido de la página */}
    </section>
  )
}

export default FilterGlob