'use client'
import { useState } from 'react';
import FilterProduct from './FilterProduct';
import { Button } from './ui';



function FilterGlob() {
  const [ isFiltersOpen, setIsFiltersOpen ] = useState( true );

  const toggleFilters = () => {
    setIsFiltersOpen( !isFiltersOpen );
  };

  return (
    <section className='md:hidden '>
      <Button
        className={`md:hidden block 
         fixed top-5 right-2  z-50`}

        onClick={toggleFilters}
      >
        {`${isFiltersOpen ? 'Filtrar' : 'X'}`}
      </Button>

      <section
        className={`${isFiltersOpen ? 'hidden' : 'fixed w-full mx-auto'
          } h-full top-0 bg-gray-100/90 rounded-md md:hidden z-40`}
      >

        <FilterProduct />
      </section>

      {/* Resto del contenido de la página */}
    </section>
  )
}

export default FilterGlob