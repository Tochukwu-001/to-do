import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main className='h-dvh bg-[url(/bg.png)] bg-cover bg-center'>
      <div className='h-dvh bg-black/70'>
        <div className='flex flex-col gap-10 items-center justify-center text-white h-dvh w-[50rem] mx-auto'>
          <p className='text-2xl text-center'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse illo accusantium a tempore, voluptatibus aliquid aperiam iste quae nam tempora consectetur deserunt itaque maxime ipsum ipsa pariatur, quis distinctio voluptatum sed neque veniam. Consequuntur sed asperiores quasi! Officia, perspiciatis.
          </p>
          <div className='flex gap-[8rem] max-lg:flex-col'>
            <button className='border p-3 text-3xl max-lg:text-lg max-lg:p-2 rounded-lg hover:text-black hover:bg-white transition-all'>
                <Link href={'#'}>Learn More</Link>
            </button>
            <button className='border p-3 text-3xl max-lg:text-lg max-lg:p-2 rounded-lg hover:text-black hover:bg-white transition-all'>
              <Link href={'/signin'}>Get Started</Link>
            </button>
          </div>
        </div>
      </div>
        homepage
    </main>
  )
}

export default page