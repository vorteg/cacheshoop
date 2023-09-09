import { NextRequest, NextResponse } from 'next/server';

//esto es una opcion de nextjs , para evitar que cachee de forma estatica
// la ruta, y siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request:NextRequest) {
  const requestUrl = new URL(request.url)
  const data = requestUrl.searchParams
  // la plataforma web
  console.log("desde success")
  const valList: string[] = Array.from(data.values())


  return NextResponse.json({data:JSON.stringify({ data: valList }), status:200})
  
}