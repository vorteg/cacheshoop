import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

type PaymentDTO = {}


export async function dto_save(payment:PaymentDTO) {
  try {
    const supabase = createServerComponentClient({cookies})
    const {data, error} = await supabase.from('payment').upsert([payment])
    
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