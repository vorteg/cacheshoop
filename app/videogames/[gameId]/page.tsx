import GameCard from '@/components/GameCard';
import axios from 'axios';




// Función para cargar el juego
async function loadGame( id: number ) {
  const response = await axios.get( `${process.env.URL_CALLBACK}/api/game?id=${id}` );
  return response.data;
}

async function page( { params }: any ) {
  try {
    const game = await loadGame( params.gameId )


    return (
      <section className="grid items-center gap-6 pb-8 pt-6 md:py-14">
        <div>
          <h1 className="text-2xl font-semibold mb-4">{game.name}</h1>
          <GameCard game={game} />
        </div>
      </section>
    )

  } catch ( error ) {
    console.log( error )
    //ToDo:Revisar como lanzar la pagina de NotFound
    return ( <>
      <section className=" h-screen container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1>Error!</h1>
      </section>

    </> )
  }


}

export default page