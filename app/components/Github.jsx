"use client"

import React, {useState} from 'react';
import { FaGithub } from "react-icons/fa";
import {signIn} from 'next-auth/react'
import { RiLoader4Line } from "react-icons/ri";

const Github = () => {

  const[processing, setProcessing] = useState(false)

  const handleSignIn = ()=>{
    signIn('github', {callbackUrl: '/'})
    setProcessing(true)
  }
  return (
    <div
    >
      <div
      disabled={processing}
        onClick={handleSignIn}
      className='flex items-center gap-[5rem]  border rounded-full border-black mx-5 p-2 hover:cursor-pointer hover:text-white
      hover:bg-black'>
          <p className='flex justify-left'>
          <FaGithub className=' text-2xl'/>
          </p>
          <p className='text-lg'>Continue with Github</p>
          {processing && <RiLoader4Line className='text-2xl animate-spin'/>}  
        </div>
    </div>
  );
}

export default Github;
