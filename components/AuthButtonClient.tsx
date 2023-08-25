'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export function AuthButton( { session }: { session: Session | null } ) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth( {
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback'
      }
    } )
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }




  return <header>
    {
      session === null ? ( <button onClick={handleSignIn}>Sign in</button> ) : <button onClick={handleSignOut}>Sign out</button>
    }


  </header>
}

export default AuthButton
