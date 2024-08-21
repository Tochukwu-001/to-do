"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useSession } from 'next-auth/react';

const Navbar = () => {
    const navLists = [
        {
            id: 1,
            href: "/",
            title: "Home"
        },
        {
            id: 2,
            href: "/about",
            title: "About"
        },
        {
            id: 3,
            href: "#",
            title: "Contact"
        }
    ]
    let x = 3
    const [navOpen, setNavOpen] = useState(false)

    const {data: session, status} = useSession()

    console.log(session, status);

    // console.log(session.user.name);
    
  return (
    <nav className='flex items-center justify-between p-3 shadow-md'>
       <Link href={'/'} className='text-2xl text-blue-600 font-bold flex gap-1 items-center z-50'>
        <Image src={'/logo.png'} width={200} height={200} className='rounded-full w-14 h-14'/>
        <span>to-do</span>
       </Link>
       
       <ul className={`flex gap-14 max-lg:flex-col  max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:w-full max-lg:h-dvh max-lg:top-0 max-lg:right-0 max-lg:bg-slate-200/90 transition-all ${!navOpen ? "max-lg:translate-x-full" : ""} `}>
        {navLists.map((list)=>(

      <li key={list.id} className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-600'>
            <Link href={list.href}>
                {list.title}
            </Link>
        </li>
        ))}
       </ul>

      {
        status == 'loading' ? ('...') :
        status == 'unauthenticated' ? (
          <Link href={'/signin'} className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-600'>Sign In</Link>
        ) : (
          <p>
            {session.user.name}
          </p>
        )
      }
      
      <button
        onClick={()=>setNavOpen(!navOpen)}
        className='lg:hidden z-50'
      >
        {navOpen ? <IoMdClose className='text-2xl text-blue-600'/> : <MdOutlineMenu className='text-2xl text-blue-600'/>}
      </button>
    </nav>
  )
}

export default Navbar