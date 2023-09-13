'use client'
import { useState } from 'react';
import axios from 'axios';
import Games from '@/components/Games';


function page() {
    const [ games, setGames ] = useState( [] );
    const [ page, setPage ] = useState( 1 );
    const [ searchTerm, setSearchTerm ] = useState( '' );

    const fetchGames = async () => {
        try {
            const response = await axios.get( `/api/games?page=${page}&searchTerm=${searchTerm}` );
            setGames( response.data.results );
        } catch ( error ) {
            console.error( error );
        }
    };

    const handleSearch = async () => {
        setPage( 1 );
        await fetchGames();
    };

    const handleNext = async () => {
        setPage( page + 1 );
        await fetchGames();
        window.scrollTo( {
            top: 0,
            behavior: "smooth" // Esto proporciona un desplazamiento suave
        } );
    }


    return (
        <>
            <section className="grid items-center gap-6 pb-8 pt-6 md:py-10">

                <h1 className="text-2xl font-semibold ">VideoGames</h1>
                <input
                    type="text"
                    placeholder="Search for games"
                    value={searchTerm}
                    onChange={( e ) => setSearchTerm( e.target.value )}
                    className="border p-2 rounded-md "
                />
                <button onClick={handleSearch}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >Search</button>
                <Games games={games} />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={handleNext}>Next Page</button>

            </section>
        </>
    )



}

export default page