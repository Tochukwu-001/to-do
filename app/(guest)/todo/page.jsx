"use client"
import React from 'react'
import TodoForm from '@/app/components/TodoForm'

const page = () => {
  return (
    <div>
        <h1 className='uppercase text-blue-600 font-bold text-center text-4xl m-8'>add todos</h1>
        <TodoForm/>
    </div>
  )
}

export default page
