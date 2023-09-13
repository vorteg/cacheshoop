import {startMercadoPago } from '@/app/api/helpers/config-ml'
import { dto_save } from '@/supabase/client_payment'
import { dto_save_wh } from '@/supabase/client_webhook'
import { dto_update_uo } from '@/supabase/client_user_order'

export const receiveWebhook = async (payment:any, id:string|null,topic:string|null) => {
  try {
    const mp = startMercadoPago()
    dto_save_wh({param_id:id,param_topic:topic,data_id:payment.data.id,type:payment.type})
    if(payment.type === 'payment'){
      const payId: number = parseInt(payment.data.id, 10)
      console.log("desde dentro de webhook")
      const data = await mp?.payment.findById(payId)
      const dto_payment_data = {
        id:payId,
        status:data?.response.status,
        email:data?.response.payer.email,
        name:data?.response.payer.name,
        external_reference:data?.response.external_reference,
        transaction_amount:data?.response.transaction_amount,
        body:data?.body
     }
     dto_save(dto_payment_data)
     dto_update_uo(data?.response.external_reference,"aproved")


    }
    return 204
    
  } catch (error) {
    if (error instanceof Error && error.message === 'Payment not found')
      return 404
    console.log(error)
    return 500
  }
}