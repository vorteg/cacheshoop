import {startMercadoPago } from '@/app/api/helpers/config-ml'
import { CProduct } from "@/app/(store)/Cart/types";
import * as crypto from 'crypto';
import dto from "@/supabase/client_user"
import { User } from './types';
import { dto_save } from "@/supabase/client_preferences"
import { DateTime } from 'luxon';

import { dto_save_uo } from '@/supabase/client_user_order';

function createExternalReference(){
 
  const referenceNumber = Date.now() + Math.floor(Math.random() * 1000);
  const external_reference = `CSHOOP_${referenceNumber}`
  let signature = ''

  // Crea la firma digital
  if( process.env.SECRET_KEY_REF_BUY_ORDER){
    const secretKey = process.env.SECRET_KEY_REF_BUY_ORDER 
    const hmac = crypto.createHmac('sha256', secretKey);
    signature = hmac.update(external_reference).digest('hex');
    // Retorna el external_reference junto con la firma
  }
  return {external_reference, signature };

}

async function getUser(id:string){
  const user:User = await dto( id )
  return user

}

async function saveOrder(user_id:string,order_ref:string,sign:string, preferenceId:string) {
  console.log(user_id,order_ref, sign, preferenceId)
}


export async function createOrder(cart:CProduct[],user_id:string){
  const { external_reference, signature } = createExternalReference();

  
  // Crear una fecha inicial con la zona horaria de México
  const startDate = DateTime.now().setZone('America/Mexico_City');

  // Sumar un día a la fecha inicial
  const endDate = startDate.plus({days:5})

  // Formatear las fechas en el formato deseado (ISO 8601)
  const expiration_date_from = startDate.toISO({ includeOffset: true })
  const expiration_date_to = endDate.toISO({ includeOffset: true })


  const mercadopago = startMercadoPago()
  const user = await getUser(user_id)

  const result = await mercadopago?.preferences.create({
    statement_descriptor: "CacheShoop",
    items:cart,
    shipments:{
        cost: 0,
        mode: "not_specified",
    },
    payer: {
        name: user.name,
        email: user.email,
        // phone: {
        //     area_code: "11",
        //     number:  
        // },
        address: {
            street_name: "Street",
            street_number: 123,
            zip_code: "5700"
        }},
    notification_url:`${process.env.URL_CALLBACK}/api/payment/mp/webhook`,
    back_urls:{
      success: `${process.env.URL_CALLBACK}/api/payment/mp/success`,
      failure:`${process.env.URL_CALLBACK}/api/payment/mp/failure`,
      pending:`${process.env.URL_CALLBACK}/api/payment/mp/pending`
    },
     auto_return: "approved",
     external_reference: external_reference,
     expires: true,
     expiration_date_from: expiration_date_from ? expiration_date_from :'',
     expiration_date_to: expiration_date_to ? expiration_date_to :''
  })
  // console.log(result)
  if (result?.body.id){
     dto_save(user_id,external_reference,signature,result.body.id)
     const subtotal = cart.reduce(( total: number, product: CProduct ) => total + product.unit_price * product.quantity, 0 )
     const shippingCost = 10
     const total = ( subtotal + shippingCost ).toFixed( 2 ) 
     dto_save_uo({reference_id:external_reference,preferences:result.body.id,products:cart, status:"pending",total,delivery_cost:shippingCost.toString()})
     return result.body.id
 }else{
  return "no se pudo"
 }
 
}