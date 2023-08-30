
import React from 'react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';
import { Game } from '@/types/game';
import Link from 'next/link';
import { readGamesAction, readLoadingGameAction } from '@/app/(store)/storeGames/actions/gameActions';



const RecomendedProducts = async () => {
    const data = await readGamesAction()
    const isLoading = await readLoadingGameAction()

    if ( isLoading ) {
      return(
        <>
            <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
                <Skeleton className='w-[30rem] h-[2rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
                <div className='flex justify-center gap-4'>
                    <Skeleton className='w-[20rem] h-[8rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
                    <Skeleton className='w-[20rem] h-[8rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
                    <Skeleton className='w-[20rem] h-[8rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>
                    <Skeleton className='w-[20rem] h-[8rem] bg-gray-300 dark:bg-blue-900 rounded-md'/>   
                </div>
            </section>
        </>
      );
    }
  
    if ( data.length === 0 ) {
      return <p>No hay datos disponibles.</p>;
    }

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <h1 className="text-[2rem] font-semibold">Productos recomendados</h1>
            <div className="m-18 grid grid-cols-4 gap-12 rounded-md">
                {data?.slice( 0, 4 ).map( ( game: Game ) => (


                    <div className="col-span-4 md:col-span-2 lg:col-span-1" key={game.id}>
                        <Link key={game.id} href={`/videogames/${1}`} >
                            <h1>{game.title}</h1>
                            <p>{game.id}</p>
                            <div className="relative aspect-video">
                                <Image
                                    src={game.url}
                                    fill
                                    className="rounded-md object-cover"
                                    alt={game.title}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

                                />

                            </div>
                        </Link>

                    </div>



                ) )}
            </div>
        </section>
    );
};

export default RecomendedProducts;