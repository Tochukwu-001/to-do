"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

import { IoMenuSharp } from "react-icons/io5";
// import { MdOutlineMenu } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";


const Navbar = () => {
    const navList =[
        {
            id: 1,
            href: "#",
            title: "Home"
        },
        {
            id: 2,

            // href: "/about",

            href: "#",

            title: "About"
        },
        {
            id: 3,

            href: "/signin",
            title: "sign in"
        }

    ]
    const [navOpen, setNavOpen] = useState(false)
//   return (
//     <nav className='flex items-center justify-between p-3 shadow-md'>
//         <Link href={'/'} className='text-2xl text-blue-600 font-bold flex gap-1 items-center'>
//         <Image src={'/logo.png'} width={200} height={200} className='rounded-full w-14 h-14'/>
//             <span>to-do</span>
//         </Link>

//         <ul className={`flex gap-14 max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:w-full max-lg:h-dvh max-lg:top-0 max-lg:right-0 max-lg:bg-slate-200/50 transition-all ${!navOpen ? "max-lg: translate-x-full" :"" }  `}>
//             {navList.map((list)=>(
//                <li key={list.id} className='font:semi-bold hover:text-blue-600 hover:border-b'>
//                <Link href={list.href}>
//                     {list.title}
//                </Link>
//            </li>  
//             ))}
           
           
//         </ul>
        
//         <button onClick={()=>setNavOpen(!navOpen)} className='lg:hidden z-50'>
            
//             {navOpen ? <IoMdCloseCircle className='text-2xl text-blue-950'/> :   <IoMenuSharp className='text-2xl text-blue-950'/>}
//         </button>

//             href: "#",
//             title: "Contact"
//         },
//         {
//             id: 4,
//             href: "/signin",
//             title: "Sign In"
//         },
//     ]
//     let x = 3
//     const [navOpen, setNavOpen] = useState(false)

    
  return (
    <nav className='flex items-center justify-between p-3 shadow-md'>
       <Link href={'#'} className='text-2xl text-blue-600 font-bold flex gap-1 items-center z-50'>
        <Image src={'/logo.png'} width={200} height={200} className='rounded-full w-14 h-14'/>
        <span>to-do</span>
       </Link>
       
       <ul className={`flex gap-14 max-lg:flex-col  max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:w-full max-lg:h-dvh max-lg:top-0 max-lg:right-0 max-lg:bg-slate-200/90 transition-all ${!navOpen ? "max-lg:translate-x-full" : ""} `}>
        {navList.map((list)=>(

        <li key={list.id} className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-600'>
            <Link href={list.href}>
                {list.title}
            </Link>
        </li>
        ))}
       </ul>
      
      <button
        onClick={()=>setNavOpen(!navOpen)}
        className='lg:hidden z-50'
      >
         {/* {navOpen ? <IoMdClose className='text-2xl text-blue-600'/> : <MdOutlineMenu className='text-2xl text-blue-600'/>}  */}
        {navOpen ? <IoMdCloseCircle className='text-2xl text-blue-600'/> : <IoMenuSharp className='text-2xl text-blue-600'/>}
      </button>
    </nav>
  )
}

export default Navbar