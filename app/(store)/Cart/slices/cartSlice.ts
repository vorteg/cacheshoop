import {create} from 'zustand';
import { CProduct } from '../types';

interface CartProdState {
  cart: CProduct[];
  cart_save:CProduct[],
  total:number,
  shipping:number,
}

export const useCartStore = create<CartProdState>((set) => ({
  cart: [],
  cart_save:[],
  total:0,
  shipping:0
}));
