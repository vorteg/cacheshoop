import { NextResponse } from 'next/server';
import {dto_read_orders} from "@/supabase/client_user_order"

export const dynamic = 'force-dynamic'

export async function POST(req:Request){
  try {
    const filters = await req.json()
    const orders = await dto_read_orders(filters)  
    return NextResponse.json(orders)

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error fetching data'})
    
  }
}