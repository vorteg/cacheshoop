'use client'
import { useState } from 'react';
import FilterProduct from './FilterProduct';



function FilterGlob() {
  const [ isFiltersOpen, setIsFiltersOpen ] = useState( true );

  const toggleFilters = () => {
    setIsFiltersOpen( !isFiltersOpen );
  };

  return (
    <section className='md:hidden '>
      <button
        className={` md:hidden block 
        bg-blue-950 text-white rounded-lg fixed top-10 right-2  z-50`}

        onClick={toggleFilters}
      >
        {`${isFiltersOpen ? 'Filter' : 'Open'}`}
      </button>

      <section
        className={`${isFiltersOpen ? 'hidden' : 'fixed w-full mx-auto'
          } h-full  bg-gray-100/75 rounded-md md:hidden z-40`}
      >

        <FilterProduct />
      </section>

      {/* Resto del contenido de la página */}
    </section>
  )
}

export default FilterGlob