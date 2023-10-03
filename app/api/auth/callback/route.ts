import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

//esto es una opcion de nextjs , para evitar que cachee de forma estatica
// la ruta, y siempre se ejecute en el servidor
export const dynamic = 'force-dynamic'

export async function GET (request:NextRequest) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  // la plataforma web
  if (code !== null){
    const supabase = createRouteHandlerClient({cookies})
    await supabase.auth.exchangeCodeForSession(code)


  }
  console.log(request.url)

  return NextResponse.redirect(requestUrl.origin)
  
}