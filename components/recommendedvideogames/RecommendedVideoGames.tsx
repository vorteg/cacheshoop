
import Image from 'next/image';
import { Game } from '@/types/game';
import Link from 'next/link';
import { readGamesAction, readLoadingGameAction } from '@/app/(store)/storeGames/actions/gameActions';
import Loading from './Loading';




const RecomendedVideogames = async () => {
  const data = await readGamesAction()
  const isLoading = await readLoadingGameAction()

  if ( isLoading ) {
    return <Loading />;
  }

  if ( data.length === 0 ) {
    return <p>No hay datos disponibles.</p>;
  }

  return (
    <section className="container grid items-center gap-6 md:pb-8 pt-6 md:py-10">
      <h1 className="text-[2rem] text-center md:font-semibold">Videogames recomendados</h1>
      <div className="px-5 md:px-0 md:m-18 grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-12 rounded-md">
        {data?.slice( 0, 4 ).map( ( game: Game ) => (


          <div className="md:col-span-2 lg:col-span-1" key={game.id}>
            <Link key={game.id} href={`/videogames/${game.id}`} >
              <p className='font-bold'>{game.name}</p>

              <div className="relative aspect-square ">
                <Image
                  src={game.background_image}
                  fill
                  className="rounded-md object-cover"
                  alt={game.name}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"

                />

              </div>
              <div className='flex justify-end gap-1'>


                <p className='font-serif text-right'>Metacritic:</p>
                <p className='font-semibold'>{game.metacritic}/100</p>
              </div>

            </Link>

          </div>



        ) )}
      </div>
    </section>
  );
};

export default RecomendedVideogames;