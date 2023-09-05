import {create} from 'zustand';

interface CartProdState {
  cart: CProduct[];
}

export const useCartStore = create<CartProdState>((set) => ({
  cart: []
}));
