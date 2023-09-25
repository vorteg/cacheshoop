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

export const removeFromCart =(productId:string) => useCartStore.setState((state) => {
    const newCart = state.cart.filter((item) => item.id !== productId);
    return { cart: newCart };
  })

  export const updateProductQuantity = (index:string, newQuantity:number) => useCartStore.setState((state) => {
    const newCart = [...state.cart];
    const getProduct = newCart.find( ( item ) => item.id === index )
    if ( getProduct !== undefined ) {
        getProduct.quantity = newQuantity;
    }
    return { cart: newCart };
  })