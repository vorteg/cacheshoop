
interface Game {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function loadgame(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/games/${id}`)
  const data = await res.json()
  return data

}


async function page({ params }: any) {
  try {
    const game: Game = await loadgame(params.gameId)
    if (!game.id || !game.title || !game.userId || !game.body) {
      throw new Error('Videojuego no existente!');
    }

    return (
      <div>
        <h1>Este es el  titulo: {game.title}</h1>
        <h2>Id:{game.id}</h2>
        <h3>UserID:{game.userId}</h3>
        <p> Esta la descripcion: {game.body}</p>
      </div>
    )

  } catch (error) {
    console.log(error)
    //ToDo:Revisar como lanzar la pagina de NotFound
    return (<><h1>Error!</h1></>)
  }


}

export default page