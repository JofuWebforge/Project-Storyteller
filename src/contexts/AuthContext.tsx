import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { User, Session } from '@supabase/supabase-js'
import { supabase } from '../services/supabase'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  isDemoMode: boolean
  signUp: (email: string, password: string, userData?: { name?: string }) => Promise<any>
  signIn: (email: string, password: string) => Promise<any>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<any>
  enterDemoMode: () => void
  exitDemoMode: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Demo user object - partial User type for demo mode
const DEMO_USER = {
  id: 'demo-user',
  email: 'demo@knowledgenexus.com',
  user_metadata: { name: 'Demo User' },
  aud: 'authenticated',
  created_at: new Date().toISOString(),
  app_metadata: {}
} as any as User

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [isDemoMode, setIsDemoMode] = useState(false)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, userData?: { name?: string }) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    })
    return { data, error }
  }

  const signIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data, error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const resetPassword = async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    return { data, error }
  }

  const enterDemoMode = () => {
    setIsDemoMode(true)
    setUser(DEMO_USER)
    setSession(null)
    setLoading(false)
  }

  const exitDemoMode = () => {
    setIsDemoMode(false)
    setUser(null)
    setSession(null)
  }

  const value = {
    user,
    session,
    loading,
    isDemoMode,
    signUp,
    signIn,
    signOut,
    resetPassword,
    enterDemoMode,
    exitDemoMode,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}