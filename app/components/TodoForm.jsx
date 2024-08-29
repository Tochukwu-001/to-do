"use client"
import { db } from '@/lib/firebase';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";
import *as Yup from 'yup'
import { collection, addDoc} from 'firebase/firestore'
import { FaTrashArrowUp } from "react-icons/fa6";




const TodoForm = () => {

  const[todos, setTodos]=useState(['learn react','learn Next'])


  const initval={
    title:'',
    task:''
  }
   const formVal=Yup.object().shape({
    title:Yup.string()
    .required('please enter a task')
   })
   const handleSubmit= async(values)=>{
    console.log(values);

    // create a document to be stored

    const info={
      title:values.title,
      task: values.task
    }

    const docRef=collection(db,'todos')
    await addDoc(docRef,info)
    
   }

  return (
    <main className='h-dvh bg-blue-100'>
      <Formik initialValues={initval}
              validationSchema={formVal}
              onSubmit={handleSubmit}
      >
        <Form className='flex justify-center'>
          <div className='flex items-center w-[80%] gap-4 px-10'>
            <Field className='px-3 py-2 w-full border-none outline-none rounded-md text-2xl text-center placeholder:text-black placeholder:italic shadow-md'
              name='title'
              placeholder='enter a task......'
            />
           
            <button type='submit' className='bg-blue-600 px-3 py-2 rounded-md shadow-md'><FaPlus className='text-2xl text-white ' /></button>

          </div>
         <div >
           <ErrorMessage
              name='title'
              component={'p'}
              className='text-red-500 text-semibold'
            />
         </div>
        </Form>
      </Formik>
      <div>
        <ul className='w-full '>
          {
            todos.map((todo)=>(
              <li className='bg-white my-2 px-4 py-3 flex justify-between w-[90%] mx-auto rounded-lg font-semibold'>
                <input type="checkbox" name="" id="" />
                {todo}
                <button className='hover:text-red-500 text-2xl hover:text-3xl transition-all'>
                <FaTrashArrowUp />

                </button>
              </li>
            ))
          }
        </ul>
      </div>
      <p className='text-c'>You have 2 Tasks</p>
    </main>
  );
}

export default TodoForm;
