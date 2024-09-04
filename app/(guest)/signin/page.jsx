import React from 'react';
import Google from '@/app/components/Google';
import Apple from '@/app/components/Apple';
import Github from '@/app/components/Github';
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const page = () => {
    return (
        <main>
            <section className='h-[35rem] '>
                <div className='flex flex-col justify-center items-center h-[33rem]  bg-slate-100 w-[35%] mx-auto gap-3 rounded-md mt-6'>
                    <div className='flex gap-3 '>
                        <p className='text-3xl'>
                            Sign in to
                        </p>
                        <p className='text-blue-800 italic font-bold text-3xl'>
                            To-do
                        </p>
                    </div>

                    <div className='flex-col gap-4 mt-8   pt-2 h-[15rem] w-[20rem] flex items-center '>
                        <div className='border rounded-full '>
                            <Google/>
                        </div>
                        <div className='mt-4 border rounded-full '>
                            <Github/>
                        </div>
                        <div className='mt-4 border rounded-full'>
                            <Apple/>
                        </div>
                    </div>
                    <div className='flex-col gap-2  w-[20rem] flex items-center mt-4'>
                        <p>
                            Follow us on
                        </p>

                        <div className='flex gap-4 text-3xl mb-9  w-[15rem] h-[4rem] justify-center items-center'>
                            <button className='text-pink-500'><FaInstagram /></button>
                            <button><FaSquareXTwitter /></button>
                            <button className='text-red-600'><FaPinterest /></button>
                        </div>
                    </div>
                
                </div>
            
                
            </section>
        </main>
    );
}

export default page;