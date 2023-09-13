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