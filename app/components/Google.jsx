import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { RiLoader4Line } from "react-icons/ri";
import {signIn} from 'next-auth/react'


const Google = () => {
  const[processing, setProcessing] = useState(false)

  const handleSignIn = ()=>{
    signIn('google', {callbackUrl: '/'})
    setProcessing(true)
  }
  return (
    <div>
        <div 
         disabled={processing}
         onClick={handleSignIn}
        className='flex items-center gap-[5rem]  border rounded-full border-black mx-5 p-2 hover:cursor-pointer hover:text-white
        hover:bg-black'>
          <p className='flex justify-left'>
          <FcGoogle className='text-green-600 text-2xl'/>
          </p>
          <p className='text-lg'>Continue with Google</p>
          {processing && <RiLoader4Line className='text-2xl animate-spin'/>}   
        </div>
      
    </div>
  );
}

export default Google;
