import { create } from 'zustand'
import axios from 'axios'
import { Game } from '@/utils/games-api'

// Definimos el tipo de estado
interface ModeState {
  games: [Game] | [];
  apiCall: any
}

// Creamos el store Zustand
const useModeStore = create<ModeState>((set) => ({
  games: [],
  apiCall: async () => {
    const res = await axios.get(`https://api.rawg.io/api/games?key=53f520bf819d4fb3b09fd3943522fe25`)
    set((state) => ({games: res.data.results}))
  }
}));

export default useModeStore;