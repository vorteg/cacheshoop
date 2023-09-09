import { NextRequest, NextResponse } from 'next/server';
import { createOrder } from './controller';

export const dynamic = 'force-dynamic'

export async function POST (request:Request) {
  const body = await request.json()
  const result = await createOrder(body)

  return NextResponse.json({data:result, status:200})
  
}