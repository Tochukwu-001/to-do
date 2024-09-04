"use client"
import Google from '@/app/components/Google';
import Apple from '@/app/components/Apple';
import Github from '@/app/components/Github';
import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const page = () => {
  return (
    <main className='h-dvh'>

    <div className='flex flex-col w-[30rem] mt-[3rem] bg-slate-200 mx-auto h-[40rem] gap-[4rem] '>
        <div className='flex gap-[2rem] mt-10 justify-center '>
                <p className='text-3xl  '>Sign in to</p> 
                <p className=' text-3xl text text-blue-500 italic font-bold'> To-Do</p>
        </div>
        <div className='flex flex-col gap-3'>
            <button className='p-5'>
                <Google/>
            </button>
            <button className='p-5'>
                <Apple/>
            </button>
            <button className='p-5'>
                <Github/>
            </button>
        </div>
        <div className='flex flex-col gap-5'>
            <div className='flex justify-center'>
                <p>Follow us on</p>
            </div>
            <div className='flex gap-10 justify-center'>
                <FaInstagram className='text-3xl text-pink-800 hover:cursor-pointer'/>
                <FaSquareXTwitter className='text-3xl hover:cursor-pointer'/>
                <FaPinterest className='text-3xl text-red-600 hover:cursor-pointer'/>

            </div>
                
        </div>
    </div>
    </main>
  );
}

export default page;
