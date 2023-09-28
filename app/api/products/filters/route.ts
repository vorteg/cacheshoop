
import { dtofiltersSearch } from '@/supabase/client_product';
import { dto_update_user } from '@/supabase/client_user';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'


export async function POST (request:Request) {
  
  const body = await request.json()
  const data = await dtofiltersSearch(body)
  return NextResponse.json({data})
  // const requestUrl = new URL(request.url)
  // const id = requestUrl.searchParams.get('id')
  // const topic = requestUrl.searchParams.get('topic')

  // if ( code === 404)
  //   return NextResponse.json({data:'Payment not found', status:code})
  // return NextResponse.json({data:'webhook', status:code})
 

  
  
}