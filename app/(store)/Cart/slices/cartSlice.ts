import {create} from 'zustand';

interface CartProdState {
  cart: CProduct[];
}

export const useCartStore = create<CartProdState>((set) => ({
  cart: [{
  id:0,
  name:"test",
  url:"",
  quantity:1,
  price:5.5
},{
  id:1,
  name:"otro",
  url:"",
  quantity:1,
  price:2.73
}]
  // addToCart: (item: CProduct) => set((state) =>({cart:[...state.cart,item]})),
  // removeFromCart:(index:number) => set((state) => {
  //   const newCart = [...state.cart];
  //   newCart.splice(index, 1);
  //   return { cart: newCart };
  // }),
  // updateProductQuantity: (index:number, newQuantity:number) => set((state) => {
  //   const newCart = [...state.cart];
  //   newCart[index].quantity = newQuantity;
  //   return { cart: newCart };
  // }),
}));
