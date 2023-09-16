import { Game } from '@/types/game';
import Link from 'next/link';


const Games = ( { games }: { games: Game[] } ) => {
  return (
    <div className="mb-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map( ( game ) => (
        <div className="bg-stone-800 border text-white border-white dark:border-gray-500 p-4 rounded-md shadow-md" key={game.id}>
          <Link href={`/videogames/${game.id}`}>
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-48 object-cover mb-2 rounded-md"
            />
            <h2 className="text-lg font-semibold mb-2">{game.name}</h2>

          </Link>

        </div>
      ) )}
    </div>
  );
};

export default Games;