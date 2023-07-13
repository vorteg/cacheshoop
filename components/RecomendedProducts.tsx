'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { getGames, Game } from '@/utils/games-api'

const RecomendedProducts = () => {
    const [games, setGames] = useState<Game[]>([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const gamesData = await getGames(); // Llama a la función getGames para obtener los juegos
                setGames(gamesData); // Almacena los juegos en el estado
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);
    return (
        <>
            <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <h1 className="text-[2rem] font-semibold">Productos recomendados</h1>
                <div className="m-18 grid grid-cols-4 gap-12 rounded-md">
                    {games.map((game) => (
                        <div className="col-span-4 md:col-span-2 lg:col-span-1" key={game.id}>
                            <h1>{game.name}</h1>
                            <p>{game.rating}</p>
                            <div className="relative aspect-video">
                                <Image
                                    src={game.background_image}
                                    fill
                                    className="rounded-md object-cover"
                                    alt={game.name} />
                            </div>
                            {/* <img src={game.background_image} className="aspect-video w-full"></img> */}

                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default RecomendedProducts