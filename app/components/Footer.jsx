import Link from 'next/link';
import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    
    <div className='flex justify-between p-4 hover:cursor-pointer'>
      <div className='flex gap-2 text-sm underline '>
        <p className='hover:text-blue-500'>©2024 Early Code |</p>
        <ul className='flex gap-2'>
        <Link href={'#'}><li className='hover:text-blue-500'>Security |</li></Link> 
        <Link href={'#'}><li className='hover:text-blue-500'>Terms |</li></Link> 
        <Link href={'#'}><li className='hover:text-blue-500'>Your Privacy|</li></Link> 
        </ul> 
      </div>
      <div>
        <button className='flex gap-4 hover:cursor-pointer'>
        <FaFacebook className='text-2xl text-blue-700'/>
        <FaXTwitter className='text-2xl'/>
        <FaInstagramSquare className='text-2xl text-pink-800'/>
        <FaLinkedin className='text-2xl text-blue-500'/>  
        </button>
      </div>
      
    </div>
  );
}

export default Footer;
