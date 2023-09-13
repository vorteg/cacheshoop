import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

type Webhook = {}


export async function dto_save_wh(webhook:Webhook) {
  try {
    const supabase = createServerComponentClient({cookies})
    const {data, error} = await supabase.from('webhook').upsert([webhook])
    
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