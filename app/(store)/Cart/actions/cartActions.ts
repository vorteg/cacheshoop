import { useCartStore } from '../slices/cartSlice';
import { CProduct } from '../types';


export const getProductFromCart = (index:number) => {
 const {cart} = useCartStore.getState()
 return cart[index]
}

export function getNumberProducts () {
 const {cart} = useCartStore.getState()
 return cart.length
}

export const addToCart = (item: CProduct) => useCartStore.setState((state) =>({cart:[...state.cart,item]}))

export const removeFromCart =(index:number) => useCartStore.setState((state) => {
    const newCart = [...state.cart];
    newCart.splice(index, 1);
    return { cart: newCart };
  })

  export const updateProductQuantity = (index:number, newQuantity:number) => useCartStore.setState((state) => {
    const newCart = [...state.cart];
    newCart[index].quantity = newQuantity;
    return { cart: newCart };
  })