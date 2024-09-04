"use client"
import React, { useState } from "react"
import { FcGoogle } from "react-icons/fc";
import { RiLoader4Line } from "react-icons/ri";
import {signIn} from 'next-auth/react'


const Google = () => {
    const [processing, setProcessing] = useState(false)
    const handleSignin = ()=>{
        signIn('google', {callbackUrl: '/'})
    }
    return (
        <button 
        disabled={processing}
        onClick={handleSignin}
        className=" flex gap-9 justify-center items-center mx-9 my-2  hover:text-blue-400" >
            <FcGoogle />

            <span>
             Continue with Google
            </span>
            {processing && <RiLoader4Line className="text-2xl animate-spin"/>}
        </button>


    );
}

export default Google;