import {create} from 'zustand';
import { Product } from "@/types/product";

interface FProductState {
  products: Product[];
  isLoading: boolean;
}

export const useProductStore = create<FProductState>((set) => ({
  products: [],
  isLoading: false
}));
