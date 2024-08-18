import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaRegCopyright } from "react-icons/fa";
import { BsDashLg } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import Link from 'next/link';

const Footer = () => {
    const footerList =[
        {
            id:1,
            href:"#",
            name:"Home"
        },
        {
            id:2,
            href:"#",
            name:"Cookies"
        },
        {
            id:3,
            href:"#",
            name:"Help"
        },
        {
            id:4,
            href:"#",
            name:"FQAS"
        },


    ]
  return (
    <footer className=' h-[15rem] w-auto mt-4'>
      <main className='shadow-lg flex justify-between py-4 max-md:flex-col max-md:items-center'>
        <section className='flex flex-col gap-y-2 '>
        <h2 className='flex items-center text-blue-600 text-md cursor-pointer hover:text-lg ml-3 font-bold max-md:justify-center'>CONTACT
        <BsDashLg className='text-5xl'/>
        </h2>
        <p className='flex text-sm items-center gap-2 ml-3'>
        <IoLocationSharp className='text-xl'/>
        Plot 234 Sani Abdulahi street, Dantata Estate, Abuja
        </p>
        <p className='flex text-sm items-center gap-2 ml-3'>
        <FaPhoneVolume className='text-xl'/>
        +2348103717215
        </p>
        <p className='flex text-sm items-center gap-2 ml-3'>
        <IoMailSharp />
        alexandaras2015@gmail.com
        </p>
        <div className='flex gap-6 mb-7 text-4xl ml-3 max-md:justify-center'>
            <FaWhatsapp className=' border px-2 rounded-full border-blue-600  hover:text-cursor-pointer text-green-600' />
            <CiInstagram className=' border px-2 rounded-full border-blue-600  cursor-pointer text-pink-700'/>
            <ImFacebook2 className=' border px-2 rounded-full border-blue-600  cursor-pointer text-blue-600'/>
            <FaSquareXTwitter className=' border px-2 rounded-full border-blue-600 hover:text-black  cursor-pointer'/>
        </div> 
        </section>

        <section>
            <div className='text-blue-600 hover:text-lg'>
            <h2 className='flex items-center text-md font-bold cursor-pointer max-md:justify-center'>TO-DO<BsDashLg className='text-5xl'/></h2>
            </div>
            <p className='bg-blue-200 h-[10rem] w-[20rem] max-md:w-auto p-3'>
            "Unleash your productivity with our intuitive to-do app. 
            Conquer overwhelming task lists and find focus with personalized organization.
            Simplify your life, one task at a time."
            </p>
        </section>
 
        <section className='w-[10rem] max-md:w-auto'>
            <Link href={"#"} className='flex items-center text-blue-600 hover:text-lg mr-3 text-md font-bold'>
                ABOUT US<BsDashLg className='text-5xl'/>
            </Link>
        </section>
      </main>

        <section className='flex md:justify-between  items-center py-3 max-md:flex-col max-md;w-auto'>
        <ul className='flex gap-10 font-semibold mr-3 p-3 max-md:text-sm'>
            {footerList.map((list)=>(
                <li key={list.id} className='hover:text-blue-500 hover:border-b hover:border-b-blue-600'>
                    <Link href={list.href}>
                        {list.name}
                    </Link>
                </li>
            ))}
        </ul>
        <p className='flex items-center font-bold lg:mr-36 border-b border-blue-600 max-md:text-sm'>
        <FaRegCopyright />
        DarkHoncho, All Rights Reserved.
        </p>

        <h3 className='font-semibold max-md:text-sm mr-3'>@2024</h3>

        </section>
      
    </footer>
  );
}

export default Footer;
