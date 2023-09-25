import { NextRequest, NextResponse } from 'next/server';
import {dtoByID} from "@/supabase/client_product"

export const dynamic = 'force-dynamic'

export async function GET(req:NextRequest){
  try {
    const requestUrl = new URL(req.url)
    const id = requestUrl.searchParams.get('id')
    if(id){
      const product = await dtoByID(parseInt(id))  
      // console.log(response)
      return NextResponse.json(product)

    }


  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'Error fetching data'})
    
  }
}