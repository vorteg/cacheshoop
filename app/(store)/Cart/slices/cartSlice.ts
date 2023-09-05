import {create} from 'zustand';
import { CProduct } from '../types';

interface CartProdState {
  cart: CProduct[];
}

export const useCartStore = create<CartProdState>((set) => ({
  cart: []
}));
