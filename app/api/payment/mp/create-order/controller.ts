import {startMercadoPago } from '@/app/api/helpers/config-ml'
import { CProduct } from "@/app/(store)/Cart/types";
import * as crypto from 'crypto';
import {dto_read_user} from "@/supabase/client_user"
import { User } from './types';
import { dto_save } from "@/supabase/client_preferences"
import { DateTime } from 'luxon';
import { dto_save_uo } from '@/supabase/client_user_order';
import axios from 'axios';
import { siteConfig } from '@/config/site';



async function sendEmail(body:any) {
  try {    
    await axios.post(`${siteConfig.mainUrl}/api/email`, body)    
  } catch (error) {
    console.log(error)
  }
}


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
  const user:User = await dto_read_user( id )
  return user

}

async function saveOrder(user_id:string,order_ref:string,sign:string, preferenceId:string) {
  console.log(user_id,order_ref, sign, preferenceId)
}


export async function createOrder(cart:any,user_id:string){
  const { external_reference, signature } = createExternalReference();
  
  const address:string = cart.address ? cart.address:"No se agrego direccion, favor de ponerse en contacto"
  const items:CProduct[] = cart.cart
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
    items:items,
    shipments:{
        cost: cart.shippingCost,
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
            street_name: address,
        }},
    notification_url:`${process.env.URL_CALLBACK}/api/payment/mp/webhook`,
    back_urls:{
      success: `${process.env.URL_CALLBACK}/api/payment/mp/success`,
      failure:`${process.env.URL_CALLBACK}/api/payment/mp/failure`,
      pending:`${process.env.URL_CALLBACK}/api/payment/mp/pending`
    },
     auto_return: "approved",
     external_reference: `${external_reference}-${signature}`,
     expires: true,
     expiration_date_from: expiration_date_from ? expiration_date_from :'',
     expiration_date_to: expiration_date_to ? expiration_date_to :''
  })
  
  if (result?.body.id){
    await dto_save_uo({user_id:user_id,reference_id:external_reference,preferences:result.body.id,products:items, status:"pending",total:cart.total,delivery_cost:cart.shippingCost.toString()})
    
    await dto_save(user_id,external_reference,signature,result.body.id)
     
    const total:number = cart.total
    
     const dto_email = {
         email:user.email,
         type:"pending",
         firstName:user.name,
         data:{
              orden:`${external_reference}-${signature}`,
              total:total,
              products: items.map((item)=>({
                id:item.id,
                name:item.title,
                stock_quantity:item.quantity,
                price:item.unit_price
              })), 
              address:address
              }

         }
      
     await sendEmail(dto_email)


     return result.body.id
 }else{
  return "no se pudo"
 }
 
}