'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Games from '@/components/Games';
import { buttonVariants } from '@/components/ui';
import { useGameStore } from '../(store)/storeGames/slices/gameSlice';
import { readGamesAction } from '../(store)/storeGames/actions/gameActions';


function page() {
    const [ gs, setGs ] = useState( [] );

    useEffect( () => {

        fetchGames()
    }, [ gs ] )
    const [ page, setPage ] = useState( 1 );
    const [ searchTerm, setSearchTerm ] = useState( '' );

    const fetchGames = async () => {
        try {
            const response = await axios.get( `/api/games?page=${page}&searchTerm=${searchTerm}` );
            setGs( response.data.results );
        } catch ( error ) {
            console.error( error );
        }
    };

    const handleSearch = async () => {
        setPage( 1 );
        await fetchGames();
    };

    const handleNext = async () => {
        window.scrollTo( {
            top: 0,
            behavior: "smooth"
        } );

        setPage( prevPage => {
            const nextPage = prevPage + 1;
            console.log( nextPage ); // Esto mostrará el valor actualizado de page
            return nextPage;
        } );
        await fetchGames();

    };


    return (
        <>
            <section className="container mx-auto mt-16 p-6 md:p-10">
                <div className="bg-stone-500 shadow-md rounded-lg p-6 md:p-8">
                    <h1 className="text-2xl font-semibold mb-4">VideoGames</h1>
                    <div className="flex flex-col md:flex-row md:space-x-4 items-center mb-4">
                        <p className='text-white'>
                            Busca informacion sobre el videojuego que deseas.
                        </p>
                        <input
                            type="text"
                            placeholder="Ejemplo: Crash Bandicot"
                            value={searchTerm}
                            onChange={( e ) => setSearchTerm( e.target.value )}
                            className="m-2 border p-2 rounded-md w-full md:w-1/2"
                        />
                        <button
                            onClick={handleSearch}
                            className={buttonVariants( {
                                size: "sm",
                                variant: "default",
                            } )}
                        >
                            Buscar
                        </button>
                    </div>
                    <Games games={gs} />
                    <button
                        className={buttonVariants( {
                            size: "sm",
                            variant: "default",
                        } )}
                        onClick={handleNext}
                    >
                        Siguiente Pagina
                    </button>
                </div>
            </section>
        </>
    )



}

export default page