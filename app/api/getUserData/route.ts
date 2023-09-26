import { NextRequest, NextResponse } from 'next/server';
import {dto_read_user} from "@/supabase/client_user"
//esto es una opcion de nextjs , para evitar que cachee de forma estatica
// la ruta, y siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (req:NextRequest) {
  try {
    const requestUrl = new URL(req.url)
  const id = requestUrl.searchParams.get('id')
  const user = await dto_read_user(id)  

 

  return NextResponse.json(user)
  } catch (error) {
    console.log(error)
    return NextResponse.json({data:"no data"})
  }
  
  
}