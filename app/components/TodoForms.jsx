"use client"
import React, {useEffect, useState} from 'react';
import { FaPlus } from "react-icons/fa6";
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup'
import {collection, addDoc, getDocs, doc, updateDoc} from 'firebase/firestore'
import { db } from '@/lib/firebase';
import { FaRegTrashAlt } from "react-icons/fa";


const TodoForms = () => {
  const [todos, setTodos] = useState ([])

  useEffect(()=>{
    //function to fetch todos
    const fetchTodos = async ()=>{
      try {
        const querySnapshot = await getDocs(collection(db,'todos'))
        const todosData = querySnapshot.docs.map(doc=>({
          id: doc.id,
          ...doc.data()
        }))
        setTodos(todosData)
        console.log(todos);
        
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }
    fetchTodos();
  },[]);

  const initVal = {
    title: '',
    task: '',
  };
    
  const formValidation = Yup.object().shape({
    title: Yup.string()
    .required('Please enter a task')
  })

  const handleSubmit = async (values, {resetForm})=>{
    try {

      //  create a document to be stored
        const info ={
            title: values.title,
            createdAt: new Date(),
            completed: false
        }
        // add this document to the database
        const docRef = collection(db,"todos")
        await addDoc(docRef, info)

        //set input field to empty after clicking submit
        // values.title = "";
        //or resetForm used in parameter and called after setTodos - THIS IS WHAT WE USED FOR THE PROJECT

        // fetch updated list from db

        // {1}
        // const querySnapshot = await getDocs(collection(db,'todos'))
        // const todosData = querySnapshot.docs.map(doc=>({
        //   id: doc.id,
        //   ...doc.data()
        // }))

        // setTodos(todosData)


          //{2}
        //Appending new tasks to the array
        setTodos(prevTodos => [...prevTodos, {id:docRef.id, ...info}])
        resetForm()
    } catch (error) {
      console.error("error adding task: ",error)
    }
  }
  //updating the check box on refresh and when task is done
  const check = async (infoId, currentStatus)=>{
    try {
      //update info in db
      const infoRef = doc(db, 'todos', infoId)
      await updateDoc(infoRef, {completed: !currentStatus})

      //update infoo locally
      setTodos(prevTodos=>
        prevTodos.map(todo =>
          todo.id === infoId ? {...todo, completed: !currentStatus} : todo
        )
      )
    } catch (e) {
        console.error("error updating task: ", e)
    }
  }

  return (
    <main className='h-dvh bg-blue-50 overflow-y-auto'>
       <Formik
        initialValues={initVal}
        validationSchema={formValidation}
        onSubmit={handleSubmit}
       >
          <Form className='flex justify-center'>
            <div className='w-full p-10 flex items-center gap-10'>
              <div className='w-full flex flex-col h-12'>
              <Field
                name='title'
                placeholder='Enter a task'
                className='w-full border-none outline-none rounded-md px-3 py-2 text-2xl shadow-lg'
                />
                <ErrorMessage
                  name='title'
                  component={'p'}
                  className='text-red-500 text-semibold'
                  />
                </div>

                 {/* <Field
                name='task'
                placeholder='Enter a task'
                className='w-full border-none outline-none rounded-md px-3 py-2 text-2xl'
                /> */}
                <button
                  type='submit'
                  className='p-3 rounded-md text-white bg-blue-600 text-2xl hover:bg-blue-900'
                  >
                    <FaPlus />
                </button>
            </div>
          </Form>
       </Formik>

       <div>
        <ul className='w-full'>
            {
              todos.map((todo)=>(
                    //to use interpolation with css use {``} back ticks and curly braces
                <li key={todo.id} className={`w-[90%] mx-auto flex justify-between p-3 m-3 border-b border-b-gray-300 capitalize
                      rounded-lg bg-white`}>
                  <input 
                  onChange={()=> check(todo.id, todo.completed)}
                  checked = {todo.completed}
                  type="checkbox" />
                  <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
                  {todo.title}
                  </span>
                  <button className='w-12'>
                     <FaRegTrashAlt className='hover:text-red-600 hover:text-2xl transition-all '/>
                  </button>
                </li>
              ))
            }
        </ul>
       </div>
       <p className='text-center text-sm p-10'>You have {todos.length} tasks</p>
    </main>
      
    
  );
}

export default TodoForms;
