"use client"
import React from 'react';
import TodoForm from '@/app/components/TodoForm';

const page = () => {
  return (
    <main className='bg-blue-100'>
      <h1 className='uppercase text-blue-600 font-bold text-center text-4xl p-8'>add To-do</h1>
      <TodoForm/>
    </main>
  );
}

export default page;
