import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <main className='h-dvh bg bg-cover bg-center'>
      <div className='h-dvh bg-black/70'>
          <div className='flex flex-col gap-[8rem] max-lg:gap-[15rem] items-center justify-center text-white h-dvh w-[50rem] mx-auto max-lg:w-full max-lg:p-5'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, fugit porro. Officia, 
                  magni assumenda eveniet sint vel et nostrum accusantium recusandae reiciendis, tempora sunt, 
                  rerum quia. Debitis temporibus velit dolore, excepturi quod quo deserunt facere amet distinctio 
                  repellendus. Earum, quaerat?
                </p>
                <div className='flex gap-[8rem] max-lg:flex-col max-lg:gap-5'>
                  <button className='max-lg:text-lg max-lg:p-2 bg-white text-black p-2 hover:text-blue-500 hover:bg-gray-500 rounded-lg text-3xl transition-all border-2 '>
                    <Link href={'#'}>Learn More</Link>
                  </button>
                  <button className='max-lg:text-lg max-lg:p-2 bg-white text-black p-2 hover:text-blue-500 hover:bg-gray-500 rounded-lg text-3xl transition-all border-2 '>
                    <Link  href={'/signin'}>Get Started</Link>
                  </button>
                </div>
          </div>

      </div>
    </main>
  );
}

export default page;
