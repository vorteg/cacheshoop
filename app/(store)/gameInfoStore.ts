import { create } from 'zustand'
import { getGames } from '@/utils/games-api'
import { Game } from '@/types/game';

// Definimos el tipo de estado
interface ModeState {
  games: Game[];
  isLoading: boolean;
  apiCall:  () => Promise<void>; 
}

// Creamos el store Zustand
const useModeStore = create<ModeState>((set) => ({
  games:[],
  isLoading:false,
  apiCall: async () => {
    try {
      set({ isLoading: true }); // Marcamos isLoading como true al comenzar la llamada

      const res = await getGames();
      
      set((state) => ({ games: res }));
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false }); // Marcamos isLoading como false al finalizar la llamada
    }
  },
}));

export default useModeStore;