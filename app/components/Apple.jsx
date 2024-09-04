import React, {useState} from 'react';
import { FaApple } from "react-icons/fa";

const Apple = () => {
  return (
    <div>
         <div  className='flex items-center gap-[5rem]  border rounded-full border-black mx-5 p-3 hover:cursor-pointer hover:text-white
      hover:bg-black'>
          <p className='flex justify-left'>
          <FaApple className=' text-2xl'/>
          </p>
          <p>Continue with Apple</p>  
        </div>
    </div>
  );
}

export default Apple;
