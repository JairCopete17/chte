import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '../utils/supabaseClient'
import AdminDashboard from './AdminDashboard'

export default function AdminSignIn() {
  const [session, setSession] = useState(null)

   // Supabase Auth
   useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    
    return () => subscription.unsubscribe()
  }, [])

  return (
    <section className='w-11/12 md:w-3/4 text-justify text-gray-500 flex flex-col items-center'>
      {session
        ? <AdminDashboard />
        : <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: { default: { colors: {
                brand: '#f6c0d3', brandAccent: '#f093b4'}
              }}
            }}
            providers={[]}
          />
      } 
    </section>
  )
}