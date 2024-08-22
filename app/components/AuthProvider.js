"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'

const AuthProvider = ({Children}) => {
  return (
    <div>
        <SessionProvider>
            {Children}
        </SessionProvider>
    </div>
  )
}

export default AuthProvider