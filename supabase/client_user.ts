import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

interface User  {
    id:string
    name: string
    email: string
    phone: string
    address: string
  }

export async function dto_read_user(id:string | null){
   
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


export async function dto_update_user(user:User) {
  try {
    const supabase = createServerComponentClient({cookies})
    const {data, error} = await supabase.from('users').update({
    
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address
  }).eq('id',user.id) 
    
    if(error){
      throw error
    }
    if (data){
      return data
    }
  
  } catch (error) {
     console.error('Error al actualizar datos en la tabla:', error)
  }
}