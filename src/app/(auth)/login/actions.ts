'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation";

const redirectUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/auth/callback' : 'https://food-delivary-app.vercel.app/auth/callback'

export async function login() {
  console.log('Google login');
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider : 'google',
        options: {
          redirectTo: redirectUrl,
        },
      })
      if (error) {
        throw new Error(error.message)
      }
      if (data.url) {
        redirect(data.url) // use the redirect API for your server framework
      }
}

export async function logout() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    throw new Error(error.message)
  }
  redirect('/login')
}