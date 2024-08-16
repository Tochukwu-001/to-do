import React from 'react'
import { FcGoogle } from 'react-icons/fc';


const GoogleSignin = () => {
  return (
    <div>
      <button
        className='rounded-full border py-2 px-3 w-full text-lg flex items-center justify-center'
      >
        <FcGoogle className='text-2xl' />
        <span className='mx-auto'>Continue with Google</span>
      </button>
    </div>
  )
}

export default GoogleSignin