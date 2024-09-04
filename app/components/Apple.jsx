"use client"
import React from "react"
import { FaApple } from "react-icons/fa";
import {signIn} from 'next-auth/react'


const Apple = () => {
    const handleSignin = ()=>{
        signIn('apple', {callbackUrl: '/'})
    }
    return (
        <button className="flex gap-9 justify-center items-center mx-9 my-2  " onClick={handleSignin}>
            <FaApple />

            <span className=" hover:text-blue-400">
                 Continue with Apple  
            </span>
       
        </button>
    );
}

export default Apple;