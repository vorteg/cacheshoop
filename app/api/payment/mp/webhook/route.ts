import { receiveWebhook } from './controller'
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'


export async function POST (request:Request) {
  
  const body = await request.json()
  const code = await receiveWebhook(body)

  console.log("desde webhook")
  console.log(body)

  return NextResponse.json({data:JSON.stringify({ data: "holi desde webhook" }), status:code})

  // la plataforma web
 

  
  
}