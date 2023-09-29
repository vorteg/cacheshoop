import { NextRequest, NextResponse } from 'next/server';
import {dto_read_uo} from "@/supabase/client_user_order"

export const dynamic = 'force-dynamic'

export async function GET(req:NextRequest){
  try {
      const requestUrl = new URL(req.url)
      const id='asdasd' 
    
      const product = await dto_read_uo(id)  
      console.log('desde api')
      console.log(product)
      return NextResponse.json(product)



  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error fetching data'})
    
  }
}