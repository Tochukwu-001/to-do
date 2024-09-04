"use client"
import React, {useState} from "react";
import {FaGithub} from 'react-icons/fa'
import {signIn} from 'next-auth/react'
import { RiLoader4Fill } from "react-icons/ri";


const Github = () => {

    const [processing, setProcessing] = useState(false)

    const handleSignin = ()=>{
        signIn('github', {callbackUrl: '/'})
        setProcessing(true)
    }
    return (
        <button className="flex gap-9 justify-center items-center mx-9 p-2 text-md  "disabled={processing} onClick={handleSignin}>
            <FaGithub />
         
          <span className=" hover:text-blue-400">
             Continue with Github
          </span>

          {processing && <RiLoader4Fill className="animate-spin text-md" />}
        </button>
    );
}

export default Github;