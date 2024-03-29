
type Game = {
  id: number;
  name: string;
  metacritic: string;
  description: string;
  released: string;
  background_image: string;
  platforms: {
    platform: {
      name: string;
    };
  }[];
  stores: {
    store: {
      name: string;
    };
  }[];
  developers: {
    name: string;
  }[];
};


type GameCardProps = {
  game: Game;
};


const GameCard: React.FC<GameCardProps> = ( { game } ) => {
  return (
    <div className="bg-stone-800 text-white p-4 rounded-md shadow-md">
      <img
        src={game.background_image}
        alt={game.name}
        className="w-full h-auto object-cover mb-2 rounded-md"
      />
      <h2 className="text-lg font-semibold mb-2">{game.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: game.description }} />
      <div className='bg-stone-500 rounded-lg p-2 text-sm text-white'>
        <p >Released: {game.released}</p>
        <p >Metacritic: {game.metacritic}</p>
        <p >Platform: {game.platforms.map( ( platform ) => platform.platform.name ).join( ', ' )}</p>
        <p >Store: {game.stores.map( ( store ) => store.store.name ).join( ',' )}</p>
        <p >Developer: {game.developers.map( ( dev ) => dev.name ).join( ', ' )}</p>
      </div>

    </div>
  );
};

export default GameCard;