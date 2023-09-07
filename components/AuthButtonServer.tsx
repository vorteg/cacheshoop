import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import AuthButton from "./AuthButtonClient";
import React from 'react';

export async function AuthButtonServer() {
  const supabase = createServerComponentClient( { cookies } )

  const { data: session } = await supabase.auth.getSession()
  const URL = process.env.URL_CALLBACK
  return <AuthButton session={session.session} url={URL} />

}


