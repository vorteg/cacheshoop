import { receiveWebhook } from './controller'
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'


export async function POST (request:Request) {
  
  const body = await request.json()
  const requestUrl = new URL(request.url)
  console.log(requestUrl.searchParams.toString())
  const code = await receiveWebhook(body)

  console.log("desde webhook")  
  if ( code === 404)
    return NextResponse.json({data:'Payment not found', status:code})
  return NextResponse.json({data:'webhook', status:code})
 

  
  
}