import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

type PaymentStatus = {
  collection_id?:string |null
  collection_status?:string |null
  payment_id?:string |null
  status?:string |null
  external_reference?:string |null
  payment_type?:string |null
  merchant_order_id?:string |null
  preference_id?:string|null
  site_id?:string |null
  processing_mode?:string |null
  merchant_account_id?:string |null
}

export async function dto_save(status:PaymentStatus) {
  try {
    const supabase = createServerComponentClient({cookies})
    const {data, error} = await supabase.from('paymentStatus').upsert([status])
    
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