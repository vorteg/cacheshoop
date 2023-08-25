import { create } from 'zustand'
import { Product } from '@/types/product';
import dto from '@/supabase/client_product';

// Definimos el tipo de estado
interface ProductsState {
  products: Product[];
  isLoading: boolean;
  apiCall:  () => Promise<void>; 
}

// Creamos el store Zustand
const useProductsStore = create<ProductsState>((set) => ({
  products: [],
  isLoading: false,
  apiCall: async () => {
    try {
      set({ isLoading: true });

      const res = await dto();
       console.log("desde zustand")
      set((state) => {
        if (state.products.length === 0) {
          // console.log(res)
          return { products: res };
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

export default useProductsStore;