import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import { Product } from "../types/product";



export default async function dto(){
   
 try {
    const supabase = createServerComponentClient({cookies})
    // Ejemplo para traer joins
    // const {data:response} = await supabase.from("products").select('*,users(*)');
    // return JSON.stringify(response, null, 2)  ejemplo para probar conexion

    const {data:response} = await supabase.from("products").select();

    if (response !== null) {
      const products: Product[] = response.map((item: Product) => {
        const product: Product = {
          id: item.id,
          name: item.name,
          category: item.category,
          description: item.description,
          price: item.price,
          stock_quantity: item.stock_quantity,
          created_at: item.created_at,
          updated_at: item.updated_at,
          is_active: item.is_active,
          url_img: item.url_img
        };
        return product;
      });

      return products;
    } 
    } catch (error) {
      console.log(error)
      return []
    }
 
}