import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AuthButton from "./AuthButtonClient";
import React from 'react';


export function AuthButtonServer() {
  const supabase = createServerComponentClient( { cookies } )
  const getAuth = async function () {

    const { data: session } = await supabase.auth.getSession()

    return <AuthButton session={session.session} />
  }

  return getAuth().then( result => result )
}