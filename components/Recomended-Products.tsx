import Image from 'next/image'


type Game = {
    id: number
    background_image: string
    rating: number
    name: string
}

const getGames = async (): Promise<Game[]> => {
    const res = await fetch(`https://api.rawg.io/api/games?key=53f520bf819d4fb3b09fd3943522fe25`)
    if (!res.ok) {
        throw new Error("failed to fetch games")
    }
    const data = await res.json()
    return data.results
}

const RecomendedProducts = async () => {

    const games = await getGames()
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