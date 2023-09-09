import {startMercadoPago } from '@/app/api/helpers/config-ml'
import { CProduct } from "@/app/(store)/Cart/types";


export async function createOrder(cart:CProduct[]){

  const mercadopago = startMercadoPago()

  const result = await mercadopago?.preferences.create({
    items:cart,
    notification_url:`${process.env.URL_CALLBACK2}/api/payment/mp/webhook`,
    back_urls:{
      success: `${process.env.URL_CALLBACK2}/api/payment/mp/success`,
      failure:`${process.env.URL_CALLBACK2}/api/payment/mp/failure`,
      pending:`${process.env.URL_CALLBACK2}/api/payment/mp/pending`
    },
  })
  // console.log(result)
 if (result?.body.id){
     return result.body.id
 }else{
  return "no se pudo"
 }
 
}