import { NextRequest, NextResponse } from 'next/server';

//esto es una opcion de nextjs , para evitar que cachee de forma estatica
// la ruta, y siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request?:NextRequest) {
  // const requestUrl = new URL(request.url)
  // const code = requestUrl.searchParams.get('code')
  // la plataforma web
  console.log("desde pending")
  console.log(request)

  return NextResponse.json({data:"Desde Success", status:200})
  
}