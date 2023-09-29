import { NextResponse } from 'next/server';
import { createOrder } from './controller';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

export async function POST (request:Request) {

  const supabase = createServerComponentClient( { cookies } )
  const { data: { session } } = await supabase.auth.getSession()
  
  if ( session === null ) {
    redirect( '/login' )
  }
  
  

  if (session?.user.id)
     {const user_id = session?.user.id
    
      const body = await request.json()
      
      const result = await createOrder(body, user_id)
    
      return NextResponse.json({data:result, status:200})
    }

    return NextResponse.json({data:"", status:404})
  

  
}