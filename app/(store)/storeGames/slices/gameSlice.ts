import {create} from 'zustand';
import { Game } from '../types/IGames';

interface GameState {
  games: Game[];
  isLoading: boolean;
}

export const useGameStore = create<GameState>((set) => ({
  games: [],
  isLoading: false,
}));
