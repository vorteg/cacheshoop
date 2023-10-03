import {startMercadoPago } from '@/app/api/helpers/config-ml'
import { dto_save } from '@/supabase/client_payment'
import { dto_save_wh } from '@/supabase/client_webhook'
import { dto_update_uo } from "@/supabase/client_user_order";
import { dto_read_preferences_by_ref } from '@/supabase/client_preferences';
import axios from 'axios';
import { siteConfig } from '@/config/site';

async function sendEmail(body:any) {
  try {    
    await axios.post(`${siteConfig.mainUrl}/api/email`, body)    
  } catch (error) {
    console.log(error)
  }
}

export const receiveWebhook = async (payment:any, id:string,topic:string) => {
  
  try {
    const mp = startMercadoPago()    
    await dto_save_wh({param_id:id,param_topic:topic,data_id:payment['data.id'],type:payment.type})
    if(payment.type === 'payment'){
      const payId: number = parseInt(payment['data.id'], 10)      
      const data = await mp?.payment.findById(payId)
      const order = await dto_read_preferences_by_ref(data?.response.external_reference)
      

      const dto_payment_data = {
        id:payId,
        status:data?.response.status,
        email:data?.response.payer.email,
        name:data?.response.payer.first_name,
        external_reference:data?.response.external_reference,
        transaction_amount:data?.response.transaction_amount,
        body:data?.body,
        user_id:order.user_id
      }
      const dto_email = {
         email:data?.response.payer.email,
         type:"payment",
         firstName:data?.response.payer.first_name,
         data:{
              orden: data?.response.external_reference,
              total: data?.response.external_reference,
              products: data?.body?.additional_info.items?.map((item:any)=>({
                id:item.id,
                name:item.title,
                stock_quantity:item.quantity,
                price:item.unit_price
              })), 
              address:data?.body.additional_info.payer.address.street_name
              }

         }
      
     await sendEmail(dto_email)
     await dto_save(dto_payment_data)
     await dto_update_uo(data?.response.external_reference,"aproved")


    }
    return 204
    
  } catch (error) {
    if (error instanceof Error && error.message === 'Payment not found')
      return 404
    console.log(error)
    return 500
  }
}