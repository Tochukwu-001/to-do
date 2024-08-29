
import TdForm from '@/app/components/TdForm'
import Test from '@/app/components/test'
import TodoForm from '@/app/components/TodoForm'
import React from 'react'

const page = () => {
  return (
    <div className='bg-blue-50'>
        <h1 className='uppercase text-blue-600 font-bold text-center text-4xl p-8'>add todos</h1>
     
        <TodoForm/>
        <TdForm/>
        <Test/>
    </div>
  )
}

export default page