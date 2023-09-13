import { receiveWebhook } from './controller'
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'


export async function POST (request:Request) {
  
  const body = await request.json()
  const requestUrl = new URL(request.url)
  const id = requestUrl.searchParams.get('id')
  const topic = requestUrl.searchParams.get('topic')
  const code = await receiveWebhook(body, id, topic)

  console.log("desde webhook")  
  if ( code === 404)
    return NextResponse.json({data:'Payment not found', status:code})
  return NextResponse.json({data:'webhook', status:code})
 

  
  
}