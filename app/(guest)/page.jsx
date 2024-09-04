import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className='h-dvh bg-black'>
        <div className='h-dvh bg-black/70'>
          <div className='flex flex-col gap-[8rem] items-center justify-center text-white h-dvh w-[50rem] max-lg w-full mx-auto max-lg:p-5'>
            <p className='text-2xl text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sed unde rem nesciunt iure, pariatur similique dolor quibusdam alias asperiores exercitationem molestias. Error in neque adipisci ipsum beatae, ipsa facere?
            </p>
            <div className='flex gap-[8rem] max-lg:flex-col'>
              <button className='border p-3 max-lg:p-2 text-3xl max-lg:text-lg rounded-lg hover:text-black hover:bg-white transition-all max-lg:w-full'>
                <Link href ={'#'}>Learn More</Link>
              </button>
              <button  className='border p-3 max-lg:p-2 text-3xl max-lg:text-lg rounded-lg hover:text-black hover:bg-white transition-all max-lg:w-full'>
                <Link href ={'/signin'}>Get Started</Link>
              </button>
            </div>
          </div>
        </div>
    </main>
  )
}

export default page