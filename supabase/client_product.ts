import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { Product } from "@/types/product";



export async function dto(){
   
 try {
    const supabase = createServerComponentClient({cookies})
    // Ejemplo para traer joins
    // const {data:response} = await supabase.from("products").select('*,users(*)');
    // return JSON.stringify(response, null, 2)  ejemplo para probar conexion

    const { data: products, error } = await supabase
    .from('products')
    .select('*');   
      

      return <Product[]>products;
    } 
     catch (error) {
      console.log(error)
      return []
    }
 
}

export  async function dtoByID(id:number) {
  try {
    const supabase = createServerComponentClient({cookies})
    // Ejemplo para traer joins
    // const {data:response} = await supabase.from("products").select('*,users(*)');
    // return JSON.stringify(response, null, 2)  ejemplo para probar conexion

    const { data: product, error } = await supabase
    .from('products')
    .select('*')
    .eq('id',id)
    .single();   
      

      return <Product>product;
    } 
     catch (error) {
      console.log(error)
      return []
    }
}