import Image from 'next/image';
import { Game } from '@/types/game';
import Link from 'next/link';


const VideogameCarousel = ( { data }: { data: Game[] } ) => {


  return (
    <div className="w-full overflow-x-auto whitespace-nowrap">

      <div className="flex overflow-x-auto space-x-4 py-4">
        {data?.map( ( game ) => (


          <div
            className="max-w-xs transform transition-transform ease-in-out duration-300 scale-90 hover:scale-100"
            key={game.id}>
            <Link href={`/videogames/${game.id}`}>
              <p className='font-bold'>{game.name.length > 30 ? game.name.slice( 0, 30 ) + '...' : game.name}</p>

              <div className="relative aspect-square h-64  ">
                <Image
                  src={game.background_image}
                  fill
                  className="rounded-md object-cover "
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
    </div>
  );
};

export default VideogameCarousel;