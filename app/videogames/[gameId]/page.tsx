
interface Game {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function loadgame(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  return data

}


async function page({ params }: any) {
  try {
    const game: Game = await loadgame(params.gameId)
    console.log(game)
    if (!game.id || !game.title || !game.userId || !game.body) {
      throw new Error('Videojuego no existente!');
    }

    return (
      <section className=" h-screen container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div>
          <h1>Este es el  titulo: {game.title}</h1>
          <h2>Id:{game.id}</h2>
          <h3>UserID:{game.userId}</h3>
          <p> Esta la descripcion: {game.body}</p>
        </div>
      </section>
    )

  } catch (error) {
    console.log(error)
    //ToDo:Revisar como lanzar la pagina de NotFound
    return (<>
      <section className=" h-screen container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1>Error!</h1>
      </section>

    </>)
  }


}

export default page