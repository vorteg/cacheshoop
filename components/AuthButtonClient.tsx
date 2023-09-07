'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Button } from './ui'

export function AuthButton( { session }: { session: Session | null } ) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth( {
      provider: 'google',
      options: {
        redirectTo: `${process.env.URL_CALLBACK}/auth/callback`
      }
    } )
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }




  return <header>
    {
      session === null ? ( <Button onClick={handleSignIn}>Sign in</Button> ) : <Button onClick={handleSignOut}>Sign out</Button>
    }


  </header>
}

export default AuthButton
