import {create} from 'zustand';

interface UserState {
  address: string
}

export const useUserStore = create<UserState>((set) => ({
  address:""
}));
