"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const Navbar = () => {
    const navLists = [
        {
            id: 1,
            href: "/",
            title: "Home"
        },
        {
            id: 2,
            href: "#",
            title: "About"
        },
        {
            id: 3,
            href: "/contact",
            title: "Contact"
        },
       
    ]
    let x =3
    const[navOpen, setNavOpen] = useState(false)
    const {data: session, status} = useSession()

    // console.log(session, status );
    // console.log(session.user.name);
    
    
  return (
    <nav className='flex items-center justify-between p-3 shadow-md'>
      <Link href={'#'} className='text-2xl text-blue-500 font-bold z-50'>
      to-do
      </Link>

      <ul className={`flex gap-14 max-lg:flex-col max-lg:h-dvh max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:w-full max-lg:top-0
        max-lg:right-0 max-lg:bg-slate-200/50 transition-all ml-auto ${!navOpen ? "max-lg:translate-x-full" : ""}`}>
        {navLists.map((list)=>(

        <li key={list.id} className='font-semibold hover:text-blue-600 hover:border-b hover:border-blue-500'>
            <Link href={list.href}>
            {list.title}
            </Link>
            
        </li>
        ))}
      </ul>

        {
          status == 'loading' ? ('...') : 
          status == 'unauthenticated' ? (<Link href={'/signin'} className='font-semibold hover:text-blue-600 hover:border-b ml-10 hover:border-b-blue-500'>Sign In</Link>) : (
            // <p> <Link href={'/to-do'} className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-500 ml-5'>To-do</Link> {session.user.name} </p>
            <DropdownMenu>
  <DropdownMenuTrigger className='outline-none'><Avatar>
  {/* <AvatarImage src={session.user.image} /> */}
  <AvatarFallback>{session.user.name.slice(0,2).toUpperCase()} </AvatarFallback>
</Avatar>
</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-500 ml-5 hover:underline' >Profile</DropdownMenuItem>
    <DropdownMenuItem><Link href={'/to-do'} className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-500 ml-5'>To-do</Link></DropdownMenuItem>
    <DropdownMenuItem className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-500 ml-5 hover:underline' onClick={()=>signOut({callbackUrl: '/' })} >Sign Out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
          )
        }

      <button onClick={()=>setNavOpen(!navOpen)} className='lg:hidden z-50' >
        
      
      {navOpen ? <MdOutlineClose className='text-2xl text-blue-500'/> :  <GiHamburgerMenu className= 'text-2xl text-blue-500'/> }
       
      </button>
    </nav>
  );
}

export default Navbar;
