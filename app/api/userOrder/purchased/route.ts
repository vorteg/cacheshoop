import { NextRequest, NextResponse } from 'next/server';
import {dto_read_purchases} from "@/supabase/client_user_order"

export const dynamic = 'force-dynamic'

export async function GET(req:NextRequest){
  try {
    
      const product = await dto_read_purchases()  
      return NextResponse.json(product)

    


  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error fetching data'})
    
  }
}