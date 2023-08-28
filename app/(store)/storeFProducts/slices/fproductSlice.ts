import {create} from 'zustand';
import { FProduct } from "@/types/fproduct";

interface FProductState {
  fproducts: FProduct[];
  isLoading: boolean;
}

export const useFproductStore = create<FProductState>((set) => ({
  fproducts: [],
  isLoading: false,
  setLoading: (isLoading: boolean) => set({ isLoading }),
  setGames: (fproducts: FProduct[]) => set({ fproducts }),
}));
