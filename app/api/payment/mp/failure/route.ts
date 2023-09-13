import { NextRequest, NextResponse } from 'next/server';
import { dto_save } from "@/supabase/client_payment_status"

//esto es una opcion de nextjs , para evitar que cachee de forma estatica
// la ruta, y siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request:NextRequest) {
  const requestUrl = new URL(request.url)
  const data = {collection_id:requestUrl.searchParams.get('collection_id') ,
  collection_status:requestUrl.searchParams.get('collection_status'),
  payment_id:requestUrl.searchParams.get('payment_id'),
  status:requestUrl.searchParams.get('status'),
  external_reference:requestUrl.searchParams.get('external_reference') ,
  payment_type:requestUrl.searchParams.get('payment_type'),
  merchant_order_id:requestUrl.searchParams.get('merchant_order_id'),
  preference_id:requestUrl.searchParams.get('preference_id'),
  site_id:requestUrl.searchParams.get('site_id'),
  processing_mode:requestUrl.searchParams.get('processing_mode'),
  merchant_account_id:requestUrl.searchParams.get('merchant_account_id')
}
  dto_save(data)
    
  
  // la plataforma web
  console.log("desde failure")
  console.log(data)

  return NextResponse.redirect(`${process.env.URL_CALLBACK}`)
  
}