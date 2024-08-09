"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
    const navLists = [
        {
            id: 1,
            href: "#",
            title: "Home"
        },
        {
            id: 2,
            href: "#",
            title: "About"
        },
        {
            id: 3,
            href: "#",
            title: "Contact"
        },
        {
            id: 4,
            href: "#",
            title: "Sign In"
        },
    ]
    let x = 3

    
  return (
    <nav className='flex items-center justify-between p-3 shadow-md'>
       <Link href={'#'} className='text-2xl text-blue-600 font-bold flex gap-1 items-center'>
        <Image src={'/logo.png'} width={200} height={200} className='rounded-full w-14 h-14'/>
        <span>to-do</span>
       </Link>
       
       <ul className='flex gap-14'>
        {navLists.map((list)=>(

        <li key={list.id} className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-600'>
            <Link href={list.href}>
                {list.title}
            </Link>
        </li>
        ))}
       </ul>
      
    </nav>
  )
}

export default Navbar