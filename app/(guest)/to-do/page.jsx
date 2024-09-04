import TodoForm from '@/app/components/TodoForm'
import { Form, Formik } from 'formik';
import React from 'react';


const page = () => {
  return (
    <main className='bg-blue-50'>
      <h1 className='uppercase text-blue-600 font-bold text-center text-4xl p-8 ' >add todos</h1> 
      <TodoForm/>
    </main>
  );
}

export default page;
