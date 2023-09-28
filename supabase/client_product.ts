import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { Product } from "@/types/product";

interface Filters {
  name:string
  condition:boolean
  category:string
  order:string
  min_price:number
  max_price:number
  page:1
}

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


export  async function dtofiltersSearch(filters:Filters) {
  const pageSize = 10
  const from = (filters.page - 1) * pageSize; // Calcular el valor "from" basado en la página actual
  const to = from + pageSize - 1;
  try {
    const supabase = createServerComponentClient({cookies})
    const order = filters.order == 'true' ? true :false
    const query = supabase.from('products').select('*')
    
    if(filters.name){
      query.ilike('name',`%${filters.name}%`)
    }
    if(filters.condition){
      query.eq('condition', filters.condition)
    }
    if(filters.category){
      query.eq('category', filters.category)
    }
    if(filters.order){
      query.order('price', { ascending: order })
    }
    if(filters.min_price){
      query.gte('price', filters.min_price)
    }
    if(filters.max_price){
      query.lte('price', filters.max_price)

    }
    query.limit(pageSize).range(from, to);

    const { data: products, error } = await query;

    if(products){
      return products;

    }
    return []  

    } 
     catch (error) {
      console.log(error)
      return []
    }
}