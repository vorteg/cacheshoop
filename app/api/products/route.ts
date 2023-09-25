
import { NextRequest, NextResponse } from 'next/server';
import {dto} from "@/supabase/client_product"
//esto es una opcion de nextjs , para evitar que cachee de forma estatica
// la ruta, y siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request:NextRequest) {
  
  
  const products = await dto()  

 

  return NextResponse.json(products)
  
}