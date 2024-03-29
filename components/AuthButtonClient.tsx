'use client'

import { type Session, createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { Button } from './ui'

export function AuthButton( { session, url }: { session: Session | null, url: string | undefined } ) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    console.log( url )
    await supabase.auth.signInWithOAuth( {
      provider: 'google',
      options: {
        redirectTo: `${url}/api/auth/callback`
      }
    } )
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }




  return <header>
    {
      session === null ? ( <Button onClick={handleSignIn}>Iniciar Sesión</Button> ) : <Button onClick={handleSignOut}>Cerrar Sesión</Button>
    }


  </header>
}

export default AuthButton
