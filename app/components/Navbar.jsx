"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { signOut, useSession } from 'next-auth/react';
import { TbLoader3 } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GoSignOut } from "react-icons/go";




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
    },

  ]

  const [navOpen, setNavOpen] = useState(false)

  const { data: session, status } = useSession()
  console.log(session, status);



  return (
    <nav className='flex items-center justify-between p-3 shadow-md'>
      <Link href={'/'} className='text-2xl text-blue-600 font-bold flex gap-1 items-center z-50'>
        <Image src={'/logo.png'} width={200} height={200} alt='logo' className='rounded-full w-14 h-14' />
        <span>to-do</span>
      </Link>

      <ul className={`flex gap-14 max-lg:flex-col  max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:w-full max-lg:h-dvh max-lg:top-0 max-lg:right-0 max-lg:bg-slate-200/90 transition-all ${!navOpen ? "max-lg:translate-x-full" : ""} `}>
        {navLists.map((list) => (

          (<li key={list.id} className='font-semibold hover:text-blue-600 hover:border-b hover:border-b-blue-600'>
            <Link href={list.href}>
              {list.title}
            </Link>
          </li>)
        ))}

        <li>
          {
            status == 'loading' ? ('') :
              status == 'unauthenticated' ? ('')
                : (
                  <Link href={'/todo'} className='font-semibold hover:text-blue-600 hover:border-b hover:border-blue-600'>Todo</Link>
                )

          }
        </li>
        <li className=''>
          {
            status == 'loading' ? (<TbLoader3 className='text-3xl text-blue-600 animate-spin' />) :
              status == 'unauthenticated' ? (
                <Link href={'/signin'} className='font-semibold hover:text-blue-600 hover:border-b hover:border-blue-600 mr-[-14px]'>SignIn</Link>
              )
                : (
                  <main className='flex gap-3 items-center'>
                    

                    <div className='flex flex-col justify-center items-center'>
                      {/* <p className='text-black f italic'>{session.user.name}</p> */}
                      

                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger className='outline-none'><Avatar>
                      <AvatarImage src={session.user.image} />
                      <AvatarFallback className='text-black uppercase '>{session.user.name.slice(0,2)}</AvatarFallback>
                    </Avatar></DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem ><Link href={'/'}>Home</Link></DropdownMenuItem>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem ><Link href={'/todo'}>To-do</Link></DropdownMenuItem>
                        
                        <DropdownMenuItem ><button
                        onClick={()=>signOut({callbackUrl:'/'})}
                        className=' border border-blue-600 px-2 py-1 text-blue-600  rounded-lg shadow-sm hover:bg-blue-600 hover:text-white flex gap-1 items-center'><GoSignOut className='text-lg'/>Signout</button></DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                  </main>


                )

          }
        </li>



      </ul>



      <button
        onClick={() => setNavOpen(!navOpen)}
        className='lg:hidden z-50'
      >
        {navOpen ? <IoMdClose className='text-2xl text-blue-600' /> : <MdOutlineMenu className='text-2xl text-blue-600' />}
      </button>
    </nav>
  )
}

export default Navbar