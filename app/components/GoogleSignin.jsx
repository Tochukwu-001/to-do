import React from 'react'
import { FcGoogle } from 'react-icons/fc';


const GoogleSignin = () => {
  return (
    <div>
      <button
        className='rounded-full border py-2 px-2 w-full text-lg flex items-center justify-center hover:bg-black hover:text-white'
      >
        <FcGoogle className='text-3xl' />
        <span className='mx-auto text-2xl'>Continue with Google</span>
      </button>
    </div>
  )
}

export default GoogleSignin