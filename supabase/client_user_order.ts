import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

type UserOrder = {}

export async function dto_save_uo(userOrder:UserOrder) {
  try {
    const supabase = createServerComponentClient({ cookies });
    
    console.log(cookies())

    let { data, error } = await supabase.from('userOrder').select('*')
    if (error) {
        throw error;
      }
    
    return data
    
  } catch (error) {
    console.error('Error al obtener el último registro en la tabla:', error);
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


export async function dto_read_uo(id:string) {
  try {

    const supabase = createServerComponentClient({cookies})    
    const { data, error } = await supabase.from('userOrder').select('*')
    console.log(error)
    console.log(data)
    return data

  } catch (error) {
    console.error('Error al obtener el último registro en la tabla:', error);
    return error
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

interface Filters {
  reference?:string
  date?:string
  page:1
}



export async function dto_read_orders(filters:Filters) {
  const pageSize = 10
  const from = (filters.page - 1) * pageSize; // Calcular el valor "from" basado en la página actual
  const to = from + pageSize - 1;
  try {
    const supabase = createServerComponentClient({ cookies });
    const query = supabase.from('userOrder').select('*')
    if(filters.reference){
      query.ilike('reference_id',`%${filters.reference}%`)
    }
    if(filters.date){
      query.gt('created_at',filters.date)
    }
    query.order('created_at',{ascending:true}).limit(pageSize).range(from, to);

    const { data: orders, error } = await query;
    
    return orders
    
  } catch (error) {
    console.error('Error al obtener el último registro en la tabla:', error);
  }
}

export async function dto_read_purchases() {
  try {
    
    const supabase = createServerComponentClient({ cookies });
    const { data: { session } } = await supabase.auth.getSession()    
    const { data, error } = await supabase
      .from('payment')
      .select('*')
      .eq('user_id',session?.user.id)
      .order('id', { ascending: false }) 
      .limit(5);

    if (error) {
      throw error;
    }
    
    if (data) {
      return data; // Devuelve el primer (y único) resultado, que es el último registro
    }
  } catch (error) {
    console.error('Error al obtener el último registro en la tabla:', error);
    return error
  }
}