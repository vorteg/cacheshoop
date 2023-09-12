import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';



export default async function dto(id:string){
   
 try {
    const supabase = createServerComponentClient({cookies})
    // Ejemplo para traer joins
    // const {data:response} = await supabase.from("products").select('*,users(*)');
    // return JSON.stringify(response, null, 2)  ejemplo para probar conexion

    const {data:response} = await supabase.from("users").select('*').eq('id',id).single();

    if (response !== null) {
      
        return response;
      }

    

 
}catch(error){
 console.log(error)
 return ''
}

}
