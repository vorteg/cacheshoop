import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';


export async function dto_save(user_id:string,ext_references:string,signature:string,mp_order_id:string) {
  try {
    const supabase = createServerComponentClient({cookies})
    const {data, error} = await supabase.from('orderPreferences').upsert([{user_id,ext_references,signature,mp_order_id}])
    
    if(error){
      throw error
    }
    if (data){
      return data
    }
  
  } catch (error) {
     console.error('Error al guardar datos en la tabla:', error)
  }
}