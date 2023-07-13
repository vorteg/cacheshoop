export type Game = {
    id: number
    background_image: string
    rating: number
    name: string
}

export const getGames = async (): Promise<Game[]> => {
    const res = await fetch(`https://api.rawg.io/api/games?key=53f520bf819d4fb3b09fd3943522fe25`)
    if (!res.ok) {
        throw new Error("failed to fetch games")
    }
    const data = await res.json()
    return data.results
}


