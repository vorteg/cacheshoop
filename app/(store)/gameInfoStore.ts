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
  games: [],
  isLoading: false,
  apiCall: async () => {
    try {
      set({ isLoading: true });

      const res = await getGames();

      set((state) => {
        if (state.games.length === 0) {
          return { games: res };
        }
        return state;
      });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useModeStore;