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



export async function dto_read_preferences_by_ref(id:string) {
  try {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase
      .from('orderPreferences')
      .select('*') // Puedes seleccionar las columnas que necesites
      .eq('ext_references',id)
      .single()

    if (error) {
      throw error;
    }
    
    if (data) {
      return data; // Devuelve el primer (y único) resultado, que es el último registro
    }
    throw error;
  } catch (error) {
    console.error('Error al obtener el último registro en la tabla:', error);
  }
}