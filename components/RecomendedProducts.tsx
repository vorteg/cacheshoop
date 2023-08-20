'use client'

import React from 'react';
import Image from 'next/image';
import useModeStore from '@/app/(store)/gameInfoStore';
import { Game } from '@/types/game';

const RecomendedProducts = () => {
    const { games, isLoading } = useModeStore();

    if (isLoading) {
        return <p>Cargando productos recomendados...</p>;
    }

    if (games.length === 0) {
        return <p>No hay productos recomendados disponibles.</p>;
    }

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <h1 className="text-[2rem] font-semibold">Productos recomendados</h1>
            <div className="m-18 grid grid-cols-4 gap-12 rounded-md">
                {games.map((game: Game) => (
                    <div className="col-span-4 md:col-span-2 lg:col-span-1" key={game.id}>
                        <h1>{game.name}</h1>
                        <p>{game.rating}</p>
                        <div className="relative aspect-video">
                            <Image
                                src={game.background_image}
                                fill
                                className="rounded-md object-cover"
                                alt={game.name}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

                            />

                        </div>
                        {/* <img src={game.background_image} className="aspect-video w-full"></img> */}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default RecomendedProducts;