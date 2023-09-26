
import { dto_update_user } from '@/supabase/client_user';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'


export async function POST (request:Request) {
  
  const body = await request.json()
  await dto_update_user(body)
  return NextResponse.json({data:'Datos actualizados correctamente'})
  // const requestUrl = new URL(request.url)
  // const id = requestUrl.searchParams.get('id')
  // const topic = requestUrl.searchParams.get('topic')

  // if ( code === 404)
  //   return NextResponse.json({data:'Payment not found', status:code})
  // return NextResponse.json({data:'webhook', status:code})
 

  
  
}