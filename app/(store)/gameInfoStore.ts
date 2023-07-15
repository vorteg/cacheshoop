import { create } from 'zustand'

// Definimos el tipo de estado
interface CounterState {
  count: number;
  increment: () => void;
}

// Creamos el store Zustand
const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}));

export default useCounterStore;