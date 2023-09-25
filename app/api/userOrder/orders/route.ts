import { NextRequest, NextResponse } from 'next/server';
import {dto_read_orders} from "@/supabase/client_user_order"

export const dynamic = 'force-dynamic'

export async function GET(req:NextRequest){
  try {
    const requestUrl = new URL(req.url)
    const date = requestUrl.searchParams.get('date') 
    const reference = requestUrl.searchParams.get('reference') 
    
    if(date){
      const product = await dto_read_orders({date})  
      return NextResponse.json(product)

    }
    if(reference){
      const product = await dto_read_orders({reference})
      return NextResponse.json(product)
    }
      // console.log(response)
    const product = await dto_read_orders({})  
    return NextResponse.json(product)


  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error fetching data'})
    
  }
}