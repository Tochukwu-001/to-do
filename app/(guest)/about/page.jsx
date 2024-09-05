import React from 'react'
const page = () => {
  return (
    <main>
        <div className='bg-black h-dvh'>
          <div className='flex flex-col justify-center items-center'>
              <h3 className='text-blue-600 text-4xl font-extrabold mt-5'>
               About Us
              </h3>
              <h1 className='text-blue-400 text-3xl font-bold mt-8'>
                  Welcome to To-do, your trusted companion for getting things done
              </h1>
          </div>
          <div className='flex-col mt-9  px-14 '>
            <div className='flex-col items-center mr-12'>
              <h2 className='text-blue-500 font-semibold text-2xl'>Our Mission</h2>
              <p className='text-white'>
               Our mission is to help you simplify your life and boost your productivity with our intuitive and user-friendly to-do list tools. 
                We believe that staying organized shouldn't be overwhelming, which is why we've created a platform that's easy to use, customizable, and accessible from anywhere. Our team is passionate about helping you achieve your goals, one task at a time.
              </p>
            </div>
            <div className='flex-col mr-12 mt-7'> 
              <h2 className='text-blue-500 font-semibold text-2xl'>What you can achieve</h2>
              <div className='text-sm text-blue-400 '>
                With To-do you can:
                <h1 className='text-white text-sm'>
                  <p>- Create and manage your to-do lists with ease</p>
                  <p>- Set reminders and due dates to stay on track</p>
                  <p>- Prioritize tasks and focus on what matters most</p>
                  <p>- Collaborate with friends, family, or colleagues on shared lists</p>
                </h1>
              </div>
            </div>
            <div className='flex justify-center items-center mt-9'>
              <h1  className='font-semibold text-2xl text-blue-400'>Join our community today and start making the most of your time!</h1>
            </div>
          </div>
        </div>
    </main>
    
  )
}

export default page