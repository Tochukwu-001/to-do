"use client"
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

const GithubSignin = () => {

  const handleSignIn = () => {
    signIn('github', {callbackUrl: '/'})
  }

  return (
    <button
      onClick={handleSignIn}
      className='rounded-full border py-2 px-3 w-full text-lg flex items-center justify-center'
    >
      <FaGithub className='text-2xl text-black' />
      <span className='mx-auto text-black'>Continue with Github</span>
    </button>
  )
}

export default GithubSignin