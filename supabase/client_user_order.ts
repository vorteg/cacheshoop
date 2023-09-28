import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

type UserOrder = {}


export async function dto_save_uo(userOrder:UserOrder) {
  try {
    const supabase = createServerComponentClient({cookies})
    const{data:session} = await supabase.auth.getSession()
    const {data, error} = await supabase.from('userOrder').upsert([{...userOrder,user_id:session?.session?.user.id}])
    
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

export async function dto_update_uo(reference_id:string|null,status:string) {
  try {
    const supabase = createServerComponentClient({cookies})
    const {data, error} = await supabase.from('userOrder').update({status}).eq('reference_id',reference_id) 
    
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


export async function dto_read_uo() {
  try {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase
      .from('userOrder')
      .select('*') // Puedes seleccionar las columnas que necesites
      .order('id', { ascending: false }) // Cambia 'tu_columna_de_orden' por la columna que uses para ordenar
      .limit(1);

    if (error) {
      throw error;
    }
    
    if (data) {
      return data[0]; // Devuelve el primer (y único) resultado, que es el último registro
    }
  } catch (error) {
    console.error('Error al obtener el último registro en la tabla:', error);
  }
}


export async function dto_read_uo_by_id(id:string) {
  try {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase
      .from('userOrder')
      .select('*') // Puedes seleccionar las columnas que necesites
      .eq('id',id)
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


export async function dto_read_uo_by_ref(id:string) {
  try {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase
      .from('userOrder')
      .select('*') // Puedes seleccionar las columnas que necesites
      .eq('reference_id',id)
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





export async function dto_read_orders({date,reference}:{date?:string,reference?:string}) {
  try {
    const supabase = createServerComponentClient({ cookies });
    
    if (reference){
      let { data, error } = await supabase.from('userOrder').select('*').eq('reference_id',reference)
      if (error) {
        throw error;
      }
      return data
    }
    if (date){
      let { data, error }= await supabase.from('userOrder').select('*').gte('created_at',date)
      if (error) {
        throw error;
      }
      return data
    }

    let { data, error } = await supabase.from('userOrder').select('*')
    if (error) {
        throw error;
      }
    
    return data
    
  } catch (error) {
    console.error('Error al obtener el último registro en la tabla:', error);
  }
}

export async function dto_read_purchases() {
  try {
    const supabase = createServerComponentClient({ cookies });
    const { data, error } = await supabase
      .from('payment')
      .select('*') // Puedes seleccionar las columnas que necesites
      .order('id', { ascending: false }) // Cambia 'tu_columna_de_orden' por la columna que uses para ordenar
      .limit(5);

    if (error) {
      throw error;
    }
    
    if (data) {
      return data; // Devuelve el primer (y único) resultado, que es el último registro
    }
  } catch (error) {
    console.error('Error al obtener el último registro en la tabla:', error);
  }
}